import "../../CSS/Sidebar.css";
import Vision from "./vision.png";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import { Avatar } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  const [pageActive, setPageActive] = useState("tests");
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
      <SidebarOption
        icon={CreateOutlinedIcon}
        pageActive={pageActive}
        title="Test Development"
        link="/"
        onClick={() => setPageActive("tests")}
        page="tests"
      />
      <SidebarOption
        icon={WorkOutlineOutlinedIcon}
        pageActive={pageActive}
        title="Suite"
        link="/suite"
        onClick={() => setPageActive("suite")}
        page="suite"
      />
      <SidebarOption
        icon={PersonOutlineOutlinedIcon}
        pageActive={pageActive}
        title="My Cases"
        link="/my-cases"
        onClick={() => setPageActive("my")}
        page="my"
      />
    </div>
  );
}

export default Sidebar;
