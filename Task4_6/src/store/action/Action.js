import { FETCH_POST_LIST, ADD_POST_FORM, ADD_POST } from "./ActionTypes"

export const postListAction = (payload) => ({ type: FETCH_POST_LIST, payload })
export const postFormAction = (payload) => ({ type: ADD_POST_FORM, payload })
export const addFormAction = (payload) => ({ type: ADD_POST, payload })