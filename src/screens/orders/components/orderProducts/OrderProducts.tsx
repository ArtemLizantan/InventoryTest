import { IOrderProductsProps } from "../../../../interfaces/interfaces";
import OrderProduct from "./orderProduct/OrderProduct";
import "./orderProducts.scss";
const OrderProducts = ({ products }: IOrderProductsProps) => {
  return (
    <ul className="order-products__list">
      {products.map(({ id, title, photo }) => (
        <OrderProduct key={id} id={id} title={title} photo={photo} />
      ))}
    </ul>
  );
};

export default OrderProducts;
