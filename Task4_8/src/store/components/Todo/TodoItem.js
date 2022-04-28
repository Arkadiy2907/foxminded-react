import PropTypes from "prop-types"
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../action/Action"
import React from "react";

const TodoItem = ({ todo, index }) => {
	const dispatch = useDispatch()

	const onToggle = index => dispatch(toggleTodo(index))

	return (
		<li className="todoItem">
			<label className="box">
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={() => onToggle(index)}
				/>
				<span className="checkmark" />
				<span className='text'>
					{todo.title}
				</span>
			</label>
		</li>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object,
	index: PropTypes.number
}

export default TodoItem