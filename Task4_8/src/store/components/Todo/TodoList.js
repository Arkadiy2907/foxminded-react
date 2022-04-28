import React from "react";
import TodoItem from "./TodoItem"
import { useSelector } from "react-redux";
import "./todo.scss"

const TodoList = () => {
	const todo = useSelector(state => state.todo.todo)

	return (
		<div className="wrap_todoList">
			<h3>ToDo list</h3>
			<ul className="todoList">
				{!!todo && todo.map((todo, index) => {
					return (
						<TodoItem
							todo={todo}
							index={index}
							key={`${todo.id}${todo.userId}`}
						/>
					)
				}
				)}
			</ul>
		</div>
	)
}

export default TodoList