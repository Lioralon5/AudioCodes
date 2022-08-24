import '../../CSS/RemoveModal.css'

function RemoveModal(props) {

  return (
    <div className='removeModal'>
        <p>You are going to delete selected tests</p>
        <button className='btn' onClick={props.onDelete}>Delete</button>
        <button className='btn btn--alt' onClick={props.onCancel}>Cancel</button>
    </div>
  )
}

export default RemoveModal