import TestCases from "../components/TestCases/TestCases";
import TestCasesHeader from "../components/TestCases/TestCasesHeader"

import './AllTestCases.css'

function AllTestCases() {
  return (
    <div className="allTestCases">
      <TestCasesHeader />
      <TestCases />
    </div>

  )
}

export default AllTestCases;