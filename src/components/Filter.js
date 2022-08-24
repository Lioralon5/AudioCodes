import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function Filter({
  isSuite,
  testCases,
  setTestCases,
  suiteCases,
  setSuiteCases,
  origin,
  setOrigin,
  setIsFilterActive,
  setAreCasesFiltered,
}) {

  //Filter by requirement
  const filterByRequirement = (e) => {
    setAreCasesFiltered(true)
    setIsFilterActive(false);
    if (isSuite) {
      filterSuiteByRequirement();
    } else {
      setOrigin(testCases);
      setTestCases(
        testCases.filter(
          (testCase) => testCase.data.requirement === e.target.textContent
        )
      );
    }
  };
  const filterSuiteByRequirement = (e) => {
    setOrigin(suiteCases);
    setSuiteCases(
      suiteCases.filter(
        (suiteCase) => suiteCase.data.requirement === e.target.textContent
      )
    );
  };

  //Filter by Assignee
  const filterByAssignee = (e) => {
    setAreCasesFiltered(true)
    setIsFilterActive(false);
    if (isSuite) {
      filterSuiteByAssignee();
    } else {
      setOrigin(testCases);
      setTestCases(
        testCases.filter(
          (testCase) => testCase.data.assignee === e.target.textContent
        )
      );
    }
  };
  const filterSuiteByAssignee = (e) => {
    setOrigin(suiteCases);
    setSuiteCases(
      suiteCases.filter(
        (suiteCase) => suiteCase.data.assignee === e.target.textContent
      )
    );
  };
  //Filter by Run
  const filterByRun = (e) => {
    setAreCasesFiltered(true)
    setIsFilterActive(false);
    if (isSuite) {
      filterSuiteByRun();
    } else {
      setOrigin(testCases);
      setTestCases(
        testCases.filter(
          (testCase) => testCase.data.run === e.target.textContent
        )
      );
    }
  };
  const filterSuiteByRun = (e) => {
    setOrigin(suiteCases);
    setSuiteCases(
      suiteCases.filter(
        (suiteCase) => suiteCase.data.run === e.target.textContent
      )
    );
  };
  //Filter by Status
  const filterByStatus = (e) => {
    setAreCasesFiltered(true)
    setIsFilterActive(false);
    if (isSuite) {
      filterSuiteByStatus();
    } else {
      setOrigin(testCases);
      setTestCases(
        testCases.filter(
          (testCase) => testCase.data.status === e.target.textContent
        )
      );
    }
  };
  const filterSuiteByStatus = (e) => {
    setOrigin(suiteCases);
    setSuiteCases(
      suiteCases.filter(
        (suiteCase) => suiteCase.data.status === e.target.textContent
      )
    );
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
            <MenuItem value={0} onClick={filterByRequirement}>
              ST functional
            </MenuItem>
            <MenuItem value={1} onClick={filterByRequirement}>
              MI functional
            </MenuItem>
          </Select>
        </FormControl>
      )}
      {filter.assignee && (
        <FormControl style={{ minWidth: 180 }}>
          <InputLabel>Assignee</InputLabel>
          <Select defaultOpen label="Assignee">
            <MenuItem value={0} onClick={filterByAssignee}>
              Lior Alon
            </MenuItem>
            <MenuItem value={1} onClick={filterByAssignee}>
              Goku
            </MenuItem>
          </Select>
        </FormControl>
      )}
      {filter.run && (
        <FormControl style={{ minWidth: 180 }}>
          <InputLabel>Run</InputLabel>
          <Select defaultOpen label="Run">
            <MenuItem value={0} onClick={filterByRun}>
              No Run
            </MenuItem>
            <MenuItem value={1} onClick={filterByRun}>
              Passed
            </MenuItem>
            <MenuItem value={2} onClick={filterByRun}>
              Failed
            </MenuItem>
          </Select>
        </FormControl>
      )}
      {filter.status && (
        <FormControl style={{ minWidth: 180 }}>
          <InputLabel>Status</InputLabel>
          <Select defaultOpen label="Status">
            <MenuItem value={0} onClick={filterByStatus}>
              Done
            </MenuItem>
            <MenuItem value={1} onClick={filterByStatus}>
              Open
            </MenuItem>
            <MenuItem value={2} onClick={filterByStatus}>
              WIP
            </MenuItem>
          </Select>
        </FormControl>
      )}
    </div>
  );
}

export default Filter;
