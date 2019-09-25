import * as types from "../actions/actionTypes";
import initialState from "./initialState"

export default function userReducer(state = initialState.currentUser, action) {
  switch(action.type) {
    case types.SIGNUP_SUCCESS:
      return action.payload
    case types.LOGIN_SUCCESS:
      return action.payload
    case types.LOGOUT_SUCCESS:
      return {}
    case types.ADD_SUPPORT_ITEM:
      let user = {...state, support_items: [...state.support_items, action.payload]}
      return user
    case types.EDIT_SUPPORT_ITEM:
      let newItems = state.support_items.filter(item => item.id !== action.payload.id)
      let userEdit = {...state, support_items: [...newItems, action.payload]}
      return userEdit
    default:
      return state;
  }
}