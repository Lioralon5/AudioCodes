import { useState } from "react";
import Header from "./Header";
import "../../CSS/SuiteCases.css";
import Table from './Table'

function SuiteCases() {
  const [suiteCases, setSuiteCases] = useState([]);
  const [isSomeSuiteChecked, setIsSomeSuiteChecked] = useState(false);
  const [isAllSuiteChecked, setIsAllSuiteChecked] = useState(false);

  return (
    <div className="suite">
      <Header
        isSuite={true}
        suiteCases={suiteCases}
        setSuiteCases={setSuiteCases}
        isSomeSuiteChecked={isSomeSuiteChecked}
        isAllSuiteChecked={isAllSuiteChecked}
      />
      <Table
        isSuite={true}
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

export default SuiteCases;
