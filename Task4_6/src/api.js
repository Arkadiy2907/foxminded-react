import { postListAction, postFormAction } from "./store/action/Action"

export const getPost = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(postListAction(json)))
    }
}

export const postForm = (data) => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data)})
            .then(response => response.json())
            .then(json => {
                dispatch(postFormAction(json))
            })
    }
}