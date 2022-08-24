import "../../CSS/Header.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import FilterListOffOutlinedIcon from "@mui/icons-material/FilterListOffOutlined";
import { IconButton, TextField, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RemoveModal from "../Shared/RemoveModal";
import BackDrop from "../Shared/BackDrop";
import Filter from "../Shared/Filter";
import { db } from "../../firebase";
import firebase from "firebase";

function Header(props) {
  const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [areCasesFiltered, setAreCasesFiltered] = useState(false);
  const [isSuiteFilterActive, setIsSuiteFilterActive] = useState(false);
  const [areSuiteCasesFiltered, setAreSuiteCasesFiltered] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const addSelectedToSuite = (e) => {
    props.testCases
      .filter((testCase) => testCase.isChecked)
      .map((testCase) => {
        db.collection('suiteCases')
          .where("id", "==", testCase.id)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size !== 0) {
              return testCase;
            } else {
              db.collection("suiteCases").add({
                id: testCase.id,
                title: testCase.data.title,
                requirement: testCase.data.requirement,
                assignee: testCase.data.assignee,
                run: testCase.data.run,
                status: testCase.data.status,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              });
              
            }
          });
      });
  };

  const cancelFilterHandler = () => {
    if (props.isSuite) {
      setIsSuiteFilterActive(false);
      setAreSuiteCasesFiltered(false);
    } else {
      setIsFilterActive(false);
      setAreCasesFiltered(false);
    }

    noFilter();
  };

  const noFilter = () => {
    if (props.isSuite) {
      db.collection("suiteCases").onSnapshot((snapshot) => {
        props.setSuiteCases(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      db.collection("testCases").onSnapshot((snapshot) => {
        props.setTestCases(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    }
  };

  function deleteHandler() {
    setRemoveModalIsOpen(false);
    removeSelectedTestCases();
  }

  const removeSelectedTestCases = () => {
    if (props.isSuite) {
      props.suiteCases
        .filter((suiteCase) => suiteCase.isChecked)
        .map((suiteCase) => {
          const docRef = db
            .collection("suiteCases")
            .where("timestamp", "==", suiteCase.data.timestamp);
          docRef.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              doc.ref.delete();
            });
          });
          return suiteCase;
        });
    } else {
      props.testCases
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
              .where("id", "==", testCase.id);
            suiteDocRef.get().then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                doc.ref.delete();
              });
            });
          });
          return testCase;
        });
    }
  };
  useEffect(() => {
    if (searchTerm === "") {
      noFilter();
    } else {
      const end =
        searchTerm.slice(0, searchTerm.length - 1) +
        String.fromCharCode(
          searchTerm
            .slice(searchTerm.length - 1, searchTerm.length)
            .charCodeAt(0) + 1
        );
      if (props.isSuite) {
        db.collection("suiteCases")
          .where("title", ">=", searchTerm)
          .where("title", "<", end)
          .onSnapshot((snapshot) => {
            props.setSuiteCases(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          });
      } else {
        db.collection("testCases")
          .where("title", ">=", searchTerm)
          .where("title", "<", end)
          .onSnapshot((snapshot) => {
            props.setTestCases(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          });
      }
    }
  }, [searchTerm]);

  return (
    <div className="test-cases-header">
      <div className="test-cases-header__left">
        <h3>{props.isSuite ? "Suite" : "Test Cases"}</h3>
        <form>
          <TextField
            id="search-bar"
            className="text"
            onInput={(e) => {
              setSearchTerm(e.target.value);
            }}
            label="Search..."
            variant="outlined"
            placeholder="Search..."
            size="small"
          />
        </form>
      </div>

      <div className="test-cases-header__right">
        {((props.isSuite && (isSuiteFilterActive || areSuiteCasesFiltered)) ||
          (!props.isSuite && (isFilterActive || areCasesFiltered))) && (
          <Tooltip title="Cancel" placement="bottom">
            <IconButton onClick={cancelFilterHandler}>
              <FilterListOffOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        )}
        {((props.isSuite && isSuiteFilterActive) ||
          (!props.isSuite && isFilterActive)) && (
          <Filter
            isSuite={props.isSuite}
            setCases={props.isSuite ? props.setSuiteCases : props.setTestCases}
            setIsFilterActive={
              props.isSuite ? setIsSuiteFilterActive : setIsFilterActive
            }
            setAreCasesFiltered={
              props.isSuite ? setAreSuiteCasesFiltered : setAreCasesFiltered
            }
          />
        )}
        {((props.isSuite && !isSuiteFilterActive && !areSuiteCasesFiltered) ||
          (!props.isSuite && !isFilterActive && !areCasesFiltered)) && (
          <Tooltip title="Filter" placement="bottom">
            <IconButton
              onClick={() => {
                props.isSuite
                  ? setIsSuiteFilterActive(true)
                  : setIsFilterActive(true);
              }}
            >
              <FilterListOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        )}
        {!props.isSuite && !props.isSomeChecked && !props.isAllChecked && (
          <Tooltip title="New" placement="bottom">
            <Link to="/create">
              <IconButton>
                <AddOutlinedIcon sx={{ color: "#863654" }} />
              </IconButton>
            </Link>
          </Tooltip>
        )}
        {!props.isSuite && (props.isSomeChecked || props.isAllChecked) && (
          <Tooltip title="Add to Suite" placement="bottom">
            <IconButton onClick={addSelectedToSuite}>
              <AddOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        )}
        {((props.isSuite &&
          (props.isSomeSuiteChecked || props.isAllSuiteChecked)) ||
          (!props.isSuite && (props.isSomeChecked || props.isAllChecked))) && (
          <Tooltip title="Remove" placement="bottom">
            <IconButton onClick={() => setRemoveModalIsOpen(true)}>
              <ClearOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        )}
      </div>
      {removeModalIsOpen && (
        <RemoveModal
          onCancel={() => setRemoveModalIsOpen(false)}
          onDelete={deleteHandler}
        />
      )}
      {removeModalIsOpen && (
        <BackDrop onClick={() => setRemoveModalIsOpen(false)} />
      )}
    </div>
  );
}

export default Header;
