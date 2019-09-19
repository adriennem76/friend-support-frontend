import * as types from "../actions/actionTypes";

export function getData() {
  return function(dispatch) {
    return fetch("http://localhost:3000/users")
      .then(resp => resp.json())
      .then(data => {
        dispatch({type: "DATA_LOADED", payload: data})
      })
  }
}