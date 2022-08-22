import { Checkbox } from '@mui/material'
import { useState } from 'react'
import './TestCaseItem.css'

function TestCaseItem({ title, requirement, assignee, run, status, isAllChecked}) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='test-case-item'>
      <div className='test-case-item__options'>
        <Checkbox onClick={() => setIsChecked(!isChecked)} checked={isAllChecked || isChecked} sx={{'&.Mui-checked':{color: "#863654",},}} />
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