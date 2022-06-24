import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./user/userReducers";
import thunk from "redux-thunk";
import guestReducer from "./guest/guestReducer";

const reducer = combineReducers({
  userReducer,
  guestReducer,
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

// export const trendingStore = createStore(
//   guestReducer
// )
export default store;
