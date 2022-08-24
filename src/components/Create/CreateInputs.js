import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./CreateInputs.css";


function CreateInputs(props) {

  const requirementHandler = (e) => {
    props.setRequirement(e.target.value);
  };
  const assigneeHandler = (e) => {
    props.setAssignee(e.target.value);
  };
  const runHandler = (e) => {
    props.setRun(e.target.value);
  };
  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <div className="inputs">
      <div className="input__title">
        <TextField
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
          type="text"
          fullWidth
          label="Title"
          id="fullWidth"
          required
          placeholder="Enter Title"
        />
      </div>
      <div className="input__select">
        <div className="input__requirement">
          <FormControl required style={{ minWidth: 180 }}>
            <InputLabel>Requirement</InputLabel>
            <Select
              value={props.requirement}
              onChange={requirementHandler}
              label="Requirement"
            >
              <MenuItem value={"ST functional"}>ST functional</MenuItem>
              <MenuItem value={"MI functional"}>MI functional</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="input__assignee">
          <FormControl required style={{ minWidth: 180 }}>
            <InputLabel>Assignee</InputLabel>
            <Select value={props.assignee} onChange={assigneeHandler} label="Assignee">
              <MenuItem value={"Lior Alon"}>Lior Alon</MenuItem>
              <MenuItem value={"Goku"}>Goku</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="input__run">
          <FormControl required style={{ minWidth: 180 }}>
            <InputLabel>Run</InputLabel>
            <Select value={props.run} onChange={runHandler} label="Run">
              <MenuItem value={"No Run"}>No Run</MenuItem>
              <MenuItem value={"Passed"}>Passed</MenuItem>
              <MenuItem value={"Failed"}>Failed</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="input__status">
          <FormControl required style={{ minWidth: 180 }}>
            <InputLabel>Status</InputLabel>
            <Select value={props.status} onChange={statusHandler} label="Status">
              <MenuItem value={"Open"}>Open</MenuItem>
              <MenuItem value={"Done"}>Done</MenuItem>
              <MenuItem value={"WIP"}>WIP</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default CreateInputs;
