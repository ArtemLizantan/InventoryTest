import Title from "../../components/title/Title";
import transition from "../../transition";
import RenderOrders from "./components/renderOrders/RenderOrders";
import "./orders.scss";

const Orders = () => {
  return (
    <section className="orders">
      <div className="orders__body">
        <div className="orders__top">
          <Title text="Приходы" />
        </div>
        <div className="orders__bottom">
          <RenderOrders />
        </div>
      </div>
    </section>
  );
};

export default transition(Orders);
