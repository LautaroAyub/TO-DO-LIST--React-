import React from "react"
import "./TodoButton.css"
function CreateToDoButton ({openModal,setOpenModal}){
    return(
        <div>
       
        <button className="buttonToAdd" 
        onClick={(event)=>{
            openModal? setOpenModal(false) : setOpenModal(true);
        }
         }>+</button>
        </div>
    )
}
export {CreateToDoButton}