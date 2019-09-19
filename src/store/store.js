import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import {displayUsersMiddleware} from "../middleware/users"
import thunk from "redux-thunk"

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) 
  );

export default store;