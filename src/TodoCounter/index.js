import React from "react"

import "./TodoCounter.css"

function ToDoCounter({totalTodos, completedTodos}){



    return (
      <div className="counter-container">
      {totalTodos===0?
     <h1 className="counter-title">No tienes tareas pendientes</h1>
    :
    (
      totalTodos===completedTodos?
    <h1 className="counter-title">Exelente! Has completado todas tus tareas</h1>
    :
    <h1 className="counter-title">
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
      </h1>
     
    )}
    </div>
      
    )
    
}

export {ToDoCounter}

