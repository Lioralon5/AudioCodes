import { Checkbox } from "@mui/material";
import { useState } from "react";
import { db } from "../../firebase";
import "../../CSS/TableHead.css";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

function MyCasesTableHead(props) {
  const [asc, setAsc] = useState("asc");

  const onTableHeadOptionClicked = (toOrder) => {
    asc === "asc" ? setAsc("desc") : setAsc("asc");
      db.collection('myCases')
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
          checked={props.isAllChecked}
          indeterminate={props.isSomeChecked}
          sx={{ "&.Mui-checked": { color: "#863654" }, "&.MuiCheckbox-indeterminate": {color: "#863654"} } }
          
        />
      </div>
      <div onClick={() => onTableHeadOptionClicked('title')} className="table-head__title">
        <b>Title</b>
        {asc === "asc" && <ArrowUpwardOutlinedIcon sx={{ color: "#863654" }} />}
        {asc === "desc" && (
          <ArrowDownwardOutlinedIcon sx={{ color: "#863654" }} />
        )}
      </div>
      <div onClick={() => onTableHeadOptionClicked('requirement')} className="table-head__requirement">
        <b>Requirement</b>
      </div>
      <div onClick={() => onTableHeadOptionClicked('assignee')} className="table-head__assignee">
        <b>Assignee</b>
      </div>
      <div onClick={() => onTableHeadOptionClicked('run')} className="table-head__run">
        <b>Run</b>
      </div>
      <div onClick={() => onTableHeadOptionClicked('status')} className="table-head__status">
        <b>Status</b>
      </div>
    </div>
  );
}

export default MyCasesTableHead;
