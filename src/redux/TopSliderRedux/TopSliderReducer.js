import FEATURED_CATEGORIES_SLIDER from "./TopSliderAction";

export const TopSliderReducer = (state = { FCSliderProducts: {} }, action) => {
  switch (action.type) {
    case FEATURED_CATEGORIES_SLIDER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
