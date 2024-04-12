import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./products.action";
import { IOrder } from "../../interfaces/interfaces";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    error: {},
    products: [] as IOrder[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.products = [];
      });
  },
});
