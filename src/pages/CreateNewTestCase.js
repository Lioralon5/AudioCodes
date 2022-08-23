import { useState } from "react";
import CreateHeader from "../components/Create/CreateHeader";
import CreateInputs from "../components/Create/CreateInputs";
import "./CreateNewTestCase.css";

function CreateNewTestCase() {
  const [title, setTitle] = useState("");
  const [requirement, setRequirement] = useState("");
  const [assignee, setAssignee] = useState("");
  const [run, setRun] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="create">
      <CreateHeader
        title={title}
        setTitle={setTitle}
        requirement={requirement}
        setRequirement={setRequirement}
        assignee={assignee}
        setAssignee={setAssignee}
        run={run}
        setRun={setRun}
        status={status}
        setStatus={setStatus}
      />
      <CreateInputs
        title={title}
        setTitle={setTitle}
        requirement={requirement}
        setRequirement={setRequirement}
        assignee={assignee}
        setAssignee={setAssignee}
        run={run}
        setRun={setRun}
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
}

export default CreateNewTestCase;
