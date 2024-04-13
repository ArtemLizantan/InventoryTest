import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { useEffect } from "react";
import OrderItems from "../orderItems/OrderItems";
import { IOrder } from "../../../../interfaces/interfaces";

const RenderOrders = () => {
  const { orders } = useSelector((state: RootState) => state.orders);

  const { getOrders } = useActions();

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return orders.map(({ title, date, id, products }: IOrder) => (
    <OrderItems key={id} products={products} title={title} date={date} />
  ));
};

export default RenderOrders;
