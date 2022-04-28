import React from 'react';
import PostList from "../post/postList";
import AlbumList from "../album/albumList";
import TodoList from "../Todo/TodoList";
import { useSelector } from "react-redux";
import Home from '../Home/Home';
import "./userId.scss"

const UserId = () => {
	const todo = useSelector(state => state.todo.todo)	

	return !!todo.length ? (
		<div className="wrap_allList">
			<PostList />
			<div className="wrap_AlbumTodo">
				<AlbumList />
				<TodoList />
			</div>
		</div>
	) : <Home />
}

export default UserId