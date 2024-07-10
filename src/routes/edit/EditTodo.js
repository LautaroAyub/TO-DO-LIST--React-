import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useLocation, useParams } from "react-router-dom";
import { useToDos } from "../useToDos";
function EditTodoPage() {
  const location= useLocation();
  const { stateUpdaters, states } = useToDos();
  const param = useParams();
  const id = parseInt(param.id)
  let todoText

  if(location.state?.toDo){
    todoText=location.state.toDo.text
  } else if(states.loading){
    return <p>Cargando...</p>
  }else{
    //if the user reload page and not exist locationState
    const thisToDo=states.getTodo(id)
    todoText=thisToDo.text
  }
  return (
    <>
      <TodoForm
      loading={states.loading}
        label="Edita tu To-Do"
        submitText="Editar"
        submitEvent={(newText) => stateUpdaters.editTodo(id,newText)}
        defaultToDoText={todoText}
      />
    </>
  )
}
export { EditTodoPage }