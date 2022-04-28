import TodoUl from "./TodoUl"
import React from "react"
import { todosArr } from "../AllFakeData/fakeData"

const TodoList = () => {
    const [todos, setTodos] = React.useState(todosArr)
    const toggleTodo = (id) => {
        setTodos(
            !!todos && todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }
    return (
        <>
            <h2>TodoList</h2>
            <TodoUl todos={ todos } onToggle={ toggleTodo } />
        </>
    )
}

export default TodoList