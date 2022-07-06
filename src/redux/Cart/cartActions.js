import axios from "axios";
import { ADD_TO_CART } from "./cartType";

export const addToCartAction = (values, callBack) => {
  return async (dispatch, getStore) => {
    const store = getStore();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store?.userReducer?.user?.token}`,
      },
    };

    try {
      const response = await axios.put(
        "https://omar-tech-store.herokuapp.com/api/users/profile/cart",
        values,
        config
      );
      localStorage.setItem("cart", JSON.stringify(response.data.cart));
      dispatch({
        type: ADD_TO_CART,
        payload: response.data,
      });
      callBack?.()
    } catch (error) {
      console.log("error", error);
    }
  };
};
