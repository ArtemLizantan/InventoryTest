import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { useEffect } from "react";
import { RootState } from "@reduxjs/toolkit/query";
import ProductItem from "../productItem/ProductItem";
import { IProduct } from "../../../../interfaces/interfaces";

const RenderProducts = () => {
  const { products } = useSelector((state: RootState) => state.products);

  const { getProducts } = useActions();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    products.length !== 0 &&
    products.map(
      ({
        id,
        title,
        type,
        guarantee: { start, end },
        price,
        photo,
      }: IProduct) => (
        <ProductItem
          img={photo}
          key={id}
          type={type}
          id={id}
          title={title}
          startGuarantee={start}
          endGuarantee={end}
          price={price}
        />
      )
    )
  );
};

export default RenderProducts;
