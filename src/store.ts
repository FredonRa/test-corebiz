import { combineReducers } from 'redux';
import { cartReducer } from './reducers/cart.reducers';
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  cartReducer: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});