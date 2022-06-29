import { PRODUCT } from "./ProdcutType";


export const ProductReducer = (
    state = {
        product:{}
    },
    action
  ) => {
    switch (action.type) {
      case PRODUCT:
        return {...state, product: action.payload};
      default:
        return state;
    }
  };