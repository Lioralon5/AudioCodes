import { IconButton, Tooltip } from '@mui/material'

function HeaderOption({ Icon, hover, Link }) {
  return (
    <div className='headerOption'>
      <Tooltip title={hover}>
        <IconButton>
          <Icon className='headerOption__icon'></Icon>
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default HeaderOption