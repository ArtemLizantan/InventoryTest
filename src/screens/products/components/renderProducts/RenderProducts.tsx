import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { useEffect } from "react";
import { RootState } from "@reduxjs/toolkit/query";
import ProductItem from "../productItem/ProductItem";
import { IProduct } from "../../../../interfaces/interfaces";

const RenderProducts = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const { orders } = useSelector((state: RootState) => state.orders);
  const { getProducts } = useActions();
  const { getOrders } = useActions();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const getOrderTitleById = (orderId: number) => {
    const order = orders.find((order) => order.id === orderId);
    return order ? order.title : "Unknown Order";
  };

  return (
    products.length !== 0 &&
    products.map(
      ({
        id,
        title,
        type,
        guarantee: { start, end },
        price,
        photo,
        serialNumber,
        order,
      }: IProduct) => (
        <ProductItem
          serialNumber={serialNumber}
          img={photo}
          key={id}
          type={type}
          id={id}
          title={title}
          startGuarantee={start}
          endGuarantee={end}
          price={price}
          orderTitle={getOrderTitleById(order)}
        />
      )
    )
  );
};

export default RenderProducts;
