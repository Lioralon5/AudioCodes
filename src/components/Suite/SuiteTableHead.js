import { Checkbox } from '@mui/material'
import './SuiteTableHead.css'

function SuiteTableHead() {
  return (
    <div className='suiteTableHead'>
      <div className='suiteTableHead__options'>
        <Checkbox sx={{'&.Mui-checked':{color: "#863654",},}} />
      </div>
      <div className='suiteTableHead__title'>
        <b>Title</b>
      </div>
      <div className='suiteTableHead__requirement'>
        <b>Requirement</b>
      </div>
      <div className='suiteTableHead__assignee'>
        <b>Assignee</b>
      </div>
      <div className='suiteTableHead__run'>
        <b>Run</b>
      </div>
      <div className='suiteTableHead__status'>
        <b>Status</b>
      </div>
    </div>
  )
}

export default SuiteTableHead