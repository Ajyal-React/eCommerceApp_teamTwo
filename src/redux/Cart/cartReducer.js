import { ADD_TO_CART } from "./cartType";

export const cartReducer = (state = {
  cart:{
    items:[]
  }
}, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return action.payload;
    }
    default:
      return state;
  }
};
