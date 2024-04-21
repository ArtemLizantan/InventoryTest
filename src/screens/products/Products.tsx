import { Helmet } from "react-helmet";
import Title from "../../components/title/Title";
import transition from "../../transition";
import RenderProducts from "./components/renderProducts/RenderProducts";
import "./products.scss";

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <section className="products">
        <div className="products__body">
          <Title text="Продукты" />
          <RenderProducts />
        </div>
      </section>
    </>
  );
};

export default transition(Products);
