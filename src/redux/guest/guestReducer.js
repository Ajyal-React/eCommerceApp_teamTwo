import { GET_OFFER_PRODUCTS, TRENDING, GET_FEATURED_CATEGORIES} from "./guestTypes";
import { GET_FEATURED_PRODUCTS } from "./guestTypes";

export const guestReducer = (
  state = {
    featuredProducts: [],
    trending: [],
    categories:[],
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
      case GET_FEATURED_CATEGORIES:
        return state = {...state, categories: action.payload };
    default:
      return state;
  }
};
