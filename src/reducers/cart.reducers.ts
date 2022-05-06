import * as t from './types';
import { Product } from '../types/product';

const initialState: {
    products: Product[] | []
} = {
    products: []
};

export const cartReducer = (state = initialState, action) => {

  switch (action.type) {
      case t.SET_ALL_PRODUCT:
          return {
              ...state,
              products: [...action.payload],
          };
        case t.SET_ADD_PRODUCT:
            return {
                ...state,
                products: [...action.payload],
            };
        case t.SET_REMOVE_PRODUCT:
            return {
                ...state,
                products: [...action.payload],
            };
        default:
            return state;
    }
};