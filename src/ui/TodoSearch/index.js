import React from "react"
import "./TodoSearch.css"

function ToDoSearch({ searchValue,
    setSearchValue, loading}){
    return(
    <input placeholder="Busca Tareas" 
    className="search-input"
    value={searchValue}
    onChange={(event)=>{
        setSearchValue(event.target.value)
    }}
    disabled={loading}/> 
    )
}
export {ToDoSearch}