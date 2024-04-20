import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { useCallback, useEffect, useState } from "react";
import OrderItems from "../orderItems/OrderItems";
import { IOrder } from "../../../../interfaces/interfaces";
import OrderProducts from "../orderProducts/OrderProducts";
import CloseButton from "../../../../components/UI/closeButton/CloseButton";
import AddButton from "../../../../components/UI/addButton/AddButton";
import Preloader from "../../../../components/preloader/Preloader";
import { RootState } from "../../../../store/store";

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
    <Preloader />
  ) : (
    <>
      <div
        style={{
          display: selectedOrderId ? "flex" : "block",
        }}
        className="orders__bottom"
      >
        <div className="orders__bottom-left">
          {orders.map(({ title, date, id, products }: IOrder) => (
            <OrderItems
              key={id}
              id={id}
              products={products}
              title={title}
              date={date}
              openProducts={!selectedOrderId}
              isOpen={id === selectedOrderId}
              onClick={() => handleOrderClick(id.toString())}
            />
          ))}
        </div>
        <div className="orders__bottom-right">
          {selectedOrderId &&
            orders
              .filter(({ id }) => id === selectedOrderId)
              .map(({ title, id, products }: IOrder) => (
                <div key={id} className="orders__wrapper-products">
                  <h2 className="orders__products-title">{title}</h2>

                  <AddButton text="Добавить продукт" />

                  <CloseButton
                    position={"absolute"}
                    right={-20}
                    top={-20}
                    onClick={handleClose}
                  />
                  {products.length != 0 ? (
                    <OrderProducts title={title} products={products} />
                  ) : (
                    <div className="orders__nothing">Продуктов нет!</div>
                  )}
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default RenderOrders;
