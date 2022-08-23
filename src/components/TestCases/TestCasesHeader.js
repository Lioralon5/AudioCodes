import "./TestCasesHeader.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import RemoveModal from "../RemoveModal";
import BackDrop from "../BackDrop";
import Filter from "../Filter";
import { db } from "../../firebase";
import firebase from "firebase";

function TestCasesHeader({isAnyChecked}) {
  const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false);


  const addToSuite = (e) => {
    e.preventDefault();

    db.collection("suiteCases").add({
      title: 'input',
      requirement: "Who cares",
      assignee: "Lior Alon",
      run: "No Run",
      status: "Passed",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

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
    const docRef = db.collection("testCases").where('title', '==', '');
    docRef.get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        doc.ref.delete()
      })
    })
  };

  return (
    <div className="test-cases-header">
      <div className="test-cases-header__left">
        <h3>Test Cases</h3>
      </div>

      <div className="test-cases-header__right">
        <Filter />
        <Tooltip title="Filter" placement="bottom">
          <IconButton>
            <FilterListOutlinedIcon sx={{ color: "#863654" }} />
          </IconButton>
        </Tooltip>
        {!isAnyChecked && <Tooltip title="New" placement="bottom">
          <Link to="/create">
            <IconButton>
              <AddOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Link>
        </Tooltip>}
        {isAnyChecked && <Tooltip title="Add to Suite" placement="bottom">
          <IconButton onClick={addToSuite}>
            <AddOutlinedIcon sx={{ color: "#863654" }} />
          </IconButton>
        </Tooltip>}
        {isAnyChecked && <Tooltip title="Remove" placement="bottom">
          <IconButton onClick={removeHandler}>
            <ClearOutlinedIcon sx={{ color: "#863654" }} />
          </IconButton>
        </Tooltip>}
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

export default TestCasesHeader;
