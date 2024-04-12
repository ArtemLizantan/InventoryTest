import { useState } from "react";
import "./orderItems.scss";
import { MdDelete } from "react-icons/md";
import { VscListSelection } from "react-icons/vsc";
import OrderProducts from "../orderProducts/OrderProducts";

const OrderItem = ({ title, date, sum, products, id }) => {
  const [orderItemId, setOrderItemId] = useState(0);
  const [activeOrder, setActiveOrder] = useState(false);

  const getProducts = () => {
    setOrderItemId(id);
    setActiveOrder((prev) => !prev);
  };

  return (
    <div className="order-items">
      <div className="order-item">
        <div className="order-item__body">
          <div className="order-item__info">{title}</div>
          <div className="order-item__info">{date}</div>
          <div className="order-item__info">{sum}</div>
          <div className="order-item__info">
            <button onClick={getProducts} className="order-item__btn">
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
      {activeOrder && <OrderProducts products={products} title={title} />}
    </div>
  );
};

export default OrderItem;
