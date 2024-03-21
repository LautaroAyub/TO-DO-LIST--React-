import React from 'react';
import { ToDoCounter } from '../TodoCounter/index.js';
import { ToDoSearch } from '../TodoSearch/index.js';
import { ToDoList } from '../TodoList/index.js.js';
import { ToDoItem } from '../TodoItem/index.js';
import { CreateToDoButton } from '../CreateTodoButton/index.js';
import { TodosLoading } from "../TodosLoading"
import { TodosError } from "../TodosError"
import { EmptyTodos } from "../EmptyTodos"
import { TodoContext } from '../TodoContext/index.js';
import { TodoForm } from '../TodoForm/index.js';
import { Modal } from "../Modal"

function AppUi() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal } = React.useContext(TodoContext)
  return (
    <>
      <div className='contain-central'>


        <ToDoCounter />
        <ToDoSearch />
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

          {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
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
          <Modal>

            <TodoForm />


          </Modal>)
        }

        <CreateToDoButton />


        {/* </TodoContext.Consumer> can i use this or the other, If i use the fisth i should to <TodoContext.Consumer>{(parametros que necesito)=>(all logic)}</TodoContext.Consumer> in return a function */}
        {/* there is this way or React.context how it happens in <ToDoCounter /> */}
      </div>
    </>
  )
}
export { AppUi }