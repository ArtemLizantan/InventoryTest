import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import ProductItem from "../productItem/ProductItem";
import { IProduct } from "../../../../interfaces/interfaces";

const RenderProducts = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const { orders } = useSelector((state: RootState) => state.orders);
  const { getProducts } = useActions();
  const { getOrders } = useActions();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const getOrderTitleById = (orderId: number) => {
    const order = orders.find((order: string) => order.id === orderId);
    return order ? order.title : "Unknown Order";
  };

  const filterByType = (type: string) => {
    const filtered = products.filter(
      (product: string) => product.type === type
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      Сортировка по :
      <button onClick={() => filterByType("Monitors")}>Монитор</button>
      <button onClick={() => filterByType("Phones")}>Телефон</button>
      {filteredProducts.length !== 0 &&
        filteredProducts.map(
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
