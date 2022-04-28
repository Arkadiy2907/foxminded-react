import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import  countReducer  from "./reducer/countReducer"

 export const store = createStore(countReducer, applyMiddleware(thunk))

