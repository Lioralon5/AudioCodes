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

function Header({
  collection,
  cases,
  setCases,
  isSomeChecked,
  isAllChecked,
  isFilterActive,
  setIsFilterActive,
  areCasesFiltered,
  setAreCasesFiltered,
  user,
}) {
  const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const addSelectedToSuite = (e) => {
    cases
      .filter((testCase) => testCase.isChecked)
      .map((testCase) => {
        db.collection("suiteCases")
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
                titleToLowerCase: testCase.data.title.toLowerCase(),
              });
            }
          });
        return testCase;
      });
  };

  const cancelFilterHandler = () => {
    setIsFilterActive(false);
    setAreCasesFiltered(false);
    noFilter();
  };

  const noFilter = () => {
    if (collection === "myCases") {
      db.collection("testCases")
        .where("assignee", "==", user.displayName)
        .onSnapshot((snapshot) => {
          setCases(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
              isChecked: false,
            }))
          );
        });
    } else {
      db.collection(collection).onSnapshot((snapshot) => {
        setCases(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
            isChecked: false,
          }))
        );
      });
    }
  };

  const deleteHandler = () => {
    setRemoveModalIsOpen(false);
    removeSelectedTestCases();
  };

  const removeSelectedTestCases = () => {
    switch (collection) {
      case "testCases":
        cases
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
        break;
      case "suiteCases":
        cases
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
        break;
      case "myCases":
        break;
      default:
    }
  };
  useEffect(() => {
    if (searchTerm === "") {
      noFilter();
    } else {
      const input = searchTerm.toLowerCase();
      if (collection === "myCases") {
        db.collection("testCases")
          .where("assignee", "==", user.displayName)
          .where("titleToLowerCase", ">=", input)
          .where("titleToLowerCase", "<", input + "\uf8ff")
          .onSnapshot((snapshot) => {
            setCases(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
                isChecked: false,
              }))
            );
          });
      } else {
        db.collection(collection)
          .where("titleToLowerCase", ">=", input)
          .where("titleToLowerCase", "<", input + "\uf8ff")
          .onSnapshot((snapshot) => {
            setCases(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
                isChecked: false,
              }))
            );
          });
      }
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="header">
      <div className="header__left">
        <h3>
          {collection === "suiteCases"
            ? "Suite"
            : collection === "testCases"
            ? "Test Cases"
            : "My Cases"}
        </h3>
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

      <div className="header__right">
        {(isFilterActive || areCasesFiltered) && (
          <Tooltip title="Cancel" placement="bottom">
            <IconButton onClick={cancelFilterHandler}>
              <FilterListOffOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        )}
        {isFilterActive && (
          <Filter
            collection={collection}
            setCases={setCases}
            setIsFilterActive={setIsFilterActive}
            setAreCasesFiltered={setAreCasesFiltered}
          />
        )}
        {!isFilterActive && !areCasesFiltered && (
          <Tooltip title="Filter" placement="bottom">
            <IconButton
              onClick={() => {
                setIsFilterActive(true);
              }}
            >
              <FilterListOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        )}
        {collection === "testCases" && !isSomeChecked && !isAllChecked && (
          <Tooltip title="New" placement="bottom">
            <Link to="/create">
              <IconButton>
                <AddOutlinedIcon sx={{ color: "#863654" }} />
              </IconButton>
            </Link>
          </Tooltip>
        )}
        {collection === "testCases" && (isSomeChecked || isAllChecked) && (
          <Tooltip title="Add to Suite" placement="bottom">
            <IconButton onClick={addSelectedToSuite}>
              <AddOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        )}
        {((collection === "suiteCases" && (isSomeChecked || isAllChecked)) ||
          (collection === "testCases" && (isSomeChecked || isAllChecked))) && (
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
