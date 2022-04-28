 import { REMOVE_USER, ADD_USER, ADD_POST, REMOVE_POST, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./ActionTypes"

export const addUserAction = (payload) => ({ type: ADD_USER, payload })
export const removeUserAction = (payload) => ({ type: REMOVE_USER, payload })

export const addPostAction = (payload) => ({ type: ADD_POST, payload })
export const removePostAction = (payload) => ({ type: REMOVE_POST, payload })

export const addTodoAction = (payload) => ({ type: ADD_TODO, payload })
export const removeTodoAction = (payload) => ({ type: REMOVE_TODO, payload })
export const toggleTodo = (index) => ({ type: TOGGLE_TODO, index })
