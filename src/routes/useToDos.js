import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useToDos() {
  const {
    item: todos,
    saveItem: saveTodos,
    synchronizeItems:synchronizeTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1", [])

  const [searchValue, setSearchValue] = React.useState("")

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      return todoText.includes(searchValue.toLocaleLowerCase())

    })

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }
  
  const addTodo = (text) => {
    const existTodo = todos.find(todo => todo.text === text)
    const id= newTodoId(todos);
    if (existTodo) {
      alert("Esa tarea ya existe, prueba con otra!")
    }else {
      const itemNew = {
         id:id,
        text: text,
        completed: false
      };
      const newTodos = [...todos]
      newTodos.push(itemNew)
      saveTodos(newTodos)
    }
  }
  const getTodo=(id)=>{
   return todos.find(todo => todo.id === id)
  }

  const editTodo = (id,newText) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  const states={
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    getTodo
  }
 const stateUpdaters={
  synchronizeTodos,
  setSearchValue,
  completeTodo,
  deleteTodo,
  addTodo,
  editTodo
 }
  return {
      states,
      stateUpdaters,
    }

}

function newTodoId(TodoList){
  if(!TodoList.length){
    return 1
  }
  const idList=TodoList.map(todo=> todo.id);
  const idMax=Math.max(...idList);
  return idMax+1
}
export { useToDos }