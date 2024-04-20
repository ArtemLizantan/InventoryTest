import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchOrders = () => {
  return new Promise((resolve) => {
    fetch("http://localhost:3000/orders")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      });
  });
};

export const getOrders = createAsyncThunk("orders", async () => {
  try {
    const response = await fetchOrders();
    return response;
  } catch (error) {
    console.log(error);
  }
});
