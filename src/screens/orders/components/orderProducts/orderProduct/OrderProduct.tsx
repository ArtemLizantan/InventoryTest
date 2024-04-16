import "./orderProduct.scss";
import { useState } from "react";
import { IOrderProductProps } from "../../../../../interfaces/interfaces";
import DeleteButton from "../../../../../components/UI/deleteButton/DeleteButton";

const OrderProduct = ({
  id,
  photo,
  title,
  serialNumber,
}: IOrderProductProps) => {
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
            <div className="order-products__info order-products__name">
              <span className="product-item__underline">{title}</span>
              <span className="product-item__serialNumber">{serialNumber}</span>
            </div>
          </div>
          <div className="order-product__right">
            <DeleteButton onClick={handleDeleteClick} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default OrderProduct;
