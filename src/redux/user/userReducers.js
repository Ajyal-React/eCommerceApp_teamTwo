import { USER_LOGIN, USER_SIGNUP } from "./userTypes";

export const userReducer = (state = "", action) => {
  switch (action.type) {
    case USER_LOGIN: 
      return action.payload;
    case USER_SIGNUP: 
      return action.payload;
    default:
      return state;
  }
};
