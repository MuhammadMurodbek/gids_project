import * as rootReducer from "./export"
import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from "redux-thunk"

const allReducers = combineReducers({
  // reducers,
  ...rootReducer
})
const store = createStore(allReducers, applyMiddleware(thunk))
export default store