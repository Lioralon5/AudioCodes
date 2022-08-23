import { useState } from "react";
import TestCases from "../components/TestCases/TestCases";
import TestCasesHeader from "../components/TestCases/TestCasesHeader"

import './AllTestCases.css'

function AllTestCases() {
  const [isAnyChecked, setIsAnyChecked] = useState(false);
  const isSomeoneChecked = e => {
    setIsAnyChecked(e);
  }

  return (
    <div className="allTestCases">
      <TestCasesHeader isAnyChecked={isAnyChecked} />
      <TestCases isSomeoneChecked={isSomeoneChecked} />
    </div>

  )
}

export default AllTestCases;