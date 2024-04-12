import * as ordersActions from "../store/orders/orders.action";
import * as productsActions from "../store/products/products.action";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

const rootActions = {
  ...ordersActions,
  ...productsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
