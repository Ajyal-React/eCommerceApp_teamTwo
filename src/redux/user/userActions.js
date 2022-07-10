import {
  USER_LOGIN,
  START_LOGIN,
  USER_PROFILE,
  USER_SIGNUP,
  START_SIGNUP,
} from "./userTypes";
import axios from "axios";

export const LoginAction = (values, callBack) => {
  return async (dispatch) => {
    dispatch({
      type: START_LOGIN,
      isLoading: true,
    });
    try {
      const response = await axios.post(
        "https://omar-tech-store.herokuapp.com/api/users/login",
        values
      );
      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({
        type: USER_LOGIN,
        payload: response.data,
        isLoading: false,
      });

      callBack?.();

    } catch (error) {
      console.log("error", error);
    }
  };
};

export const SignUpAction = (values, callBack) => {
  return async (dispatch) => {
    dispatch({
      type: START_SIGNUP,
      isLoading: true,
    });
    try {
      const response = await axios.post(
        "https://omar-tech-store.herokuapp.com/api/users/signup",
        values
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({
        type: USER_SIGNUP,
        payload: response.data,
        isLoading: false,
      });
      callBack?.();
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const GetProfile = () => {
  return async (dispatch, getStore) => {
    const store = getStore();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store?.userReducer?.user?.token}`,
      },
    };

    try {
      const response = await axios.get(
        "https://omar-tech-store.herokuapp.com/api/users/profile",
        config
      );
      console.log(response);
      dispatch({
        type: USER_PROFILE,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
