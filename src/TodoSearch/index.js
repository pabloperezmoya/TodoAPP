import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'
const TodoSearch = () =>{
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  const onSearchValueChange = (event) =>{
    console.log(event.target.value);
        setSearchValue(event.target.value);
  }

  return (
    <span className="searchBox">
      <i className="fa-solid fa-magnifying-glass"/>
      <input 
      onChange={onSearchValueChange}
      value={searchValue}
      placeholder="Zanahorias"/>
    </span>
  )
}

export {TodoSearch};