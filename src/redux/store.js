import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { userReducer } from "./user/userReducers";
import { guestReducer } from "./guest/guestReducer";
import { ProductReducer } from "./product/ProductReducer";
import { FCReducer } from "./FeaturedCategories/FCReducer";
import { cartReducer } from "./Cart/cartReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  userReducer,
  guestReducer,
  ProductReducer,
  FCReducer,
  cartReducer,
});

const userDetailsLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || {};

const initialState = {
  userReducer: {
    user: userDetailsLocalStorage,
  },
  cartReducer:{
    cart:cartLocalStorage
  }
};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
