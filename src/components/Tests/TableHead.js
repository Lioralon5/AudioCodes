import { Checkbox } from "@mui/material";
import { useState } from "react";
import { db } from "../../firebase";
import "../../CSS/TableHead.css";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

function TableHead(props) {
  const [asc, setAsc] = useState("asc");

  function onTitleClickHandler() {
    asc === "asc" ? setAsc("desc") : setAsc("asc");
    if (props.isSuite) {
      db.collection("suiteCases")
        .orderBy("title", asc)
        .onSnapshot((snapshot) =>
          props.setSuiteCases(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      db.collection("testCases")
        .orderBy("title", asc)
        .onSnapshot((snapshot) =>
          props.setTestCases(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }

  return (
    <div className="casesTableHead">
      <div className="casesTableHead__options">
        <Checkbox
          onClick={props.headClickHandler}
          checked={props.isSuite ? props.isAllSuiteChecked : props.isAllChecked}
          indeterminate={props.isSuite ? props.isSomeSuiteChecked : props.isSomeChecked}
          sx={{ "&.Mui-checked": { color: "#863654" }, "&.Mui-indeterminate": {color: "#863654"} } }
          
        />
      </div>
      <div onClick={onTitleClickHandler} className="casesTableHead__title">
        <b>Title</b>
        {asc === "asc" && <ArrowUpwardOutlinedIcon sx={{ color: "#863654" }} />}
        {asc === "desc" && (
          <ArrowDownwardOutlinedIcon sx={{ color: "#863654" }} />
        )}
      </div>
      <div className="casesTableHead__requirement">
        <b>Requirement</b>
      </div>
      <div className="casesTableHead__assignee">
        <b>Assignee</b>
      </div>
      <div className="casesTableHead__run">
        <b>Run</b>
      </div>
      <div className="casesTableHead__status">
        <b>Status</b>
      </div>
    </div>
  );
}

export default TableHead;
