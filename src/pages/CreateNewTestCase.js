import CreateHeader from "../components/Create/CreateHeader"
import CreateInputs from "../components/Create/CreateInputs"
import './CreateNewTestCase.css'

function CreateNewTestCase() {
  return (
    <div className="create">
      <CreateHeader />
      <CreateInputs />
    </div>
  )
}

export default CreateNewTestCase