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
  const [openModal, setOpenModal] = React.useState(false)
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      return todoText.includes(searchValue.toLocaleLowerCase())

    })

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  const addTodo = (text) => {
    const existTodo = todos.find(todo => todo.text === text)
    if (existTodo) {
      alert("Esa tarea ya existe, prueba con otra!")
    }
    else {
      const itemNew = {
        text: text,
        completed: false
      };
      const newTodos = [...todos]
      newTodos.push(itemNew)
      saveTodos(newTodos)
      setOpenModal(false)
    }

  }
  const states={
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    openModal,
  }
 const stateUpdaters={
  synchronizeTodos,
  setSearchValue,
  completeTodo,
  deleteTodo,
  setOpenModal,
  addTodo
 }
  return {
      states,
      stateUpdaters
    }

}

export { useToDos }