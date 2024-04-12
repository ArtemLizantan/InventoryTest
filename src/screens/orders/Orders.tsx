import Title from "../../components/title/Title";
import RenderOrders from "./components/renderOrders/RenderOrders";
import "./orders.scss";

const Orders = () => {
  return (
    <section className="orders">
      <div className="orders__body">
        <Title text="Приходы" />
        <RenderOrders />
      </div>
    </section>
  );
};

export default Orders;
