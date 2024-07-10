import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { CreateToDoButton } from "../../ui/CreateTodoButton";
import { EmptyTodos } from "../../ui/EmptyTodos"
import { ToDoCounter } from '../../ui/TodoCounter/index.js';
import { ToDoItem } from '../../ui/TodoItem/index.js';
import { ToDoList } from '../../ui/TodoList/index.js.js';
import { ToDoSearch } from '../../ui/TodoSearch/index.js';
import { TodosError } from "../../ui/TodosError"
import { TodosLoading } from "../../ui/TodosLoading"
import { useToDos } from '../useToDos.js';
import ChangeAlertWithStorageListener from '../../ui/ChangeAlert/index.js';
import TodoHeader from '../../ui/TodoHeader/index.js';
function HomePage() {
    const navigate= useNavigate()
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
}=states;
    const {
      synchronizeTodos,
      setSearchValue,
      completeTodo,
      deleteTodo,
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
            onEdit={()=>navigate(`/edit/${todo.id}`,
              {state:{toDo:todo}}
            )}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />))}
          
      />
      <CreateToDoButton
      onClick={()=>navigate("/new")}
      />

      <ChangeAlertWithStorageListener
        synchronize={synchronizeTodos}
      />

    </TodoHeader>
  );
}
export {HomePage};