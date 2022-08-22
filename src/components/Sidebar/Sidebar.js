import './Sidebar.css'
import Vision from './vision.png'
import emailLogo from './emailLogo.png'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom'
import { useState } from 'react';




function Sidebar() {
    const [isTestsPageActive, setIsTestsPageActive] = useState(true);
    const [isSuitePageActive, setIsSuitePageActive] = useState(false);

    function testsPageClickHandler() {
        setIsTestsPageActive(true)
        setIsSuitePageActive(false)
    }
    function suitePageClickHandler() {
        setIsSuitePageActive(true)
        setIsTestsPageActive(false)
    }

    return (
        <div className="sidebar">
            <img src={Vision} alt=''></img>
            <img src={emailLogo} alt=''></img>
            <hr></hr>
            <Tooltip title='Test Development' arrow placement='right'>
                <Link to='/'>
                    <IconButton onClick={testsPageClickHandler}>
                        <CreateOutlinedIcon className='icon' sx={{ color: (isTestsPageActive ? '#FFFFFF' : '#863654') }}></CreateOutlinedIcon>
                    </IconButton>
                </Link>
            </Tooltip>
            <Tooltip title='Suite' arrow placement='right'>
                <Link to='/suite'>
                    <IconButton onClick={suitePageClickHandler}>
                        <WorkOutlineOutlinedIcon className='icon' sx={{ color: (isSuitePageActive ? '#FFFFFF' : '#863654') }}></WorkOutlineOutlinedIcon>
                    </IconButton>
                </Link>
            </Tooltip>
        </div>
    )
}

export default Sidebar