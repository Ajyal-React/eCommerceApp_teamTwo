import axios from "axios";
import { ADD_TO_CART } from "./cartType";

export const addToCartAction = (values) => {
  return async (dispatch, getStore) => {
    const store = getStore();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store?.userReducer?.user?.token}`,
      },
    };
    console.log(store?.userReducer?.user?.token)

    try {
      const response = await axios.put(
        "https://omar-tech-store.herokuapp.com/api/users/profile/cart",
        config,
        values
      );
      console.log(response);
      dispatch({
        type: ADD_TO_CART,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
