import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import "../../CSS/CreateInputs.css";
import { db } from "../../firebase";

function CreateInputs(props) {
  const [registered, setRegistered] = useState([]);
  useEffect(() => {
    db.collection("registeredUsers")
      .onSnapshot((snapshot) =>
        setRegistered(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        )
      );
  }, []);


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
              onChange={(e) => props.setRequirement(e.target.value)}
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
            <Select
              value={props.assignee}
              onChange={(e) => props.setAssignee(e.target.value)}
              label="Assignee"
            >
              {registered.map(({ id, data: { name } }) => (
                <MenuItem key={id} value={name}>{name}</MenuItem>
              ))}

              {/* <MenuItem value={"Lior Alon"}>Lior Alon</MenuItem>
              <MenuItem value={"Rocky Blaboa"}>Bocky Ralboa</MenuItem>
              <MenuItem value={"Will Smith"}>Sill Wmith</MenuItem>
              <MenuItem value={"Leonardo DiCaprio"}>Deonardo LiCaprio</MenuItem>
              <MenuItem value={"Goku"}>Goku</MenuItem> */}
            </Select>
          </FormControl>
          {/* {props.cases.map(
          ({
            id,
            data: { title, requirement, assignee, run, status },
            isChecked,
          }) => (
            <CaseItem
              id={id}
              key={id}
              title={title}
              requirement={requirement}
              assignee={assignee}
              run={run}
              status={status}
              isChecked={isChecked}
              onChecked={props.onChecked}
            />
          )
        )} */}
        </div>
        <div className="input__run">
          <FormControl required style={{ minWidth: 180 }}>
            <InputLabel>Run</InputLabel>
            <Select
              value={props.run}
              onChange={(e) => props.setRun(e.target.value)}
              label="Run"
            >
              <MenuItem value={"No Run"}>No Run</MenuItem>
              <MenuItem value={"Passed"}>Passed</MenuItem>
              <MenuItem value={"Failed"}>Failed</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="input__status">
          <FormControl required style={{ minWidth: 180 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={props.status}
              onChange={(e) => props.setStatus(e.target.value)}
              label="Status"
            >
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
