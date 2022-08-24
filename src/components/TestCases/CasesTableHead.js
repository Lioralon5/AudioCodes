import { Checkbox } from "@mui/material";
import { useState } from "react";
import { db } from "../../firebase";
import "./CasesTableHead.css";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

function CasesTableHead({
  headClickHandler,
  isAllChecked,
  isSomeChecked,
  setTestCases,
}) {
  const [asc, setAsc] = useState("asc");

  function onTitleClickHandler() {
    asc === "asc" ? setAsc("desc") : setAsc("asc");
    db.collection("testCases")
      .orderBy("title", asc).limit(3)
      .onSnapshot((snapshot) =>
        setTestCases(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }

  return (
    <div className="casesTableHead">
      <div className="casesTableHead__options">
        <Checkbox
          onClick={headClickHandler}
          checked={isAllChecked}
          indeterminate={isSomeChecked}
          sx={{ "&.Mui-checked": { color: "#863654" } }}
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

export default CasesTableHead;
