import { ADD_USER, REMOVE_USER } from "../action/ActionTypes"

const defaultState = {
    users: []
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, users: [...state.users, ...action.payload] }        
        case REMOVE_USER:
            return { ...state, users: state.users.filter(users => users !== action.payload) }        
        default:
            return state
    }
}