import { GET_FEATURED_PRODUCTS } from "./guestTypes";

export const guestReducer = (state = "", action) => {
  switch (action.type) {
    case GET_FEATURED_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
