import SuiteCases from "../components/Suite/SuiteCases"
import SuiteHeader from "../components/Suite/SuiteHeader"
import './Suite.css'

function Suite() {
  return (
    <div className="suite">
      <SuiteHeader />
      <SuiteCases />
    </div>
  )
}

export default Suite;