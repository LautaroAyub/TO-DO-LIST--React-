import React from "react"
import { TodoContext } from "../TodoContext"
import "./TodoCounter.css"

function ToDoCounter(){

const {        
  totalTodos:total, 
  completedTodos:completed
}= React.useContext(TodoContext)

    return (
      <div className="counter-container">
      {total===0?
     <h1 className="counter-title">No tienes tareas pendientes</h1>
    :
    (
      total===completed?
    <h1 className="counter-title">Exelente! Has completado todas tus tareas</h1>
    :
    <h1 className="counter-title">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
     
    )}
    </div>
      
    )
    
}

export {ToDoCounter}

