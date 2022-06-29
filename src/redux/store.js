import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { userReducer } from "./user/userReducers";
import { guestReducer } from "./guest/guestReducer";
import { ProductReducer } from "./product/ProductReducer";
import thunk from "redux-thunk";


const reducer = combineReducers({
  userReducer,
  guestReducer,
  ProductReducer,
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
  compose(applyMiddleware(...middleWare),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
