import axios from "axios";

export const createOrder = (values) => {
  return async (dispatch, getStore) => {
    const store = getStore();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store?.userReducer?.user?.token}`,
      },
    };
    try {
      const response = await axios.post(
        "https://omar-tech-store.herokuapp.com/api/orders",
        values,
        config
      );

      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };
};
