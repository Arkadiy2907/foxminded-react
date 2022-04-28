import { ADD_POST, RESET } from "../action/ActionTypes"

const defaultState = {
	post: []
}

export const postReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_POST:
			return { ...state, post: [...state.post, ...action.payload] }
		case RESET:
			return defaultState
		default:
			return state
	}
}