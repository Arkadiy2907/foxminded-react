import TodoUl from "./TodoUl"
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../../../api";

const TodoList = () => {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo.todo)   
    
     todo.splice(5, todo.length)  

    return (
        <>
            <h2>TodoList</h2>
            <button onClick={() => dispatch(getTodo())}>get new users</button>
            <TodoUl todo={ todo } />
        </>
    )
}

export default TodoList