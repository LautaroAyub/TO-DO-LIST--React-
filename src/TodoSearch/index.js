import React from "react"
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext"

function ToDoSearch(){
    const {        
        searchValue,
        setSearchValue
      }= React.useContext(TodoContext)

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