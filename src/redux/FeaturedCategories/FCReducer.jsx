import { FEATURED_CATEGORIES } from "./FCType";

export const FCReducer = (state = { FCProducts: {} }, action) => {
  switch (action.type) {
    case FEATURED_CATEGORIES:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
