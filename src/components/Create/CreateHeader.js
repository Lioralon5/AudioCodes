import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import "./CreateHeader.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { db } from "../../firebase";
import firebase from "firebase";

function CreateHeader({ input, setInput }) {
  const createTestCase = (e) => {
    e.preventDefault();

    db.collection("testCases").add({
      title: input,
      requirement: "Who cares",
      assignee: "Lior Alon",
      run: "No Run",
      status: "Passed",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="createHeader">
      <div className="createHeader__left">
        <h3>New Test Case</h3>
      </div>
      <div className="createHeader__right">
        <Tooltip title="New" placement="bottom">
          <Link to="/">
            <IconButton onClick={createTestCase}>
              <AddOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Cancel" placement="bottom">
          <Link to="/">
            <IconButton>
              <ClearOutlinedIcon sx={{ color: "#863654" }} />
            </IconButton>
          </Link>
        </Tooltip>
      </div>
    </div>
  );
}

export default CreateHeader;
