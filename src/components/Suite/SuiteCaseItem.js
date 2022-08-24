import { Checkbox } from "@mui/material";
import "./SuiteCaseItem.css";
import { forwardRef } from "react";

const SuiteCaseItem = forwardRef(({
  id,
  title,
  requirement,
  assignee,
  run,
  status,
  isChecked,
  onChecked,
}, ref) => {
  return (
    <div ref={ref} className="suite-case-item">
      <div className="suite-case-item__options">
        <Checkbox
          onClick={() => onChecked(id)}
          checked={isChecked}
          sx={{ "&.Mui-checked": { color: "#863654" } }}
        />
      </div>
      <div className="suite-case-item__title">{title}</div>
      <div className="suite-case-item__requirement">{requirement}</div>
      <div className="suite-case-item__assignee">{assignee}</div>
      <div
        className={
          run === "Passed"
            ? "suite-case-item__run-green"
            : run === "Failed"
            ? "suite-case-item__run-red"
            : "suite-case-item__run-no"
        }
      >
        {run}
      </div>
      <div className="suite-case-item__status">{status}</div>
    </div>
  );
});

export default SuiteCaseItem;
