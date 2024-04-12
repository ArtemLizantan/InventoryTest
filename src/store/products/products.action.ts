import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProdcuts = () => {
  return new Promise((resolve) => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      });
  });
};

export const getProducts = createAsyncThunk("products", async (_, thunkApi) => {
  try {
    const response = await fetchProdcuts();
    return response;
  } catch (error) {
    thunkApi.rejectWithValue({ error });
  }
});
