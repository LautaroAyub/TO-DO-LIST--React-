      
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
// import { icon } from '@fortawesome/fontawesome-svg-core';
// icon={faCircleXmark}
import { TodoIcon } from './';
      
function DeleteIcon({onDelete}){
    return  (<TodoIcon 
        type="delete"
        color="gray" 
        className={`icon icon-delete  `}
        onClick={onDelete}
        
    

    />)
}    
export {DeleteIcon}