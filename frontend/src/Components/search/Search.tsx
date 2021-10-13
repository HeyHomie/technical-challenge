import "./search.css";

interface Props {
  valueSearch:string;
  setValueSearch:(value:string) => void;
}

const Search = ({setValueSearch,valueSearch}: Props) => {

  const handlerInput = (e:any) => {
    let  name = e.target.value.toLowerCase();
    setValueSearch(name)
  }


  return (
    <div className="search">
        <input
        value={valueSearch}
        onChange={handlerInput}
        placeholder="Find a repository…"
        className="search__input"
        type="search" />
    </div>
  )
}

export default Search
