import { Checkbox } from '@mui/material'
import './TestCaseItem.css'

function TestCaseItem({ id, title, requirement, assignee, run, status, isChecked, onChecked}) {


  return (
    <div className='test-case-item'>
      <div className='test-case-item__options'>
        <Checkbox onClick={() => onChecked(id)} checked={isChecked} sx={{'&.Mui-checked':{color: "#863654",},}} />
      </div>
      <div className='test-case-item__title'>
        {title}
      </div>
      <div className='test-case-item__requirement'>
        {requirement}
      </div>
      <div className='test-case-item__assignee'>
        {assignee}
      </div>
      <div className='test-case-item__run'>
        {run}
      </div>
      <div className='test-case-item__status'>
        {status}
      </div>
    </div>
  )
}

export default TestCaseItem