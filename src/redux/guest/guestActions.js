import axios from "axios";
import { GET_OFFER_PRODUCTS, TRENDING } from "./guestTypes";
import { GET_FEATURED_PRODUCTS } from "./guestTypes";

export const offerAction = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://omar-tech-store.herokuapp.com/api/products/offers"
      );
      dispatch({ type: GET_OFFER_PRODUCTS, payload: response.data });
    } catch (error) {
      console.log("Error is: ", error);
    }
  };
};

export const TrendingAction = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://omar-tech-store.herokuapp.com/api/products/trending-products"
      );
      dispatch({ type: TRENDING, payload: response.data });
    } catch (error) {
      console.log("Error is: ", error);
    }
  };
};

export const getFeaturedProductsAction = () => {
  return async (dispatch) => {
    try {
      const responseData = await axios.get(
        "https://omar-tech-store.herokuapp.com/api/products/featured-products"
      );
      dispatch({
        type: GET_FEATURED_PRODUCTS,
        payload: responseData.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
