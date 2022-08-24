import { Checkbox } from "@mui/material";
import { forwardRef } from "react";
import "./TestCaseItem.css";

const TestCaseItem = forwardRef(
  (
    { id, title, requirement, assignee, run, status, isChecked, onChecked },
    ref
  ) => {
    return (
      <div ref={ref} className="test-case-item">
        <div className="test-case-item__options">
          <Checkbox
            onClick={() => onChecked(id)}
            checked={isChecked}
            sx={{ "&.Mui-checked": { color: "#863654" } }}
          />
        </div>
        <div className="test-case-item__title">{title}</div>
        <div className="test-case-item__requirement">{requirement}</div>
        <div className="test-case-item__assignee">{assignee}</div>
        <div
          className={
            run === "Passed"
              ? "test-case-item__run-green"
              : run === "Failed"
              ? "test-case-item__run-red"
              : "test-case-item__run-no"
          }
        >
          {run}
        </div>
        <div className="test-case-item__status">{status}</div>
      </div>
    );
  }
);

export default TestCaseItem;
