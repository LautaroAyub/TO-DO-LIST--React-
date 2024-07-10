import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useToDos } from "../useToDos";
function NewTodoPage() {
  const { stateUpdaters } = useToDos();
  return (
        <>
        <TodoForm 
        label="Escribe tu nuevo To-Do"
        submitText="Añadir"
        submitEvent={(text)=>{stateUpdaters.addTodo(text)}}
        />
      </>
    )
}
export { NewTodoPage }