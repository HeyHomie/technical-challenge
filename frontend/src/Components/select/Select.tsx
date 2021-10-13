import "./select.css"

interface Props {
  setValueSelect:(value:string)=>void;
  defaultValue:string;
  options:{value:string,name:string}[];
}

const Select = ({setValueSelect,defaultValue, options}:Props) => {
  
  const handleChange = (e:any) => {
    setValueSelect(e.target.value)
  }
  
  return (
   <select value={defaultValue} onChange={handleChange} className="select">

     {
       
       options.map((option,index)=>(
        <option key={index} value={option.value}>{option.name}</option>
       ))
     }
    
 
   </select>
  )
}

export default Select
