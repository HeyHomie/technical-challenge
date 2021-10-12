import "./linkDetails.css";

interface Props {
  icon?:any;
  value?:string;
  type:string;
}

const LinkDetails = ({icon:Icon,value,type}: Props) => {

  

  return (
    <div className="linkDetails">
      {
      Icon?<Icon className={`dot dot--${value}`}/> : null
      }
      <span className="linkDetail-text">{value}</span>
    </div>
  )
}

export default LinkDetails
