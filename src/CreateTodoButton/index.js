import React from "react"
import "./TodoButton.css"
import { TodoContext } from "../TodoContext"
function CreateToDoButton (){
    const {openModal,setOpenModal}=React.useContext(TodoContext)
    return(
        <div>
       
        <button className="buttonToAdd" 
        onClick={(event)=>{

            openModal? setOpenModal(false) : setOpenModal(true);
           
           
            // console.log(event)
            // ()=>{setOpenModal(state=>!state)}
            // ()=>{setOpenModal(!openModal)}



        }
         }>+</button>
        </div>
    )
}
export {CreateToDoButton}