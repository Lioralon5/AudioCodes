import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function Filter() {
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
      {!filter.requirement && !filter.assignee && !filter.run && !filter.status && (
        <FormControl fullWidth>
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
        <FormControl fullWidth>
          <InputLabel>Requirement</InputLabel>
          <Select defaultOpen label="Requirement">
            <MenuItem>starts with</MenuItem>
            <MenuItem>equals to</MenuItem>
          </Select>
        </FormControl>
      )}
      {filter.assignee && (
        <FormControl fullWidth>
          <InputLabel>Assignee</InputLabel>
          <Select defaultOpen label="Requirement">
            <MenuItem>Lior Alon</MenuItem>
            <MenuItem>Goku</MenuItem>
          </Select>
        </FormControl>
      )}
      {filter.run && (
        <FormControl fullWidth>
          <InputLabel>Run</InputLabel>
          <Select defaultOpen label="Requirement">
            <MenuItem>No Run</MenuItem>
            <MenuItem>Passed</MenuItem>
            <MenuItem>Failed</MenuItem>
          </Select>
        </FormControl>
      )}
      {filter.status && (
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select defaultOpen label="Requirement">
            <MenuItem>Done</MenuItem>
            <MenuItem>Open</MenuItem>
            <MenuItem>WIP</MenuItem>
          </Select>
        </FormControl>
      )}
    </div>
  );
}

export default Filter;
