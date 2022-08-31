import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { db } from "../../firebase";

function Filter(props) {
  const [filter, setFilter] = useState("");

  const filterCases = (e, filterOption) => {
    if (props.collection === "myCases") {
      db.collection('testCases')
        .where("assignee", "==", props.user.displayName)
        .where(filterOption, "==", e.target.textContent)
        .onSnapshot((snapshot) => {
          props.setAreCasesFiltered(true);
          props.setCases(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
              isChecked: false,
            }))
          );
        });
    } else {
      db.collection(props.collection)
        .where(filterOption, "==", e.target.textContent)
        .onSnapshot((snapshot) => {
          props.setAreCasesFiltered(true);
          props.setCases(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
              isChecked: false,
            }))
          );
        });
    }
  };

  return (
    <div>
      {filter === "" && (
        <FormControl style={{ minWidth: 180 }}>
          <InputLabel>Filter by</InputLabel>
          <Select label="Filter">
            <MenuItem
              value={"Requirement"}
              onClick={() => setFilter("requirement")}
            >
              Requirement
            </MenuItem>
            <MenuItem value={"Assignee"} onClick={() => setFilter("assignee")}>
              Assignee
            </MenuItem>
            <MenuItem value={"Run"} onClick={() => setFilter("run")}>
              Run
            </MenuItem>
            <MenuItem value={"Status"} onClick={() => setFilter("status")}>
              Status
            </MenuItem>
          </Select>
        </FormControl>
      )}
      {filter === "requirement" && (
        <FormControl style={{ minWidth: 180 }}>
          <InputLabel>Requirement</InputLabel>
          <Select defaultOpen label="Requirement">
            <MenuItem
              value={"ST functional"}
              onClick={(e) => filterCases(e, "requirement")}
            >
              ST functional
            </MenuItem>
            <MenuItem
              value={"MI functional"}
              onClick={(e) => filterCases(e, "requirement")}
            >
              MI functional
            </MenuItem>
          </Select>
        </FormControl>
      )}
      {filter === "assignee" && (
        <FormControl style={{ minWidth: 180 }}>
          <InputLabel>Assignee</InputLabel>
          <Select defaultOpen label="Assignee">
            <MenuItem
              value={"Lior Alon"}
              onClick={(e) => filterCases(e, "assignee")}
            >
              Lior Alon
            </MenuItem>
            <MenuItem
              value={"Rocky Blaboa"}
              onClick={(e) => filterCases(e, "assignee")}
            >
              Rocky Balboa
            </MenuItem>
            <MenuItem
              value={"Will Smith"}
              onClick={(e) => filterCases(e, "assignee")}
            >
              Will Smith
            </MenuItem>
            <MenuItem
              value={"Leonardo DiCaprio"}
              onClick={(e) => filterCases(e, "assignee")}
            >
              Leonardo DiCaprio
            </MenuItem>
            <MenuItem
              value={"Goku"}
              onClick={(e) => filterCases(e, "assignee")}
            >
              Goku
            </MenuItem>
          </Select>
        </FormControl>
      )}
      {filter === "run" && (
        <FormControl style={{ minWidth: 180 }}>
          <InputLabel>Run</InputLabel>
          <Select defaultOpen label="Run">
            <MenuItem value={"No Run"} onClick={(e) => filterCases(e, "run")}>
              No Run
            </MenuItem>
            <MenuItem value={"Passed"} onClick={(e) => filterCases(e, "run")}>
              Passed
            </MenuItem>
            <MenuItem value={"Failed"} onClick={(e) => filterCases(e, "run")}>
              Failed
            </MenuItem>
          </Select>
        </FormControl>
      )}
      {filter === "status" && (
        <FormControl style={{ minWidth: 180 }}>
          <InputLabel>Status</InputLabel>
          <Select defaultOpen label="Status">
            <MenuItem value={"Done"} onClick={(e) => filterCases(e, "status")}>
              Done
            </MenuItem>
            <MenuItem value={"Open"} onClick={(e) => filterCases(e, "status")}>
              Open
            </MenuItem>
            <MenuItem value={"WIP"} onClick={(e) => filterCases(e, "status")}>
              WIP
            </MenuItem>
          </Select>
        </FormControl>
      )}
    </div>
  );
}

export default Filter;
