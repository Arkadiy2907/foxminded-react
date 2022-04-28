import PropTypes from "prop-types"
import { useDispatch } from "react-redux";
import { removeTodoAction, toggleTodo } from "../../action/Action"

const TodoLi = ({ todo, index }) => {

    const dispatch = useDispatch()
    const removeTodo = todo => dispatch(removeTodoAction(todo))
    
    return (
        <li>
            <span className={todo.completed ? 'done' : ''}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo(index))}
                />
                &nbsp;
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}               
            </span>
            <button className='rm' onClick={() => removeTodo(todo)}>
                &times;
            </button>
        </li>
    )
}

TodoLi.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number    
}

export default TodoLi