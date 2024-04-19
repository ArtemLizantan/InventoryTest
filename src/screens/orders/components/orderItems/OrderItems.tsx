import { useState } from "react";
import "./orderItems.scss";
import { IOrderItemProps } from "../../../../interfaces/interfaces";
import Popup from "../../../../components/popup/Popup";
import { OrderProductItem } from "../orderProducts/orderProduct/OrderProduct";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../../../store/orders/orders.slice";
import DeleteButton from "../../../../components/UI/deleteButton/DeleteButton";
import ShowProductsButton from "../../../../components/UI/showProductsButton/ShowProductsButton";

const OrderItems = ({
  title,
  date,
  products,
  id,
  onClick,
  openProducts,
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
      if (product.price !== undefined) {
        const sumInDollars = product.price[index];
        totalPrice += sumInDollars.value;
      }
    });
    return totalPrice;
  };

  const dispatch = useDispatch();

  const handleDeleteOrder = (id: number | string) => {
    dispatch(deleteOrder(id));
  };

  return (
    <>
      <OrderItem
        openProducts={openProducts}
        title={title}
        onClick={onClick}
        calculateOrderPrice={calculateOrderPrice}
        date={date}
        products={products}
        handleDeleteClick={handleDeleteClick}
        id={id}
      />

      <Popup
        title="Удалить этот приход?"
        onClickRemove={handleClose}
        onClickDelete={() => handleDeleteOrder(id)}
        closePopup={handleClose}
        isPopupOpen={isPopupOpen}
      >
        <ul className="order-item__popup-list">
          {products.map(({ id, title, photo, serialNumber }) => (
            <OrderProductItem
              key={id}
              id={id}
              serialNumber={serialNumber}
              title={title}
              photo={photo}
              inPopup={true}
            />
          ))}
        </ul>
      </Popup>
    </>
  );
};

const OrderItem = ({
  openProducts,
  title,
  onClick,
  calculateOrderPrice,
  date,
  products,
  handleDeleteClick,
  id,
}: IOrderItemProps) => {
  return (
    <div id={id.toString()} className="order-item">
      <div className="order-item__body">
        {openProducts && (
          <div className="order-item__info order-item__title">{title}</div>
        )}
        <div className="order-item__info order-item__show-products">
          <ShowProductsButton onClick={onClick} />
          <div className="order-item__products-lenght">
            <span>{products.length} </span>
            <span>Продукта</span>
          </div>
        </div>
        <div className="order-item__info">{date}</div>
        {openProducts && (
          <div className="order-item__info order-item__price">
            <div className="">
              {calculateOrderPrice !== undefined && calculateOrderPrice(0)}$
            </div>
            <div className="">
              {calculateOrderPrice !== undefined && calculateOrderPrice(1)}UAN
            </div>
          </div>
        )}

        {openProducts && (
          <div className="order-item__info">
            <DeleteButton onClick={handleDeleteClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderItems;
