import "../../CSS/Header.css";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import FilterListOffOutlinedIcon from "@mui/icons-material/FilterListOffOutlined";
import { IconButton, TextField, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import RemoveModal from "../Shared/RemoveModal";
import BackDrop from "../Shared/BackDrop";
import Filter from "../Shared/Filter";
import { db } from "../../firebase";

function MyCasesHeader({ cases, setCases, isSomeChecked, isAllChecked, user }) {
  const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [areCasesFiltered, setAreCasesFiltered] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const cancelFilterHandler = () => {
    setIsFilterActive(false);
    setAreCasesFiltered(false);
    noFilter();
  };

  const noFilter = () => {
    db.collection("testCases").where('assignee', '==', user.displayName).onSnapshot((snapshot) => {
      setCases(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
          isChecked: false,
        }))
      );
    });
  };

  const deleteHandler = () => {
    setRemoveModalIsOpen(false);
    removeSelectedTestCases();
  };

  const removeSelectedTestCases = () => {
    cases
      .filter((myCase) => myCase.isChecked)
      .map((myCase) => {
        const docRef = db
          .collection("myCases")
          .where("timestamp", "==", myCase.data.timestamp);
        docRef.get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            doc.ref.delete();
          });
        });
        return myCase;
      });
  };
  useEffect(() => {
    if (searchTerm === "") {
      noFilter();
    } else {
      const input = searchTerm.toLowerCase();
      db.collection("testCases").where('assignee', '==', user.displayName)
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
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="header">
      <div className="header__left">
        <h3>{user.displayName} - My Cases</h3>
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
      {removeModalIsOpen && (
        <BackDrop onClick={() => setRemoveModalIsOpen(false)} />
      )}
    </div>
  );
}

export default MyCasesHeader;
