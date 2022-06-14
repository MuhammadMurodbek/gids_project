import * as rootReducer from "./export"
import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import createDebounce from 'redux-debounced'
import thunk from "redux-thunk"

const middleware = [thunk, createDebounce()]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const allReducers = combineReducers({...rootReducer})

const store = createStore(allReducers, {}, composeEnhancers(applyMiddleware(...middleware)))
export default store