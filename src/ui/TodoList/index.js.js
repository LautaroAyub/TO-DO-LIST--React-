import "./TodoList.css"
import React from 'react';
function ToDoList({ error,
    loading,
    totalTodos,
    searchedTodos,
    onError,
    onLoading,
    onEmptyTodo,
    onEmptySearch,
    renderTodos }) {
    return (
        <section>

            {error && onError()}

            {loading && onLoading()}

            {(!loading && totalTodos === 0) && onEmptyTodo()}

            {((!loading && !error)  && totalTodos > 0 && searchedTodos?.length === 0)&& onEmptySearch()}

            <ul className="list-contain">

                <li className="list-contain-order">
                    {!loading &&
                     renderTodos()
                    }
                </li>
            </ul>
        </section>
    )
}
export { ToDoList }