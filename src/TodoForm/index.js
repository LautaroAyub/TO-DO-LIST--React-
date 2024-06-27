import "./TodoForm.css"
import React from "react"
function TodoForm({addTodo, setOpenModal}) {


    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
       
    }

    const onCancel = (event) => {
        console.log(event)
        event.preventDefault();
        setOpenModal(false)
    }
    const onchange = (event) => {
        setNewTodoValue(event.target.value)}
    return (
        <form
            onSubmit={onSubmit}
            className='form-container'>
            <label className="form-tittle">Escribe tu nuevo TODO</label>
            <textarea
                // value={newTodoValue}
                onChange={onchange}
                placeholder="Cortar cebolla para el almuerzo" className="form-input" />

            <div className="form-button-container">
                <button
                    type="button"
                    onClick={onCancel}
                    className="form-button form-button__cancel">
                    Cancelar
                </button>

                <button type="submit"
                    className="form-button form-button__add">
                    Añadir
                </button>
            </div>
        </form>
    )
}
export { TodoForm }