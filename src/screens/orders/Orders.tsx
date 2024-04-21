import { Helmet } from "react-helmet";
import Title from "../../components/title/Title";
import transition from "../../transition";
import RenderOrders from "./components/renderOrders/RenderOrders";
import "./orders.scss";

const Orders = () => {
  return (
    <>
      <Helmet>
        <title>Orders</title>
      </Helmet>
      <section className="orders">
        <div className="orders__body">
          <div className="orders__top">
            <Title text="Приходы" />
          </div>

          <RenderOrders />
        </div>
      </section>
    </>
  );
};

export default transition(Orders);
