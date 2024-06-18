import React from'react'
import "./app.css"
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
   } = useTodos()
  return (
    <>
    <div className='contain-central'>

      <ToDoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <ToDoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )

        }
        {error && <TodosError />}

        {(!loading && totalTodos === 0) && <EmptyTodos type={"emptyTodo"} />}

        {(!loading && totalTodos > 0 && searchedTodos.length === 0) && <EmptyTodos type={"emptySearch"} />}

        {searchedTodos.map(todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />))}
      </ToDoList>

      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TodoForm  addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>)
      }

      <CreateToDoButton openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  </>
  );
  }
export default App;


//  todo provider es la forma en la que le entrego todas las propeides que necesito para los componentes hijos de ella