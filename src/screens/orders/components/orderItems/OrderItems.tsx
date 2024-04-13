import { useState } from "react";
import "./orderItems.scss";
import { MdDelete } from "react-icons/md";
import { VscListSelection } from "react-icons/vsc";
import OrderProducts from "../orderProducts/OrderProducts";
import { IOrderItemProps } from "../../../../interfaces/interfaces";

const OrderItem = ({ title, date, products, nameOrder }: IOrderItemProps) => {
  const [activeOrder, setActiveOrder] = useState(false);

  const showProducts = () => {
    setActiveOrder((prev) => !prev);
  };

  const calculateOrderPrice = (index: number) => {
    let totalPrice = 0;
    products.forEach((product) => {
      const sumInDollars = product.price[index];
      totalPrice += sumInDollars.value;
    });
    return totalPrice;
  };

  return (
    <div className="order-items">
      <div className="order-item">
        <div className="order-item__body">
          <div className="order-item__info">{title}</div>
          <div className="order-item__info">{date}</div>
          <div className="order-item__info order-item__price">
            <div className="">{calculateOrderPrice(0)}$</div>
            <div className="">{calculateOrderPrice(1)}UAN</div>
          </div>
          <div className="order-item__info">{nameOrder}</div>
          <div className="order-item__info">
            <button onClick={showProducts} className="order-item__btn">
              <VscListSelection />
            </button>
          </div>
          <div className="order-item__info">
            <button className="order-item__btn">
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
      {activeOrder && (
        <OrderProducts
          setClose={setActiveOrder}
          products={products}
          title={title}
        />
      )}
    </div>
  );
};

export default OrderItem;
