import { ADD_TO_CART } from "./cartType";


export const cartReducer = (
  state = {
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return (state = { ...state, cart: [...state.cart, action.payload] });
    default:
      return state;
  }
};
