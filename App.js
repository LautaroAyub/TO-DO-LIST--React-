import React from'react'
import { ToDoCounter } from './TodoCounter';
import { ToDoSearch } from './TodoSearch';
import { ToDoList } from './TodoList';
import { ToDoItem } from './TodoItem';
import { CreateToDoButton } from './TodoButton'; 
import "./app.css"

const defaultTodos=[
  {text:"cortar cebolla", completed:true},
  {text:"llorar con la llorona", completed:false},
  {text:"LALALLA", completed:false},
  {text:"cortar caquiotas", completed:true},
]
function App() {
  const[searchValue,setSearchValue]= React.useState("")
  console.log("los usuarios buscan todos de "+ searchValue)

  const [todos, setTodos]=React.useState(defaultTodos)
  const completedTodos=todos.filter(todo=> !!todo.completed).length;
  const totalTodos=todos.length;

  const searchedTodos= todos.filter(
    (todo)=>{
      const todoText=todo.text.toLocaleLowerCase();
      return todoText.includes(searchValue.toLocaleLowerCase())
      
    })
  console.log(searchedTodos)

  return (
    <>
    <div className='contain-central'>
      <ToDoCounter total={totalTodos} completed={completedTodos} />
      <ToDoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}/>

      <ToDoList>
      {searchedTodos.map(todo=>( 
        <ToDoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          setTodos={setTodos}
          />))}
        </ToDoList> 

      <CreateToDoButton />
      </div>
      </>
  );
}




export default App;
