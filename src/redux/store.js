import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./user/userReducers";
import { guestReducer } from "./guest/guestReducer";
import thunk from "redux-thunk";


const reducer = combineReducers({
  userReducer,
  guestReducer,
});

const userDetailsLocalStorage = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
  userReducer: {
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
