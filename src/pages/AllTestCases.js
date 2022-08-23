import { useState } from "react";
import TestCases from "../components/TestCases/TestCases";
import TestCasesHeader from "../components/TestCases/TestCasesHeader"

import './AllTestCases.css'

function AllTestCases() {
  const [testCases, setTestCases] = useState([]);
  const [isSomeChecked, setIsSomeChecked] = useState(false);

  return (
    <div className="allTestCases">
      <TestCasesHeader testCases={testCases} setTestCases={setTestCases} isSomeChecked={isSomeChecked} />
      <TestCases testCases={testCases} setTestCases={setTestCases} isSomeChecked={isSomeChecked} setIsSomeChecked={setIsSomeChecked} />
    </div>

  )
}

export default AllTestCases;