import { useNavigate } from "react-router-dom";
import "./TodoForm.css"
import React from "react"
function TodoForm(props) {
    const navigate = useNavigate()
    const [newTodoValue, setNewTodoValue] = React.useState(props.defaultToDoText || "");

    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newTodoValue)
        navigate("/")
    }

    const onCancel = (event) => {
        navigate("/")
    }
    const onchange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return (
        <form
            onSubmit={onSubmit}
            className='form-container'>
            <label className="form-tittle">{props.label}</label>
            <textarea
                value={newTodoValue}
                onChange={onchange}
                placeholder="Cortar cebolla para el almuerzo"
                 className="form-input" />

            <div className="form-button-container">
                <button
                    type="button"
                    onClick={onCancel}
                    className="form-button form-button__cancel">
                    Cancelar
                </button>

                <button 
                type="submit"
                disabled={props.loading ||newTodoValue.length ===0}
                    className="form-button form-button__add">
                    {props.submitText}
                </button>
            </div>
        </form>
    )
}
export { TodoForm }