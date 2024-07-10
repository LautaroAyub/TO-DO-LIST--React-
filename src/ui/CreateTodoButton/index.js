import React from "react"
import "./TodoButton.css"
function CreateToDoButton (props){
    return(
        <div>
        <button 
        className="buttonToAdd" 
        onClick={props.onClick}
        >+</button>
        </div>
    )
}
export {CreateToDoButton}