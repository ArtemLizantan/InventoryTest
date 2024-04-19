import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productsSlice } from "./products/products.slice";
import { ordersSlice } from "./orders/orders.slice";

const rootReducer = combineReducers({
  orders: ordersSlice.reducer,
  products: productsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
