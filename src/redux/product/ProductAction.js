import axios from 'axios';
import { PRODUCT } from './ProductType';
import { START_FETCH_PRODUCT } from './ProductType';
export  const FetchProduct=(_id)=>{
    return async (dispatch) => {
      dispatch({
        type: START_FETCH_PRODUCT,
        isLoading:true,
      });
        try {
          const response = await axios.get(`https://omar-tech-store.herokuapp.com/api/products/${_id}`);
          dispatch({
            type: PRODUCT,
            payload: response.data,
            isLoading:false,
          });
        } catch (error) {
          console.log("error",error);
        }
      };
}; 