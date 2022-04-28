import { ADD_ALBUM, RESET } from "../action/ActionTypes"

const defaultState = {
	album: []
}

export const albumReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_ALBUM:
			return { ...state, album: [...state.album, ...action.payload] }
		case RESET:
			return defaultState
		default:
			return state
	}
}