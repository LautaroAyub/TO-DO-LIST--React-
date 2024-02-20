import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
function ToDoItem(props){
  const rutaImagen = '';
    return(
      <li className='todoItem'>
       <FontAwesomeIcon className={`icon icon-delete  `} icon={faCircleXmark} />
        <p className={`todoItem-p ${props.completed && "todoItem-p--complete"}`}>{props.text}</p>
        <FontAwesomeIcon onClick={(event)=>props.setTodos(event.target.completed=true)} className={`icon icon-check  ${props.completed && "icon-check--active"}`} icon={faCircleCheck} />
      </li>
    );
  }
  export {ToDoItem}