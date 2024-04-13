import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { RootState } from "@reduxjs/toolkit/query";
import ProductItem from "../productItem/ProductItem";
import { IProduct } from "../../../../interfaces/interfaces";

const RenderProducts = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const { orders } = useSelector((state: RootState) => state.orders);
  const { getProducts } = useActions();
  const { getOrders } = useActions();
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [applyFilter, setApplyFilter] = useState(false);

  useEffect(() => {
    getProducts();
    getOrders();
  }, [getProducts, getOrders]);

  const getOrderTitleById = (orderId: number) => {
    const order = orders.find((order) => order.id === orderId);
    return order ? order.title : "Unknown Order";
  };

  const filterByType = (type: string) => {
    if (type === "All") {
      setApplyFilter(false);
    } else {
      setApplyFilter(true);
      const filtered = products.filter((product) => product.type === type);
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      Сортировка по :<button onClick={() => filterByType("All")}>Все</button>
      <button onClick={() => filterByType("Monitors")}>Монитор</button>
      <button onClick={() => filterByType("Phones")}>Телефон</button>
      {applyFilter
        ? filteredProducts.map(
            ({
              id,
              title,
              type,
              guarantee: { start, end },
              price,
              photo,
              serialNumber,
              order,
            }: IProduct) => (
              <ProductItem
                serialNumber={serialNumber}
                img={photo}
                key={id}
                type={type}
                id={id}
                title={title}
                startGuarantee={start}
                endGuarantee={end}
                price={price}
                orderTitle={getOrderTitleById(order)}
              />
            )
          )
        : products.map(
            ({
              id,
              title,
              type,
              guarantee: { start, end },
              price,
              photo,
              serialNumber,
              order,
            }: IProduct) => (
              <ProductItem
                serialNumber={serialNumber}
                img={photo}
                key={id}
                type={type}
                id={id}
                title={title}
                startGuarantee={start}
                endGuarantee={end}
                price={price}
                orderTitle={getOrderTitleById(order)}
              />
            )
          )}
    </>
  );
};

export default RenderProducts;
