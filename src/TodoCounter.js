import "./TodoCounter.css"
function ToDoCounter({total , completed}){
    return(
      <h1 className="counter-title">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
    )
}

export {ToDoCounter} //exports nombrados para evitar errores con default
