import { Checkbox } from "@mui/material";
import "./CasesTableHead.css";

function CasesTableHead({
  isAllChecked,
  setIsAllChecked,
  isSomeChecked,
  setIsSomeChecked,
  checkAllItems,
  uncheckAllItems,
}) {
  function headClickHandler() {
    if(isAllChecked){
      setIsAllChecked(false);
      uncheckAllItems();
    }
    else{
      setIsAllChecked(true)
      checkAllItems();
    }
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
      <div className="casesTableHead__title">
        <b>Title</b>
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
