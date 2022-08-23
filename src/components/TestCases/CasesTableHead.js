import { Checkbox } from "@mui/material";
import { useContext, useState } from "react";
import { db } from "../../firebase";
import "./CasesTableHead.css";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import TestCasesContext from "../../store/testCases-context";

function CasesTableHead({ headClickHandler, isAllChecked, isSomeChecked, setTestCases }) {
  
  const ctx = useContext(TestCasesContext);
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
      <div onClick={ctx.onTitleClickHandler} className="casesTableHead__title">
        <b>Title</b>
        {(ctx.asc === 'asc') && <ArrowUpwardOutlinedIcon sx={{ color: "#863654" }} />}
        {(ctx.asc === 'desc') && <ArrowDownwardOutlinedIcon sx={{ color: "#863654" }} />}
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
