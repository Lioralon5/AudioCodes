import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

function HeaderOption(props) {
  return props.link === null ? (
    <Tooltip title={props.title} placement="bottom">
      <IconButton onClick={props.onClick}>
        <props.icon sx={{ color: "#863654" }} />
      </IconButton>
    </Tooltip>
  ) : (
    <Tooltip title={props.title} placement="bottom">
      <Link to={props.link}>
        <IconButton>
          <props.icon sx={{ color: "#863654" }} />
        </IconButton>
      </Link>
    </Tooltip>
  );
}

export default HeaderOption;
