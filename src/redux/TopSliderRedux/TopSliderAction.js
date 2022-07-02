import { FEATURED_CATEGORIES_SLIDER } from "./TopSliderType";
import axios from "axios";

export const GetSliderFC = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://omar-tech-store.herokuapp.com/api/products/featured-categories"
      );
      dispatch({
        type: FEATURED_CATEGORIES_SLIDER,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
