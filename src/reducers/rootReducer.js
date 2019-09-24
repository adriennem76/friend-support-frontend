import {combineReducers} from 'redux'
import users from "./userReducer"
import currentUser from "./currentUserReducer"
import loggedIn from "./loggedInReducer"

const rootReducer = combineReducers({
  users,
  currentUser,
  loggedIn
})

export default rootReducer