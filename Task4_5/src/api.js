import { addTodoAction } from "./store/action/Action"

export const getTodo = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5')
            .then(response => response.json())
            .then(json => dispatch(addTodoAction(json)))
    }
}
