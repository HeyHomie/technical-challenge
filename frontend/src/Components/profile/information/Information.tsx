import "./information.css";


interface Props {
  
}

const Information = (props:any) => {
  return (
    <div className="info">
      {props.children}
    </div>
  )
}

export default Information
