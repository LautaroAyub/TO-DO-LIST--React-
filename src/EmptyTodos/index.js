import React from "react";

function EmptyTodos({type}){
    if (type ==="emptySearch"){
        return  <p>No encontramos resultados con tu busqueda, prueba con otro Todo!</p>
      }
      if(type==="emptyTodo"){
        return  <p>Crea tu primer TODO!</p>
       } 
    
}


export {EmptyTodos}
