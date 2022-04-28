import { ADD_TODO } from "../action/ActionTypes"

const defaultState = {
    todos: []
}

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: action.payload
            }
        default:
            return state
    }
}