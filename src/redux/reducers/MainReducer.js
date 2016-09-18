//import { combineReducers } from "redux-immutable"
import { combineReducers } from "redux"

import tableContent from "./TableContentReducer"
import tableDisplay from "./TableDisplayReducer"
//import tablePageDisplay from ""
//import CommentReducer from ""

//import Reducer from ""

export default combineReducers({
  tableContent,
  tableDisplay
})