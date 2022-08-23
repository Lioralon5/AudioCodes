import { Checkbox } from '@mui/material'
import './SuiteCaseItem.css'

function SuiteCaseItem({ id, title, requirement, assignee, run, status, isChecked, onChecked}) {


  return (
    <div className='suite-case-item'>
      <div className='suite-case-item__options'>
        <Checkbox onClick={() => onChecked(id)} checked={isChecked} sx={{'&.Mui-checked':{color: "#863654",},}} />
      </div>
      <div className='suite-case-item__title'>
        {title}
      </div>
      <div className='suite-case-item__requirement'>
        {requirement}
      </div>
      <div className='suite-case-item__assignee'>
        {assignee}
      </div>
      <div className='suite-case-item__run'>
        {run}
      </div>
      <div className='suite-case-item__status'>
        {status}
      </div>
    </div>
  )
}

export default SuiteCaseItem