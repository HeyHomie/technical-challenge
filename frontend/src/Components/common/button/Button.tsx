
import "./button.css";

interface Props {
  icon?:any;
  value:string;
  size:string;
}

const Button = ({size,icon:Icon,value}: Props) => {
  return (
   <button className={`btn btn--${size}`}>
     {Icon&& <Icon/>}
     {value}
   </button>
  )
}

export default Button
