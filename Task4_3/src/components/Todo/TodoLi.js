import PropTypes from "prop-types"

const TodoLi = ({ todo, index, onChange }) => {
    return (
        <li>
            <span className={todo.completed ? 'done' : ''}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                />
                &nbsp;
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
        </li>
    )
}

TodoLi.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
    onChange: PropTypes.func
}

export default TodoLi