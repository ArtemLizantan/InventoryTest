import { IOrderProductsProps } from "../../../../interfaces/interfaces";
import { IoMdClose } from "react-icons/io";
import OrderProduct from "./orderProduct/OrderProduct";
import "./orderProducts.scss";
const OrderProducts = ({ title, products, setClose }: IOrderProductsProps) => {
  const closeProducts = () => {
    setClose(false);
  };
  return (
    <div className="order-products">
      <div className="order-products__body">
        <button onClick={closeProducts} className="order-products__btn">
          <IoMdClose />
        </button>
        <div className="order-products__top">
          <div className="order-products__title">{title}</div>
          <button className="order-products__add-btn">Добавить продукты</button>
        </div>
        <div className="order-products__bottom">
          <ul className="order-products__list">
            {products.map(({ id, title, photo }) => (
              <OrderProduct key={id} id={id} title={title} photo={photo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderProducts;
