import PropTypes from "prop-types"
import React from "react";

const TodoLi = ({ todo, id, onChange, onChangeTitle, onRemoveTodo }) => {
    let valueTodo
    const showInput = (event) => {
        return valueTodo = event.target.value
    }

    return (
        <li>
            <span className={todo.completed ? 'done' : ''}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                />
                &nbsp;
                <input
                    onInput={showInput}
                    type="text"
                    value={todo.title}
                    onChange={() => onChangeTitle(id, valueTodo)}
                />
            </span>
            <button className='rm' onClick={() => onRemoveTodo(id)}>
                &times;
            </button>
        </li>
    )
}

TodoLi.propTypes = {
    todo: PropTypes.object,
    id: PropTypes.number,
    onChange: PropTypes.func,
    onChangeTitle: PropTypes.func,
    onRemoveTodo: PropTypes.func,
}
export default TodoLi