import { Checkbox } from "@mui/material";
import { forwardRef } from "react";
import "../../CSS/CaseItem.css";

const CaseItem = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="case">
      <div className="case__options">
        <Checkbox
          onClick={() => props.onChecked(props.id)}
          checked={props.isChecked}
          sx={{ "&.Mui-checked": { color: "#863654" } }}
        />
      </div>
      <div className="case__title">{props.title}</div>
      <div className="case__requirement">{props.requirement}</div>
      <div className="case__assignee">{props.assignee}</div>
      <div
        className={
          props.run === "Passed"
            ? "case__run-green"
            : props.run === "Failed"
            ? "case__run-red"
            : "case__run-no"
        }
      >
        {props.run}
      </div>
      <div className="case__status">{props.status}</div>
    </div>
  );
});

export default CaseItem;
