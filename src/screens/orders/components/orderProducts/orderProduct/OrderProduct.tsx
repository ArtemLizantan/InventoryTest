import { MdDelete } from "react-icons/md";
import "./orderProduct.scss";
import { useState } from "react";
import { IOrderProductProps } from "../../../../../interfaces/interfaces";

const OrderProduct = ({ id, photo, title }: IOrderProductProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsPopupOpen(true);
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
    </li>
  );
};

export default OrderProduct;
