import "./TestCasesHeader.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import FilterListOffOutlinedIcon from "@mui/icons-material/FilterListOffOutlined";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import RemoveModal from "../RemoveModal";
import BackDrop from "../BackDrop";
import Filter from "../Filter";
import { db } from "../../firebase";
import firebase from "firebase";

function TestCasesHeader({ testCases, setTestCases, isSomeChecked }) {
  const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [origin, setOrigin] = useState([]);

  const addSelectedToSuite = (e) => {
    testCases
      .filter((testCase) => testCase.isChecked)
      .map((testCase) => {
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

  const cancelFilterHandler = () => {
    setIsFilterActive(!isFilterActive);
    if (origin.length !== 0) setTestCases(origin);
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
    testCases
      .filter((testCase) => testCase.isChecked)
      .map((testCase) => {
        const docRef = db
          .collection("testCases")
          .where("timestamp", "==", testCase.data.timestamp);
        docRef.get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            doc.ref.delete();
          });
          const suiteDocRef = db
            .collection("suiteCases")
            .where("title", "==", testCase.data.title);
          suiteDocRef.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              doc.ref.delete();
            });
          });
        });
        return testCase;
      });
  };

  return (
    <div className="test-cases-header">
      <div className="test-cases-header__left">
        <h3>Test Cases</h3>
      </div>

      <div className="test-cases-header__right">
        {isFilterActive && (
          <Tooltip title="Cancel" placement="bottom">
            <IconButton onClick={cancelFilterHandler}>
              <FilterListOffOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        )}
        {isFilterActive && (
          <Filter
            isSuite={false}
            testCases={testCases}
            setTestCases={setTestCases}
            origin={origin}
            setOrigin={setOrigin}
            setIsFilterActive={setIsFilterActive}
          />
        )}
        {!isFilterActive && (
          <Tooltip title="Filter" placement="bottom">
            <IconButton onClick={() => setIsFilterActive(!isFilterActive)}>
              <FilterListOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        )}
        {!isSomeChecked && (
          <Tooltip title="New" placement="bottom">
            <Link to="/create">
              <IconButton>
                <AddOutlinedIcon sx={{ color: "#863654" }} />
              </IconButton>
            </Link>
          </Tooltip>
        )}
        {isSomeChecked && (
          <Tooltip title="Add to Suite" placement="bottom">
            <IconButton onClick={addSelectedToSuite}>
              <AddOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        )}
        {isSomeChecked && (
          <Tooltip title="Remove" placement="bottom">
            <IconButton onClick={removeHandler}>
              <ClearOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        )}
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
