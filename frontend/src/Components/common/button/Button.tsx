
import "./button.css";

interface Props {
  icon?:any;
  value:string;
  size:string;
  color?:string;
}

const Button = ({size,icon:Icon,value,color}: Props) => {
  return (
   <button className={`btn btn--${size} ${color&&'btn--green'}`}>
     {Icon&& <Icon/>}
     {value}
   </button>
  )
}

export default Button
