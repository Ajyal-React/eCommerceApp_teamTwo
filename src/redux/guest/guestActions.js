import axios from "axios"
import { GET_FEATURED_PRODUCTS } from "./guestTypes";
import { TRENDING } from "./guestTypes";

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

export const  TrendingAction = ()=>{
    return async(dispatch)=>{
       try{
        const response= await axios.get('https://omar-tech-store.herokuapp.com/api/products/trending-products');
        dispatch({type:TRENDING, payload: response.data}) 

        }catch(error){
            console.log("Error is: ", error);
        }
    }  
}