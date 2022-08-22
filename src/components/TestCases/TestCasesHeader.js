import "./TestCasesHeader.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import RemoveModal from "../RemoveModal";
import BackDrop from "../BackDrop";

function TestCasesHeader() {
  const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false);

  function deleteHandler() {
    setRemoveModalIsOpen(false);

  }

  function removeHandler() {
    setRemoveModalIsOpen(true);
  }

  function closeRemoveModalHandler() {
    setRemoveModalIsOpen(false)
  }

  return (
    <div className="test-cases-header">
      <div className="test-cases-header__left">
        <h3>Test Cases</h3>
      </div>

      <div className="test-cases-header__right">
        <Tooltip title="Filter" placement="bottom">
          <IconButton>
            <FilterListOutlinedIcon sx={{ color: "#863654" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="New" placement="bottom">
          <Link to="/create">
            <IconButton>
              <AddOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Add to Suite" placement="bottom">
          <IconButton>
            <AddOutlinedIcon sx={{ color: "#863654" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove" placement="bottom">
          <IconButton onClick={removeHandler}>
            <ClearOutlinedIcon sx={{ color: "#863654" }} />
          </IconButton>
        </Tooltip>
      </div>
      {removeModalIsOpen && <RemoveModal onCancel={closeRemoveModalHandler} onDelete={deleteHandler} />}
      {removeModalIsOpen && <BackDrop onClick={closeRemoveModalHandler} />}
      
    </div>
  );
}

export default TestCasesHeader;
