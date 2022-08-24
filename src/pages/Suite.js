import { useState } from "react";
import SuiteCases from "../components/Suite/SuiteCases";
import SuiteHeader from "../components/Suite/SuiteHeader";
import "./Suite.css";

function Suite() {
  const [suiteCases, setSuiteCases] = useState([]);
  const [isSomeSuiteChecked, setIsSomeSuiteChecked] = useState(false);
  const [isAllSuiteChecked, setIsAllSuiteChecked] = useState(false);

  return (
    <div className="suite">
      <SuiteHeader
        suiteCases={suiteCases}
        setSuiteCases={setSuiteCases}
        isSomeSuiteChecked={isSomeSuiteChecked}
        isAllSuiteChecked={isAllSuiteChecked}
      />
      <SuiteCases
        suiteCases={suiteCases}
        setSuiteCases={setSuiteCases}
        isSomeSuiteChecked={isSomeSuiteChecked}
        setIsSomeSuiteChecked={setIsSomeSuiteChecked}
        isAllSuiteChecked={isAllSuiteChecked}
        setIsAllSuiteChecked={setIsAllSuiteChecked}
      />
    </div>
  );
}

export default Suite;
