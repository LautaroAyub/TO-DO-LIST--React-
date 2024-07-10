import React from "react";
import "./EmptyTodos.css"

function EmptyTodos({type}){
    if (type ==="emptySearch"){
        return  <p>No encontramos resultados con tu busqueda, prueba con otro Todo!</p>
      }
      if(type==="emptyTodo"){
        return  (
          <div className="text-contain">
          <p>Crea tu primer TODO!</p>
          </div>
        )
       } 
    
}


export {EmptyTodos}
