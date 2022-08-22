import { IconButton, Tooltip } from "@mui/material";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import "./SuiteHeader.css";
import Filter from "../Filter";
import { useState } from "react";
import { db } from "../../firebase";
import RemoveModal from "../RemoveModal";
import BackDrop from "../BackDrop";

function SuiteHeader() {
  const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false);
  function deleteHandler() {
    setRemoveModalIsOpen(false);
    removeTestCase();
  }

  function removeHandler() {
    setRemoveModalIsOpen(true);
  }

  function closeRemoveModalHandler() {
    setRemoveModalIsOpen(false);
  }

  const removeTestCase = (e) => {
    const docRef = db.collection("suiteCases").where("title", "==", "input");
    docRef.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
    });
  };
  return (
    <div className="suite-header">
      <div className="suite-header__left">
        <h3>Test Cases</h3>
      </div>

      <div className="suite-header__right">
        <Filter />
        <Tooltip title="Filter" placement="bottom">
          <IconButton>
            <FilterListOutlinedIcon sx={{ color: "#863654" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove" placement="bottom">
          <IconButton onClick={removeHandler}>
            <ClearOutlinedIcon sx={{ color: "#863654" }} />
          </IconButton>
        </Tooltip>
      </div>
      {removeModalIsOpen && (
        <RemoveModal
          onCancel={closeRemoveModalHandler}
          onDelete={deleteHandler}
        />
      )}
      {removeModalIsOpen && <BackDrop onClick={closeRemoveModalHandler} />}
    </div>
  );
}

export default SuiteHeader;
