import Sidebar from './components/Sidebar/Sidebar';
import { Route } from "react-router-dom";
import CreateNewTestCase from './components/Create/CreateNewTestCase';
import "./CSS/App.css";
import Login from './Login';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import { useEffect } from "react";
import { auth } from './firebase';
import TestCases from "./components/Tests/TestCases";
import SuiteCases from "./components/Tests/SuiteCases";
import MyCases from './components/Tests/MyCases'

function AppNew() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <div className="app__body">
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Route path="/" exact>
              <TestCases />
            </Route>
            <Route path="/suite">
              <SuiteCases />
            </Route>
            <Route path="/create">
              <CreateNewTestCase />
            </Route>
            <Route path="/my-cases">
              <MyCases />
            </Route>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppNew;
