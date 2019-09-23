import * as types from "../actions/actionTypes";

export function getData() {
  return function(dispatch) {
    return fetch("http://localhost:3000/users")
      .then(resp => resp.json())
      .then(data => {
        dispatch({type: types.LOAD_USERS_SUCCESS, payload: data})
      })
  }
}

export function addSupportItem(payload) {
  return {type: types.ADD_SUPPORT_ITEM, payload}
}

// export function getUserData(id) {
//   return function(dispatch) {
//     return fetch(`http://localhost:3000/users/${id}`)
//     .then(resp => resp.json())
//     .then(data => {
//       dispatch({type: types.LOADED_USER, payload: data})
//     })
//   }
// }