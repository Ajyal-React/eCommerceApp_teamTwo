import { USER_LOGIN,START_LOGIN, USER_SIGNUP,START_SIGNUP, USER_PROFILE } from "./userTypes";

const initialValues = {
  data: [],
  isLoading: false,
};

export const userReducer = (state = initialValues, action) => {
  switch (action.type) {
    case START_LOGIN: 
      return {...state,
        isLoading:true};

    case USER_LOGIN: 
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
     
    case START_SIGNUP: 
      return {...state,
        isLoading:true};

    case USER_SIGNUP: 
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };

    case USER_PROFILE: 
      return action.payload; 

    default:
      return state;
  }
};
