import TodoList from "./TodoList"
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../../../api";

const ToDoComponent = () => {
    const todos = useSelector(state => state.todos)
    const [todo, setTodo] = React.useState(todos)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getTodo())
    }, [dispatch]);

    React.useEffect(() => {
        todos.splice(5, todos.length)
        setTodo(todos)
    }, [todos]);    

    const newTodo = () => {
        todos.splice(0, todos.length)
        dispatch(getTodo())
    }
    
    const toggleTodo = (id) => {
        const result = !!todo && todo.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodo(result)
    }

    const changeTitle = (id, value) => {
        const result = !!todo && todo.map(todo => {
            if (todo.id === id) {
                todo.title = value
            }
            return todo
        })
        setTodo(result)
    }

    const removeTodo = (id) => {
        const result = !!todo && todo.filter(todo => {
            return todo.id !== id
        })        
        setTodo(result)
    }
    
    return (
        <>
            <h2>TodoList</h2>
            <button onClick={() => newTodo()}>get new tasks</button>
            <TodoList
                todo={todo}
                onToggle={toggleTodo}
                onChangeTitle={changeTitle}
                onRemoveTodo={removeTodo} />
        </>
    )
}

export default ToDoComponent