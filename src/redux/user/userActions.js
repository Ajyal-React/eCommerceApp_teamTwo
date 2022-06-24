import { USER_LOGIN, USER_SIGNUP } from "./userTypes";
import axios from "axios";

export const LoginAction = (values) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://omar-tech-store.herokuapp.com/api/users/login",
        values
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({
        type: USER_LOGIN,
        payload: response.data,
      });
    } catch (error) {
      console.log("error",error);
    }
  };
};

export const SignUpAction = (values) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://omar-tech-store.herokuapp.com/api/users/signup",
        values
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({
        type: USER_SIGNUP,
        payload: response.data,
      });
    } catch (error) {
      console.log("error",error);
    }
  };
};
