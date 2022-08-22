import { TextField } from "@mui/material";
import "./CreateInputs.css";

function CreateInputs({input, setInput}) {
  return (
    <div className="inputs">
      <div className="input__name">
        <TextField value={input} onChange={(e) => setInput(e.target.value)} type='text' fullWidth label="Name" id="fullWidth" required />
      </div>
      <div className="input__description">
        <TextField fullWidth label="Description" id="fullWidth" />
      </div>
    </div>
  );
}

export default CreateInputs;
