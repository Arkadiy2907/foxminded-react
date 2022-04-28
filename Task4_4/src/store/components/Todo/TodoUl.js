import TodoLi from "./TodoLi"
import "./todo.scss"
import PropTypes  from "prop-types"

const TodoUl = (props) => {  
    return (
        <ul className="todo_ul">
            { !!props.todo && props.todo.map((todo, index) => {
                return (
                    <TodoLi                        
                        todo={ todo }
                        index={ index } 
                        key={ index }
                    />
                )
            }
            )}
        </ul>
    )
}

TodoUl.propTypes = {
    todo: PropTypes.arrayOf(PropTypes.object)
}

export default TodoUl