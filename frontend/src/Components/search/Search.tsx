import "./search.css";
import {IRepository} from '../../interfaces/repository.interfaces';
import { useEffect, useState } from "react";
interface Props {
  valueSearch:string;
  repositories:IRepository[];
  setRepositoriesSearch:(value:IRepository[]) => void;
  setValueSearch:(value:string) => void;
}

const Search = ({setValueSearch,setRepositoriesSearch,repositories,valueSearch}: Props) => {

 
  
  const filterRepositories = (value:string) =>{ 
    const NewListRepositories = repositories.filter((repo) => repo.name.toLowerCase().includes(value))
    setRepositoriesSearch(NewListRepositories)
  }

  const handlerInput = (e:any) => {
    setValueSearch(e.target.value)
    filterRepositories(e.target.value)
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
