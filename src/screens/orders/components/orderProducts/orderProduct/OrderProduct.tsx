import { MdDelete } from "react-icons/md";
import "./orderProduct.scss";
import { useState } from "react";
import Popup from "../../../../../components/popup/Popup";
import { IOrderProductProps } from "../../../../../interfaces/interfaces";

const OrderProduct = ({ id, photo, title }: IOrderProductProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <li key={id} className="order-products__list-item">
      <div className="order-product">
        <div className="order-product__body">
          <div className="order-product__left">
            <img src={photo} alt="" />
            <div className="order-products__info">{title}</div>
          </div>
          <div className="order-product__right">
            <button
              onClick={handleDeleteClick}
              className="order-products__list-btn"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
      {/* {isPopupOpen && (
        <Popup closePopup={handleClose}>
          <div className="product-popup">
            <div className="product-popup__bottom">
              <button>Удалить</button>
              <button onClick={handleClose}>Отменить</button>
            </div>
          </div>
        </Popup>
      )} */}
    </li>
  );
};

export default OrderProduct;
