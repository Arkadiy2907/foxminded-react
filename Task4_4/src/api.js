import { addUserAction, addPostAction, addTodoAction } from "./store/action/Action"

export const getUsers = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addUserAction(json)))
    }
}

export const getPost = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(addPostAction(json)))
    }
}

export const getTodo = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => dispatch(addTodoAction(json)))   
    }
}