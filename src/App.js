import Sidebar from "./components/Sidebar/Sidebar";
import { Route } from "react-router-dom";
import AllTestCases from "./pages/AllTestCases";
import CreateNewTestCase from "./pages/CreateNewTestCase";
import Suite from "./pages/Suite";
import "./App.css";

function App() {
  return (
    <div className="app">
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
  );
}

export default App;
