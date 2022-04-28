import { FETCH_POST_LIST, ADD_POST_FORM, ADD_POST } from "../action/ActionTypes"

const defaultState = {
    posts: []
}

export const postReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_POST_LIST:
            return {
                posts: action.payload
            }
        case ADD_POST:
            return {
                posts: [...state.posts, action.payload]
            }
        case ADD_POST_FORM:
            return {
                posts: [...state.posts]
            }
        default:
            return state
    }
}