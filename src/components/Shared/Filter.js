import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { db } from "../../firebase";

function Filter(props) {
  const filterCases = (e, filter) => {
    const cases = props.isSuite ? "suiteCases" : "testCases";

    db.collection(cases)
      .where(filter, "==", e.target.textContent)
      .onSnapshot((snapshot) => {
        if (props.isSuite) {
          console.log('hey')
          props.setAreCasesFiltered(true);
          props.setIsFilterActive(false);
          props.setCases(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        } else {
          console.log('hey')
          props.setAreCasesFiltered(true);
          props.setIsFilterActive(false);
          props.setCases(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        }
      });
  };

  const [filter, setFilter] = useState({
    requirement: false,
    assignee: false,
    run: false,
    status: false,
  });

  function onRequirementClick() {
    setFilter({
      requirement: true,
      assignee: false,
      run: false,
      status: false,
    });
  }
  function onAssigneeClick() {
    setFilter({
      requirement: false,
      assignee: true,
      run: false,
      status: false,
    });
  }
  function onRunClick() {
    setFilter({
      requirement: false,
      assignee: false,
      run: true,
      status: false,
    });
  }
  function onStatusClick() {
    setFilter({
      requirement: false,
      assignee: false,
      run: false,
      status: true,
    });
  }

  return (
    <div>
      {!filter.requirement &&
        !filter.assignee &&
        !filter.run &&
        !filter.status && (
          <FormControl style={{ minWidth: 180 }}>
            <InputLabel>Filter by</InputLabel>
            <Select label="Filter">
              <MenuItem onClick={onRequirementClick}>Requirement</MenuItem>
              <MenuItem onClick={onAssigneeClick}>Assignee</MenuItem>
              <MenuItem onClick={onRunClick}>Run</MenuItem>
              <MenuItem onClick={onStatusClick}>Status</MenuItem>
            </Select>
          </FormControl>
        )}
      {filter.requirement && (
        <FormControl style={{ minWidth: 180 }}>
          <InputLabel>Requirement</InputLabel>
          <Select defaultOpen label="Requirement">
            <MenuItem value={0} onClick={(e) => filterCases(e, "requirement")}>
              ST functional
            </MenuItem>
            <MenuItem value={1} onClick={(e) => filterCases(e, "requirement")}>
              MI functional
            </MenuItem>
          </Select>
        </FormControl>
      )}
      {filter.assignee && (
        <FormControl style={{ minWidth: 180 }}>
          <InputLabel>Assignee</InputLabel>
          <Select defaultOpen label="Assignee">
            <MenuItem value={0} onClick={(e) => filterCases(e, "assignee")}>
              Lior Alon
            </MenuItem>
            <MenuItem value={1} onClick={(e) => filterCases(e, "assignee")}>
              Goku
            </MenuItem>
          </Select>
        </FormControl>
      )}
      {filter.run && (
        <FormControl style={{ minWidth: 180 }}>
          <InputLabel>Run</InputLabel>
          <Select defaultOpen label="Run">
            <MenuItem value={0} onClick={(e) => filterCases(e, "run")}>
              No Run
            </MenuItem>
            <MenuItem value={1} onClick={(e) => filterCases(e, "run")}>
              Passed
            </MenuItem>
            <MenuItem value={2} onClick={(e) => filterCases(e, "run")}>
              Failed
            </MenuItem>
          </Select>
        </FormControl>
      )}
      {filter.status && (
        <FormControl style={{ minWidth: 180 }}>
          <InputLabel>Status</InputLabel>
          <Select defaultOpen label="Status">
            <MenuItem value={0} onClick={(e) => filterCases(e, "status")}>
              Done
            </MenuItem>
            <MenuItem value={1} onClick={(e) => filterCases(e, "status")}>
              Open
            </MenuItem>
            <MenuItem value={2} onClick={(e) => filterCases(e, "status")}>
              WIP
            </MenuItem>
          </Select>
        </FormControl>
      )}
    </div>
  );
}

export default Filter;
