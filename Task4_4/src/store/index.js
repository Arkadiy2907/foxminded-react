import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from 'redux-thunk'
import { userReducer } from "./reducer/userReducer"
import { postReducer } from "./reducer/postReduser"
import { todoReducer } from "./reducer/todoReducer"

const rootReducer = combineReducers({
    post: postReducer,
    todo: todoReducer,
    users: userReducer
})

 export const store = createStore(rootReducer, applyMiddleware(thunk))