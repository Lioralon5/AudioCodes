import { useState } from "react";
import SuiteCases from "../components/Suite/SuiteCases"
import SuiteHeader from "../components/Suite/SuiteHeader"
import './Suite.css'

function Suite() {

  const [suiteCases, setSuiteCases] = useState([]);

  return (
    <div className="suite">
      <SuiteHeader suiteCases={suiteCases} />
      <SuiteCases suiteCases={suiteCases} setSuiteCases={setSuiteCases} />
    </div>
  )
}

export default Suite;