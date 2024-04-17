import "./orderProduct.scss";
import { useState } from "react";
import { IOrderProductProps } from "../../../../../interfaces/interfaces";
import DeleteButton from "../../../../../components/UI/deleteButton/DeleteButton";
import Popup from "../../../../../components/popup/Popup";
import { useDispatch } from "react-redux";
import { deleteProducts } from "../../../../../store/orders/orders.slice";

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

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const dispatch = useDispatch();

  const handleDeleteProduct = (id: number) => {
    console.log(id);

    dispatch(deleteProducts(id));
  };

  return (
    <>
      <OrderProductItem
        id={id}
        serialNumber={serialNumber}
        title={title}
        photo={photo}
        handleDeleteClick={handleDeleteClick}
      />
      {isPopupOpen && (
        <Popup
          title="Удалить этот продукт?"
          onClickRemove={handleClosePopup}
          closePopup={handleClosePopup}
          onClickDelete={() => handleDeleteProduct(id)}
        >
          <ul>
            <OrderProductItem
              id={id}
              serialNumber={serialNumber}
              title={title}
              photo={photo}
              inPopup={true}
            />
          </ul>
        </Popup>
      )}
    </>
  );
};

export default OrderProduct;

const OrderProductItem = ({
  id,
  photo,
  title,
  serialNumber,
  handleDeleteClick,
  inPopup,
}: IOrderProductProps) => {
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
          {inPopup ? null : (
            <div className="order-product__right">
              <DeleteButton onClick={handleDeleteClick} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
