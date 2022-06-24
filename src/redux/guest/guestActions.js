import axios from "axios"
import { TRENDING } from "./guestTypes";

export const  TrendingAction = ()=>{
    return async(dispatch)=>{
       try{
        const response= await axios.get('https://omar-tech-store.herokuapp.com/api/products/trending-products');
        console.log("response is: " ,response);
        dispatch({type:TRENDING, payload: response.data}) 

        }catch(error){
            console.log("Error is: ", error);
        }
        // return{
        //     type:TRENDING,
        //     payload: response.data,
        // }
    }  
}