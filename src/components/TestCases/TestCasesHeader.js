import "./TestCasesHeader.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import FilterListOffOutlinedIcon from "@mui/icons-material/FilterListOffOutlined";
import { IconButton, TextField, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RemoveModal from "../RemoveModal";
import BackDrop from "../BackDrop";
import Filter from "../Filter";
import { db } from "../../firebase";
import firebase from "firebase";

function TestCasesHeader({
  testCases,
  setTestCases,
  isSomeChecked,
  isAllChecked,
}) {
  const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [areCasesFiltered, setAreCasesFiltered] = useState(false);
  const [origin, setOrigin] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addSelectedToSuite = (e) => {
    testCases
      .filter((testCase) => testCase.isChecked)
      .map((testCase) => {
        db.collection("suiteCases").add({
          id: testCase.id,
          title: testCase.data.title,
          requirement: testCase.data.requirement,
          assignee: testCase.data.assignee,
          run: testCase.data.run,
          status: testCase.data.status,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        console.log(testCases);
        return testCase;
      });
  };

  const cancelFilterHandler = () => {
    setIsFilterActive(false);
    setAreCasesFiltered(false);
    noFilter();
  };

  const noFilter = () => {
    db.collection("testCases").onSnapshot((snapshot) => {
      setTestCases(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };

  function deleteHandler() {
    setRemoveModalIsOpen(false);
    removeSelectedTestCases();
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
            .where("id", "==", testCase.id);
          suiteDocRef.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              doc.ref.delete();
            });
          });
        });
        return testCase;
      });
  };
  useEffect(() => {
    if (searchTerm === "") {
      noFilter();
    }
    else{
    const end =
      searchTerm.slice(0, searchTerm.length - 1) +
      String.fromCharCode(
        searchTerm
          .slice(searchTerm.length - 1, searchTerm.length)
          .charCodeAt(0) + 1
      );
    db.collection("testCases")
      .where("title", ">=", searchTerm)
      .where("title", "<", end)
      .onSnapshot((snapshot) => {
        setTestCases(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      })};
  }, [searchTerm]);


  return (
    <div className="test-cases-header">
      <div className="test-cases-header__left">
        <h3>Test Cases</h3>
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
        {(isFilterActive || areCasesFiltered) && (
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
            setAreCasesFiltered={setAreCasesFiltered}
          />
        )}
        {!isFilterActive && !areCasesFiltered && (
          <Tooltip title="Filter" placement="bottom">
            <IconButton onClick={() => setIsFilterActive(true)}>
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
        {(isSomeChecked || isAllChecked) && (
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
      {removeModalIsOpen && <BackDrop onClick={() => setRemoveModalIsOpen(false)} />}
    </div>
  );
}

export default TestCasesHeader;
