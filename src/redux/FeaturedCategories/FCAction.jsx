import { axios } from "axios";
import { FEATURED_CATEGORIES } from "./FCType";

export const GetFC = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://omar-tech-store.herokuapp.com/api/products/featured-categories"
      );
      dispatch({
        type: FEATURED_CATEGORIES,
        payload: {
          data: response.data,
          isSuccuss: true,
          isLoading: false,
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
