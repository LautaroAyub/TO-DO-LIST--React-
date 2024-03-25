import { TodoIcon } from './';
import "../index.css"      
function DeleteIcon({onDelete}){
    const root= document.querySelector(":root")
    const gray = getComputedStyle(root).getPropertyValue('--gray');
    return  (<TodoIcon 
        type="delete"
        color={gray}
        className={`icon`}
        onClick={onDelete}
    />)
}    
export {DeleteIcon}