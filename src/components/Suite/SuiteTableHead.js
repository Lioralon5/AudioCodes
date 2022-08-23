import { Checkbox } from "@mui/material";
import "./SuiteTableHead.css";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { db } from "../../firebase";
import { useState } from "react";

function SuiteTableHead({
  headClickHandler,
  isAllChecked,
  isSomeChecked,
  setSuiteCases,
}) {
  const [asc, setAsc] = useState("asc");

  function onTitleClickHandler() {
    asc === "asc" ? setAsc("desc") : setAsc("asc");
    db.collection("suiteCases")
      .orderBy("title", asc)
      .onSnapshot((snapshot) =>
        setSuiteCases(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }
  return (
    <div className="suiteTableHead">
      <div className="suiteTableHead__options">
        <Checkbox
          onClick={headClickHandler}
          checked={isAllChecked}
          indeterminate={isSomeChecked}
          sx={{ "&.Mui-checked": { color: "#863654" } }}
        />
      </div>
      <div onClick={onTitleClickHandler} className="suiteTableHead__title">
        <b>Title</b>
        {asc === "asc" && <ArrowUpwardOutlinedIcon sx={{ color: "#863654" }} />}
        {asc === "desc" && (
          <ArrowDownwardOutlinedIcon sx={{ color: "#863654" }} />
        )}
      </div>
      <div className="suiteTableHead__requirement">
        <b>Requirement</b>
      </div>
      <div className="suiteTableHead__assignee">
        <b>Assignee</b>
      </div>
      <div className="suiteTableHead__run">
        <b>Run</b>
      </div>
      <div className="suiteTableHead__status">
        <b>Status</b>
      </div>
    </div>
  );
}

export default SuiteTableHead;
