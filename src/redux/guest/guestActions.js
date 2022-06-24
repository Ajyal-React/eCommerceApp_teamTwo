import axios from "axios";
import { GET_FEATURED_PRODUCTS } from "./guestTypes";

export const getFeaturedProductsAction = () => {
  return async(dispatch)=>{
    try {
      const responseData = await axios.get('https://omar-tech-store.herokuapp.com/api/products/featured-products')
      dispatch({
        type: GET_FEATURED_PRODUCTS,
        payload: responseData.data,
      })
    } catch (error) {
      console.log('error', error);
    }
  }
};
