import { useState } from "react";
import CreateHeader from "../components/Create/CreateHeader"
import CreateInputs from "../components/Create/CreateInputs"
import './CreateNewTestCase.css'

function CreateNewTestCase() {

  const [input, setInput] = useState("");

  return (
    <div className="create">
      <CreateHeader input={input} setInput={setInput} />
      <CreateInputs input={input} setInput={setInput} />
    </div>
  )
}

export default CreateNewTestCase