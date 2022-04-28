import { ADD, SUBTRACT, RESET } from "../action/ActionTypes"

const defaultState = {
    count: 0
}

const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, count: state.count + action.payload }
        case SUBTRACT:
            return { ...state, count: state.count - action.payload }
        case RESET:
            return { ...state, count: state.count - state.count }
        default:
            return state
    }
}

 export default countReducer