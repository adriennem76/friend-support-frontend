import {combineReducers} from 'redux'
import users from "./userReducer"
import currentUser from "./currentUserReducer"

const rootReducer = combineReducers({
  users,
  currentUser
})

export default rootReducer