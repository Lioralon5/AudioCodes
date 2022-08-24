import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import "../../CSS/CreateHeader.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { db } from "../../firebase";
import firebase from "firebase";

function CreateHeader(props) {
  const createTestCase = (e) => {
    db.collection("testCases").add({
      title: props.title,
      requirement: props.requirement,
      assignee: props.assignee,
      run: props.run,
      status: props.status,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="createHeader">
      <div className="createHeader__left">
        <h3>New Test Case</h3>
      </div>
      <div className="createHeader__right">
        {props.title !== "" &&
          props.requirement !== "" &&
          props.assignee !== "" &&
          props.run !== "" &&
          props.status !== "" && (
            <Tooltip title="New" placement="bottom">
              <Link to="/">
                <IconButton onClick={createTestCase}>
                  <AddOutlinedIcon sx={{ color: "#863654" }} />
                </IconButton>
              </Link>
            </Tooltip>
          )}
        {(props.title === "" ||
          props.requirement === "" ||
          props.assignee === "" ||
          props.run === "" ||
          props.status === "") && (
          <Tooltip title="Please Fill Required Fields" placement="bottom">
            <IconButton>
              <AddOutlinedIcon sx={{ color: "#bdbdbd", cursor: "default" }} />
            </IconButton>
          </Tooltip>
        )}
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
