import "./TodoList.css"
function ToDoList({children}){
    return(
        <ul className="list-contain">
            <li className="list-contain-order">
                {children}
            </li>
        </ul>
    )
}
export {ToDoList}