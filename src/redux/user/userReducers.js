import { USER_LOGIN, USER_SIGNUP, USER_PROFILE } from "./userTypes";

export const userReducer = (state = "", action) => {
  switch (action.type) {
    case USER_LOGIN: 
      return action.payload;
    case USER_SIGNUP: 
      return action.payload;
    case USER_PROFILE: 
      return action.payload; 
    default:
      return state;
  }
};
