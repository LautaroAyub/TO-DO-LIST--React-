
import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon.js';
import { DeleteIcon } from '../TodoIcon/DeleteIcon.js';
import { EditIcon } from '../TodoIcon/EditIcon.js';
import "./TodoItem.css"

function ToDoItem(props){
    return(
      
      <li className='todoItem'>

       <DeleteIcon onDelete={props.onDelete} />
       <div className='todo-text-container'>
        <p className={`todoItem-p ${props.completed && "todoItem-p--complete"}`}>{props.text}</p>
        </div>
        <CompleteIcon 
        completed={props.completed}
        onComplete={props.onComplete}
        />
      <EditIcon
       onEdit={props.onEdit}/>
      </li> 
    );

  }
  export {ToDoItem}