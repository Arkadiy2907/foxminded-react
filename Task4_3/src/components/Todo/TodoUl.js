import TodoLi from "./TodoLi"
import "./todo.scss"
import PropTypes  from "prop-types"

const TodoUl = (props) => {
    return (
        <ul className="todo_ul">
            { !!props.todos && props.todos.map((todo, index) => {
                return (
                    <TodoLi                        
                        todo={ todo }
                        index={ index }
                        key={ todo.id }
                        onChange={ props.onToggle }
                    />
                )
            }
            )}
        </ul>
    )
}

TodoUl.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    onToggle: PropTypes.func
}

export default TodoUl