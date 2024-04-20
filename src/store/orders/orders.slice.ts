import { createSlice } from "@reduxjs/toolkit";
import { getOrders } from "./orders.action";
import { IOrder } from "../../interfaces/interfaces";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    isLoading: false,
    error: {},
    orders: [] as IOrder[],
  },
  reducers: {
    deleteOrder(state, action) {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
    deleteProducts(state, action) {
      state.orders.forEach((order) => {
        order.products = order.products.filter(
          (product) => product.id !== action.payload
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        const payload = action.payload as IOrder[];
        state.isLoading = false;
        state.orders = payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.orders = [];
      });
  },
});

export const { deleteOrder, deleteProducts } = ordersSlice.actions;
