import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./user/userReducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
  userReducer,
});

const userDetailsLocalStorage = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
  userInfo: {
    user: userDetailsLocalStorage,
  },
};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;
