import { useState } from "react";
import TestCases from "../components/TestCases/TestCases";
import TestCasesHeader from "../components/TestCases/TestCasesHeader"

import './AllTestCases.css'

function AllTestCases() {
  const [testCases, setTestCases] = useState([]);

  return (
    <div className="allTestCases">
      <TestCasesHeader testCases={testCases} />
      <TestCases testCases={testCases} setTestCases={setTestCases} />
    </div>

  )
}

export default AllTestCases;