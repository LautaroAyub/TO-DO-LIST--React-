function CreateToDoButton (){
    return(
        <div>
       
        <button className="buttonToAdd" 
        onClick={(event)=>{
            console.log("hiciste click")
            console.log(event)
            console.log(event.target)
        }
    }>+</button>
        </div>
    )
}
export {CreateToDoButton}