import './BackDrop.css'

function BackDrop(props) {
  return (
    <div className="backdrop" onClick={props.onClick} />
  )
}

export default BackDrop