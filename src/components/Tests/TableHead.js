import { Checkbox } from "@mui/material";
import { useState } from "react";
import { db } from "../../firebase";
import "../../CSS/TableHead.css";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

function TableHead(props) {
  const [asc, setAsc] = useState("asc");

  const onTableHeadOptionClicked = (toOrder) => {
    const cases = props.isSuite ? "suiteCases" : "testCases";
    asc === "asc" ? setAsc("desc") : setAsc("asc");
      db.collection(cases)
        .orderBy(toOrder, asc)
        .onSnapshot((snapshot) =>
          props.setCases(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
              isChecked:false,
            }))
          )
        );
  }

  return (
    <div className="table-head">
      <div className="table-head__options">
        <Checkbox
          onClick={props.headClickHandler}
          checked={props.isSuite ? props.isAllSuiteChecked : props.isAllChecked}
          indeterminate={props.isSuite ? props.isSomeSuiteChecked : props.isSomeChecked}
          sx={{ "&.Mui-checked": { color: "#863654" }, "&.MuiCheckbox-indeterminate": {color: "#863654"} } }
          
        />
      </div>
      <div className="table-head__title">
        <b onClick={() => onTableHeadOptionClicked('title')}>Title</b>
        {asc === "asc" && <ArrowUpwardOutlinedIcon sx={{ color: "#863654" }} />}
        {asc === "desc" && (
          <ArrowDownwardOutlinedIcon sx={{ color: "#863654" }} />
        )}
      </div>
      <div className="table-head__requirement">
        <b onClick={() => onTableHeadOptionClicked('requirement')}>Requirement</b>
      </div>
      <div className="table-head__assignee">
        <b onClick={() => onTableHeadOptionClicked('assignee')}>Assignee</b>
      </div>
      <div className="table-head__run">
        <b onClick={() => onTableHeadOptionClicked('run')}>Run</b>
      </div>
      <div className="table-head__status">
        <b onClick={() => onTableHeadOptionClicked('status')}>Status</b>
      </div>
    </div>
  );
}

export default TableHead;
