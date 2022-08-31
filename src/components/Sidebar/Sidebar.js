import "../../CSS/Sidebar.css";
import Vision from "./vision.png";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import { Avatar } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Sidebar() {
  const [pageActive, setPageActive] = useState('tests');
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };


  return (
    <div className="sidebar">
      <img src={Vision} alt=""></img>
      <Avatar
        sx={{ bgcolor: "#863654" }}
        onClick={logoutOfApp}
        className="sidebar__email"
        src={user.photoUrl}
        alt=""
        title="Logout"
      >
        {user.email[0].toUpperCase()}
      </Avatar>
      <hr></hr>
      <Tooltip title="Test Development" arrow placement="right">
        <Link to="/">
          <IconButton onClick={() => setPageActive('tests')}>
            <CreateOutlinedIcon
              className="icon"
              sx={{ color: pageActive === 'tests' ? "#FFFFFF" : "#863654" }}
            ></CreateOutlinedIcon>
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title="Suite" arrow placement="right">
        <Link to="/suite">
          <IconButton onClick={() => setPageActive('suite')}>
            <WorkOutlineOutlinedIcon
              className="icon"
              sx={{ color: pageActive === 'suite' ? "#FFFFFF" : "#863654" }}
            ></WorkOutlineOutlinedIcon>
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title="My Cases" arrow placement="right">
        <Link to="/my-cases">
          <IconButton onClick={() => setPageActive('my')}>
            <PersonOutlineOutlinedIcon
              className="icon"
              sx={{ color: pageActive === 'my' ? "#FFFFFF" : "#863654" }}
            ></PersonOutlineOutlinedIcon>
          </IconButton>
        </Link>
      </Tooltip>
    </div>
  );
}

export default Sidebar;
