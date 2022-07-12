import { PRODUCT } from "./ProductType";
import { START_FETCH_PRODUCT } from "./ProductType";
const initialValues = {
  product: {},
  isLoading: false,
};
export const ProductReducer = (state = initialValues,action) => {
  switch (action.type) {
    case START_FETCH_PRODUCT: 
      return {...state, isLoading:true};
    case PRODUCT:
      return { ...state, product: action.payload, isLoading: false };
    default:
      return state;
  }
};
