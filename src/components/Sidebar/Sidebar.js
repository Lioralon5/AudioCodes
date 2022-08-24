import '../../CSS/Sidebar.css';
import Vision from "./vision.png";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import { Avatar } from "@mui/material";


function Sidebar() {
  const [isTestsPageActive, setIsTestsPageActive] = useState(true);
  const [isSuitePageActive, setIsSuitePageActive] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutOfApp = () =>{
    dispatch(logout());
    auth.signOut();
  }

  function testsPageClickHandler() {
    setIsTestsPageActive(true);
    setIsSuitePageActive(false);
  }
  function suitePageClickHandler() {
    setIsSuitePageActive(true);
    setIsTestsPageActive(false);
  }

  return (
    <div className="sidebar">
      <img src={Vision} alt=""></img>
      <Avatar sx={{ bgcolor: '#863654' }} onClick={logoutOfApp} className="sidebar__email" src={user.photoUrl} alt="" title="Logout">{user.email[0].toUpperCase()}</Avatar>
      <hr></hr>
      <Tooltip title="Test Development" arrow placement="right">
        <Link to="/">
          <IconButton onClick={testsPageClickHandler}>
            <CreateOutlinedIcon
              className="icon"
              sx={{ color: isTestsPageActive ? "#FFFFFF" : "#863654" }}
            ></CreateOutlinedIcon>
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title="Suite" arrow placement="right">
        <Link to="/suite">
          <IconButton onClick={suitePageClickHandler}>
            <WorkOutlineOutlinedIcon
              className="icon"
              sx={{ color: isSuitePageActive ? "#FFFFFF" : "#863654" }}
            ></WorkOutlineOutlinedIcon>
          </IconButton>
        </Link>
      </Tooltip>
    </div>
  );
}

export default Sidebar;
