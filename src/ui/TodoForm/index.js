import "./TodoForm.css"
import React from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function TodoForm(props) {
    const history = useHistory()
    const [newTodoValue, setNewTodoValue] = React.useState(props.defaultToDoText || "");

    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newTodoValue)
        history.push("/")
    }

    const onCancel = (event) => {
        history.push("/")
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