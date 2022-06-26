import { GET_OFFER_PRODUCTS, TRENDING } from "./guestTypes";
import { GET_FEATURED_PRODUCTS } from "./guestTypes";

export const guestReducer = (
  state = {
    featuredProducts: [],
    trending: [],
    offer: {},
  },
  action
) => {
  switch (action.type) {
    case GET_OFFER_PRODUCTS:
      return {...state, offer: action.payload };
    case GET_FEATURED_PRODUCTS:
      return {...state, featuredProducts: action.payload };
    case TRENDING:
      return {...state, trending: action.payload };
    default:
      return state;
  }
};
