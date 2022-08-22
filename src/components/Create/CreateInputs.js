import { TextField } from "@mui/material";
import "./CreateInputs.css";

function CreateInputs() {
  return (
    <div className="inputs">
      <div className="input__name">
        <TextField fullWidth label="Name" id="fullWidth" required />
      </div>
      <div className="input__description">
        <TextField fullWidth label="Description" id="fullWidth" />
      </div>
    </div>
  );
}

export default CreateInputs;
