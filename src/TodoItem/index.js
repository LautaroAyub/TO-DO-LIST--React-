
import { CompleteIcon } from '../TodoIcon/CompleteIcon.js';
import { DeleteIcon } from '../TodoIcon/DeleteIcon.js';
import "./TodoItem.css"

function ToDoItem(props){

    return(
      <li className='todoItem'>

       <DeleteIcon onDelete={props.onDelete} />

        <p className={`todoItem-p ${props.completed && "todoItem-p--complete"}`}>{props.text}</p>
  
        <CompleteIcon 
        completed={props.completed}
        onComplete={props.onComplete}
        />


      </li>
    );
  }
  export {ToDoItem}