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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.orders = [];
      });
  },
});

export const { deleteOrder } = ordersSlice.actions;
