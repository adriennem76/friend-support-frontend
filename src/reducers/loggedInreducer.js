import * as types from "../actions/actionTypes";
import initialState from "./initialState"

export default function loggedInReducer(state = initialState.loggedIn, action) {
  switch(action.type) {
    case types.SIGNUP_SUCCESS:
      return true
    case types.LOGIN_SUCCESS:
      return true
    default:
      return state;
  }
}