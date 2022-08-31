import { IconButton, Tooltip } from "@mui/material"
import { Link } from "react-router-dom"



function SidebarOption(props) {
  return (
    <Tooltip title={props.title} arrow placement="right">
        <Link to={props.link}>
          <IconButton onClick={props.onClick}>
            <props.icon
              className="icon"
              sx={{ color: props.pageActive === props.page ? "#FFFFFF" : "#863654" }}
            />
          </IconButton>
        </Link>
      </Tooltip>
  )
}

export default SidebarOption