import React from 'react'
import { ToDoCounter } from '../TodoCounter/index.js';
import { ToDoSearch } from '../TodoSearch/index.js';
import { ToDoList } from '../TodoList/index.js.js';
import { ToDoItem } from '../TodoItem/index.js';
import { CreateToDoButton } from '../CreateTodoButton/index.js';
import { TodosLoading } from "../TodosLoading"
import { TodosError } from "../TodosError"
import { EmptyTodos } from "../EmptyTodos"
import { useTodos } from './useTodos.js';
import { TodoForm } from '../TodoForm/index.js';
import { Modal } from "../Modal"
import TodoHeader from '../TodoHeader/index.js';
import ChangeAlertWithStorageListener from '../ChangeAlert/index.js';
function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    synchronizeTodos,
  } = useTodos()
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