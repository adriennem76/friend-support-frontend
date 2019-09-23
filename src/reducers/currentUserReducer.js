import * as types from "../actions/actionTypes";
import initialState from "./initialState"

export default function userReducer(state = initialState.currentUser, action) {
  switch(action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.payload[0]
    default:
      return state;
  }
}