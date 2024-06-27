import React from 'react'
import { CreateToDoButton } from '../CreateTodoButton/index.js';
import { EmptyTodos } from "../EmptyTodos"
import { Modal } from "../Modal"
import { ToDoCounter } from '../TodoCounter/index.js';
import { TodoForm } from '../TodoForm/index.js';
import { ToDoItem } from '../TodoItem/index.js';
import { ToDoList } from '../TodoList/index.js.js';
import { ToDoSearch } from '../TodoSearch/index.js';
import { TodosError } from "../TodosError"
import { TodosLoading } from "../TodosLoading"
import { useToDos } from './useToDos.js';
import ChangeAlertWithStorageListener from '../ChangeAlert/index.js';
import TodoHeader from '../TodoHeader/index.js';
function App() {
  const {
    states,
    stateUpdaters
  } = useToDos();
  const { 
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    openModal}=states;
    const {
      synchronizeTodos,
      setSearchValue,
      completeTodo,
      deleteTodo,
      setOpenModal,
      addTodo
    } =stateUpdaters;
  return (
    <TodoHeader>
      <ToDoCounter totalTodos={totalTodos} completedTodos={completedTodos}
        loading={loading} />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading} />

      <ToDoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodo={() => <EmptyTodos type={"emptyTodo"} />}
        onEmptySearch={() => <EmptyTodos type={"emptySearch"} />}
        renderTodos={() => searchedTodos.map(todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />))}
      />
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>)
      }

      <CreateToDoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      <ChangeAlertWithStorageListener
        synchronize={synchronizeTodos}
      />

    </TodoHeader>
  );
}
export default App;