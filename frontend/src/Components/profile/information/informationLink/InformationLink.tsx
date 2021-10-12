import "./informationLink.css";
import {formatStars} from '../../../../utils/formatStars'

interface Props {
  text:string;
  value:number;
  icon?:any;
}

const InformationLink = ({text,value,icon:Icon}: Props) => {
  return (
    <a className="info__link" href="#followers">
      {Icon&&<Icon/>}
      <span className="info__value">{formatStars(value)}</span>
       {text}
    </a>  
  )
}

export default InformationLink
