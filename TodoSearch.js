import React from "react"

function ToDoSearch(
{    searchValue,
    setSearchValue}
){

    return(
    <input placeholder="Busca Tareas" 
    className="search-input"
    value={searchValue}
    onChange={(event)=>{
        setSearchValue(event.target.value)
    }}/> 
    )
}
export {ToDoSearch}