import { IconButton, TextField, Tooltip } from "@mui/material";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import FilterListOffOutlinedIcon from "@mui/icons-material/FilterListOffOutlined";
import "./SuiteHeader.css";
import Filter from "../Filter";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import RemoveModal from "../RemoveModal";
import BackDrop from "../BackDrop";

function SuiteHeader({
  suiteCases,
  setSuiteCases,
  isSomeSuiteChecked,
  isAllSuiteChecked,
}) {
  const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false);
  const [isSuiteFilterActive, setIsSuiteFilterActive] = useState(false);
  const [areSuiteCasesFiltered, setAreSuiteCasesFiltered] = useState(false);
  const [origin, setOrigin] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const cancelFilterHandler = () => {
    setIsSuiteFilterActive(false);
    setAreSuiteCasesFiltered(false);
    if (origin.length !== 0) setSuiteCases(origin);
  };

  function deleteHandler() {
    setRemoveModalIsOpen(false);
    removeSelectedSuiteCases();
  }

  function removeHandler() {
    setRemoveModalIsOpen(true);
  }

  function closeRemoveModalHandler() {
    setRemoveModalIsOpen(false);
  }
  const removeSelectedSuiteCases = () => {
    suiteCases
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
  };
  useEffect(() => {
    setSuiteCases(
      origin.filter((suiteCase) => {
        if (searchTerm === "") {
          return suiteCase;
        } else if (suiteCase.data.title.startsWith(searchTerm)) {
          return suiteCase;
        }
      })
    );
  }, [searchTerm]);



  return (
    <div className="suite-header">
      <div className="suite-header__left">
        <h3>Suite</h3>
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

      <div className="suite-header__right">
        {(isSuiteFilterActive || areSuiteCasesFiltered) && (
          <Tooltip title="Cancel" placement="bottom">
            <IconButton onClick={cancelFilterHandler}>
              <FilterListOffOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        )}
        {isSuiteFilterActive && (
          <Filter
            isSuite={true}
            suiteCases={suiteCases}
            setSuiteCases={setSuiteCases}
            origin={origin}
            setOrigin={setOrigin}
            setIsSuiteFilterActive={setIsSuiteFilterActive}
            setAreSuiteCasesFiltered={setAreSuiteCasesFiltered}
          />
        )}
        {!isSuiteFilterActive && !areSuiteCasesFiltered && (
          <Tooltip title="Filter" placement="bottom">
            <IconButton onClick={() => setIsSuiteFilterActive(true)}>
              <FilterListOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Tooltip>
        )}
        {(isSomeSuiteChecked || isAllSuiteChecked) && (
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

export default SuiteHeader;
