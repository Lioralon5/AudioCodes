import Sidebar from "./components/Sidebar/Sidebar";
import { Route } from "react-router-dom";
import AllTestCases from "./pages/AllTestCases";
import CreateNewTestCase from "./pages/CreateNewTestCase";
import Suite from "./pages/Suite";
import "./App.css";
import TestCasesContext from "./store/testCases-context";

function App() {
  return (
    <div className="app">
      <TestCasesContext.Provider>
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
      </TestCasesContext.Provider>
    </div>
  );
}

export default App;
