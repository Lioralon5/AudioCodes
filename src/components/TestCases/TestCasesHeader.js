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

function TestCasesHeader({ testCases }) {
  const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false);

  const addSelectedToSuite = (e) => {
    testCases.filter((testCase) => testCase.isChecked).map((testCase) => {
      db.collection("suiteCases").add({
        title: testCase.data.title,
        requirement: testCase.data.requirement,
        assignee: testCase.data.assignee,
        run: testCase.data.run,
        status: testCase.data.status,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      return testCase;
    });
  };

  

  function deleteHandler() {
    setRemoveModalIsOpen(false);
    removeSelectedTestCases();
  }

  function removeHandler() {
    setRemoveModalIsOpen(true);
  }

  function closeRemoveModalHandler() {
    setRemoveModalIsOpen(false);
  }

  const removeSelectedTestCases = () => {
    testCases.filter((testCase) => testCase.isChecked).map(testCase => {
        const docRef = db.collection("testCases").where('timestamp', '==', testCase.data.timestamp);
        docRef.get().then(function(querySnapshot){
          querySnapshot.forEach(function(doc){
            doc.ref.delete()
          })
        })
      
      return testCase;
    })
  };
  // const createTestCase = (e) => {
  //   e.preventDefault();

  //   db.collection("testCases").add({
  //     title: input,
  //     requirement: "Who cares",
  //     assignee: "Lior Alon",
  //     run: "No Run",
  //     status: "Passed",
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //   });
  //   setInput("");
  // };

  // const removeTestCase = (e) => {
  //   const docRef = db.collection("testCases").where('title', '==', '');
  //   docRef.get().then(function(querySnapshot){
  //     querySnapshot.forEach(function(doc){
  //       doc.ref.delete()
  //     })
  //   })
  // };

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
        { (
          <Tooltip title="New" placement="bottom">
            <Link to="/create">
              <IconButton>
                <AddOutlinedIcon sx={{ color: "#863654" }} />
              </IconButton>
            </Link>
          </Tooltip>
        )}
        {
          <Tooltip title="Add to Suite" placement="bottom">
            <IconButton onClick={addSelectedToSuite}>
              <AddOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        }
        {
          <Tooltip title="Remove" placement="bottom">
            <IconButton onClick={removeHandler}>
              <ClearOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        }
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
