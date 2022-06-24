import { USER_LOGIN } from "./userTypes";

export const userReducer = (state = "", action) => {
  switch (action.type) {
    case USER_LOGIN: 
      return action.payload;
    default:
      return state;
  }
};
