import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../action/ActionTypes"

const defaultState = {
    todo: []

}

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todo: [...state.todo, ...action.payload ] }
        case REMOVE_TODO:
            return { ...state, todo: state.todo.filter(todo => todo !== action.payload) }
        case TOGGLE_TODO:
            return {
                ...state,
                todo: state.todo.map((todo, index) => (index === action.index) ? { ...todo, completed: !todo.completed } : todo
                )
            }

        default:
            return state
    }
}