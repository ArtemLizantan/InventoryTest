import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { useEffect } from "react";
import OrderItems from "../orderItems/OrderItems";

const RenderOrders = () => {
  const { orders } = useSelector((state: RootState) => state.orders);
  const { products } = useSelector((state: RootState) => state.products);

  const { getOrders } = useActions();
  const { getProducts } = useActions();

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return orders.map(({ title, date, id }) => (
    <OrderItems id={id} products={[]} title={title} date={date} />
  ));
};

export default RenderOrders;
