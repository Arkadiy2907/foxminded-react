import { ADD_POST, ADD_ALBUM, ADD_TODO, TOGGLE_TODO, RESET } from "./ActionTypes"

export const addAlbumAction = payload => ({ type: ADD_ALBUM, payload })
export const addPostAction = payload => ({ type: ADD_POST, payload })
export const addTodoAction = payload => ({ type: ADD_TODO, payload })
export const toggleTodo = index => ({ type: TOGGLE_TODO, index })
export const resetAll = () => ({ type: RESET })