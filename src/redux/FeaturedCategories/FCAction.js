import axios from "axios";
import { FEATURED_CATEGORIES } from "./FCType";

export const GetFC = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://omar-tech-store.herokuapp.com/api/products/featured-categories"
      );
      dispatch({
        type: FEATURED_CATEGORIES,
        payload: response.data,
      });
    } catch (error) {
      console.log("error in get feature categores => " + error);
    }
  };
};

