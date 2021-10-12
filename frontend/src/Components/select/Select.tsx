import "./select.css"

interface Props {
  defaultValue:string;
  options:Array<string>;
}

const Select = ({defaultValue, options}:Props) => {
  
  
  return (
   <select className="select">
     <option value={defaultValue}>{defaultValue}</option>
     {
       
       options.map((option,index)=>(
        <option key={index} value={option}>{option}</option>
       ))
     }
    
 
   </select>
  )
}

export default Select
