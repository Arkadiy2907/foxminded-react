import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from 'redux-thunk'
import { albumReducer } from "./reducer/albumReducer"
import { postReducer } from "./reducer/postReduser"
import { todoReducer } from "./reducer/todoReducer"

const rootReducer = combineReducers({
	album: albumReducer,
	post: postReducer,
	todo: todoReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))