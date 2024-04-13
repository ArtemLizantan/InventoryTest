import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { useEffect, useState } from "react";
import OrderItems from "../orderItems/OrderItems";
import { IOrder } from "../../../../interfaces/interfaces";
import OrderProducts from "../orderProducts/OrderProducts";

const RenderOrders = () => {
  const { orders, isLoading } = useSelector((state: RootState) => state.orders);
  const [activeOrder, setActiveOrder] = useState({});
  const [idOrder, setIdOrder] = useState(0);

  const { getOrders } = useActions();

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      <div className="orders__wrapper">
        {orders.map(({ title, date, id, products }: IOrder) => (
          <OrderItems
            key={id}
            id={id}
            products={products}
            title={title}
            date={date}
            setActiveOrder={setActiveOrder}
            setIdOrder={setIdOrder}
          />
        ))}
      </div>
      <div className="orders__wrapper-products">
        {activeOrder && <div className="orders__products-block"></div>}
      </div>
    </>
  );
};

export default RenderOrders;


// {orders.map(
//   ({ title, id, products }: IOrder) =>
//     id === idOrder && (
//       <OrderProducts
//         setClose={setActiveOrder}
//         title={title}
//         products={products}
//         key={id}
//       />
//     )
// )}