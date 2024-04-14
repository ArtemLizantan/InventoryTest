import { useState } from "react";
import "./orderItems.scss";
import { MdDelete } from "react-icons/md";
import { VscListSelection } from "react-icons/vsc";
import { IOrderItemProps } from "../../../../interfaces/interfaces";
import Popup from "../../../../components/popup/Popup";
import OrderProduct from "../orderProducts/orderProduct/OrderProduct";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../../../store/orders/orders.slice";

const OrderItems = ({
  title,
  date,
  products,
  id,
  onClick,
}: IOrderItemProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  const calculateOrderPrice = (index: number) => {
    let totalPrice = 0;
    products.forEach((product) => {
      const sumInDollars = product.price[index];
      totalPrice += sumInDollars.value;
    });
    return totalPrice;
  };

  const dispatch = useDispatch();

  const handleDeleteOrder = (id: number) => {
    dispatch(deleteOrder(id));
  };

  return (
    <div className="order-items">
      <div className="order-item">
        <div className="order-item__body">
          <div className="order-item__info order-item__title">{title}</div>
          <div className="order-item__info order-item__show-products">
            <div className="order-item__products-lenght">
              <span>{products.length} </span>
              <span>Продукта</span>
            </div>
            <button onClick={onClick} className="order-item__btn">
              <VscListSelection />
            </button>
          </div>
          <div className="order-item__info">{date}</div>
          <div className="order-item__info order-item__price">
            <div className="">{calculateOrderPrice(0)}$</div>
            <div className="">{calculateOrderPrice(1)}UAN</div>
          </div>

          <div className="order-item__info">
            <button onClick={handleDeleteClick} className="order-item__btn">
              <MdDelete />
            </button>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <Popup closePopup={handleClose}>
          <div className="product-popup">
            <div className="product-popup__top">
              <h2>Удалить этот приход?</h2>
              <ul className="product-popup__list">
                {products.map(({ id, title, photo }) => (
                  <OrderProduct key={id} id={id} title={title} photo={photo} />
                ))}
              </ul>
            </div>
            <div className="product-popup__bottom">
              <button onClick={() => handleDeleteOrder(id)}>Удалить</button>
              <button onClick={handleClose}>Отменить</button>
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default OrderItems;
