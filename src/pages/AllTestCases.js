import { useState } from "react";
import TestCases from "../components/TestCases/TestCases";
import TestCasesHeader from "../components/TestCases/TestCasesHeader";

import "./AllTestCases.css";

function AllTestCases() {
  const [testCases, setTestCases] = useState([]);
  const [isSomeChecked, setIsSomeChecked] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);

  return (
    <div className="allTestCases">
      <TestCasesHeader
        testCases={testCases}
        setTestCases={setTestCases}
        isSomeChecked={isSomeChecked}
        isAllChecked={isAllChecked}
      />
      <TestCases
        testCases={testCases}
        setTestCases={setTestCases}
        isSomeChecked={isSomeChecked}
        setIsSomeChecked={setIsSomeChecked}
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
      />
    </div>
  );
}

export default AllTestCases;
