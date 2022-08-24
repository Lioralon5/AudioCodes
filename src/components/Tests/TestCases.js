import { useState } from "react";
import Header from "./Header";
import "../../CSS/TestCases.css";
import Table from "./Table";

function TestCases() {
  const [testCases, setTestCases] = useState([]);
  const [isSomeChecked, setIsSomeChecked] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);

  return (
    <div className="allTestCases">
      <Header
        isSuite={false}
        testCases={testCases}
        setTestCases={setTestCases}
        isSomeChecked={isSomeChecked}
        isAllChecked={isAllChecked}
      />
      <Table
        isSuite={false}
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

export default TestCases;
