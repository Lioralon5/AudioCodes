import { IconButton, Tooltip } from '@mui/material'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import './SuiteHeader.css'

function SuiteHeader() {
    return (
        <div className='suite-header'>
            <div className='suite-header__left'>
                <h3>Test Cases</h3>
            </div>

            <div className='suite-header__right'>
                <Tooltip title='Filter' placement='bottom'>
                    <IconButton>
                        <FilterListOutlinedIcon sx={{ color: "#863654" }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Remove' placement='bottom'>
                    <IconButton>
                        <ClearOutlinedIcon sx={{ color: "#863654" }} />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default SuiteHeader