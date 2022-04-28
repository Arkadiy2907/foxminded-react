import { addAlbumAction, addPostAction, addTodoAction } from "./store/action/Action"

export const getAlbum = numId => {
	return dispatch => {
		fetch(`https://jsonplaceholder.typicode.com/users/${numId}/albums?_start=0&_limit=5`)
			.then(response => response.json())
			.then(json => dispatch(addAlbumAction(json)))
	}
}

export const getPost = numId => {
	return dispatch => {
		fetch(`https://jsonplaceholder.typicode.com/users/${numId}/posts?_start=0&_limit=5`)
			.then(response => response.json())
			.then(json => dispatch(addPostAction(json)))
	}
}

export const getTodo = numId => {
	return dispatch => {
		fetch(`https://jsonplaceholder.typicode.com/users/${numId}/todos?_start=0&_limit=5`)
			.then(response => response.json())
			.then(json => dispatch(addTodoAction(json)))
	}
}