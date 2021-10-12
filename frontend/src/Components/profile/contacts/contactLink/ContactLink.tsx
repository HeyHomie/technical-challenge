import "./contactLink.css";

interface Props {
  icon?:any;
  value:string;
  link?:boolean;
}

const ContactLink = ({icon:Icon,value,link=true}: Props) => {


  return (
    link ? 
    <p className="contacts__item">
     {Icon&&<Icon/>}
    <a className="contacts__link" href={`${value}`} target="_blank">{value}</a>
    </p>
 :
  <p className="contacts__item">
    {Icon&&<Icon/>}
    <span>{value}</span>
  </p>

  )
}

export default ContactLink
