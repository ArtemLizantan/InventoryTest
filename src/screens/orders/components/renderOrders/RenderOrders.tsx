import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { useCallback, useEffect, useState } from "react";
import OrderItems from "../orderItems/OrderItems";
import { IOrder } from "../../../../interfaces/interfaces";
import OrderProducts from "../orderProducts/OrderProducts";

const RenderOrders = () => {
  const { orders, isLoading } = useSelector((state: RootState) => state.orders);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const { getOrders } = useActions();

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const handleOrderClick = useCallback(
    (orderId: string) => {
      setSelectedOrderId(orderId === selectedOrderId ? null : orderId);
    },
    [selectedOrderId]
  );

  const handleClose = useCallback(() => {
    setSelectedOrderId(null);
  }, []);

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
            isOpen={id === selectedOrderId}
            onClick={() => handleOrderClick(id)}
          />
        ))}
      </div>
      {selectedOrderId && (
        <div className="orders__wrapper-products">
          <button onClick={handleClose}>Close</button>
          {orders
            .filter(({ id }) => id === selectedOrderId)
            .map(({ title, id, products }: IOrder) => (
              <OrderProducts key={id} title={title} products={products} />
            ))}
        </div>
      )}
    </>
  );
};

export default RenderOrders;
