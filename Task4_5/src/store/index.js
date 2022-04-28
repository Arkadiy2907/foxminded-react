import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { todoReducer } from "./reducer/todoReducer"

export const store = createStore(todoReducer, applyMiddleware(thunk))
