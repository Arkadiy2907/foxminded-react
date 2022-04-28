import { REMOVE_POST, ADD_POST } from "../action/ActionTypes"

const defaultState = {
    post: []
}

export const postReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:
            return { ...state, post: [...state.post, ...action.payload] }        
        case REMOVE_POST:
            return { ...state, post: state.post.filter(post => post !== action.payload) }        
        default:
            return state
    }
}