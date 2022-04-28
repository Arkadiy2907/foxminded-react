import TodoLi from "./TodoLi"
import "./todo.scss"
import PropTypes from "prop-types"

const TodoList = (props) => {
    return (
        <ul className="todo_ul">
            {!!props.todo && props.todo.map(todo => {
                return (
                    <TodoLi
                        todo={todo}
                        key={todo.id}
                        onChange={props.onToggle}
                        id={todo.id}
                        onChangeTitle={props.onChangeTitle}
                        onRemoveTodo={props.onRemoveTodo}
                    />
                )
            }
            )}
        </ul>
    )
}

TodoList.propTypes = {
    todo: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.number,
    onToggle: PropTypes.func,
    onChangeTitle: PropTypes.func,
    onRemoveTodo: PropTypes.func,
}

export default TodoList