
import axios from 'axios';
import { PRODUCT } from './ProdcutType';
export  const FetchProduct=(_id)=>{
    return async (dispatch) => {
        try {
          const response = await axios.get(`https://omar-tech-store.herokuapp.com/api/products/${_id}`);
          dispatch({
            type: PRODUCT,
            payload: response.data,
          });
        } catch (error) {
          console.log("error",error);
        }
      };
};