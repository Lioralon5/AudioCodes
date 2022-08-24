import Sidebar from "./components/Sidebar/Sidebar";
import { Route } from "react-router-dom";
import AllTestCases from "./pages/AllTestCases";
import CreateNewTestCase from "./pages/CreateNewTestCase";
import Suite from "./pages/Suite";
import "./App.css";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
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
              <AllTestCases />
            </Route>
            <Route path="/suite">
              <Suite />
            </Route>
            <Route path="/create">
              <CreateNewTestCase />
            </Route>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
