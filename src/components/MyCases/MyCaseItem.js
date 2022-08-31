import { Checkbox } from "@mui/material";
import { forwardRef } from "react";
import "../../CSS/CaseItem.css";

const MyCaseItem = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="case-item">
      <div className="case-item__options">
        <Checkbox
          onClick={() => props.onChecked(props.id)}
          checked={props.isChecked}
          sx={{ "&.Mui-checked": { color: "#863654" } }}
        />
      </div>
      <div className="case-item__title">{props.title}</div>
      <div className="case-item__requirement">{props.requirement}</div>
      <div className="case-item__assignee">{props.assignee}</div>
      <div
        className={
          props.run === "Passed"
            ? "case-item__run-green"
            : props.run === "Failed"
            ? "case-item__run-red"
            : "case-item__run-no"
        }
      >
        {props.run}
      </div>
      <div className="case-item__status">{props.status}</div>
    </div>
  );
});

export default MyCaseItem;
