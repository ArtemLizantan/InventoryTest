import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { RootState } from "../../../../store/store";
import ProductItem from "../productItem/ProductItem";
import { IProduct } from "../../../../interfaces/interfaces";
import CustomSelect from "../../../../components/customSelect/CustomSelect";
import Preloader from "../../../../components/preloader/Preloader";

const options = [
  { value: "All", label: "Все" },
  { value: "Monitors", label: "Мониторы" },
  { value: "Phones", label: "Телефоны" },
];

const RenderProducts = () => {
  const { products, isLoading } = useSelector(
    (state: RootState) => state.products
  );
  const { orders } = useSelector((state: RootState) => state.orders);
  const { getProducts } = useActions();
  const { getOrders } = useActions();
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [applyFilter, setApplyFilter] = useState(false);

  useEffect(() => {
    getProducts();
    getOrders();
  }, [getProducts, getOrders]);

  const getOrderTitleById = useMemo(() => {
    return (orderId: number | undefined) => {
      const order = orders.find((order: IProduct) => order.id === orderId);
      return order ? order.title : "Unknown Order";
    };
  }, [orders]);

  const filterByType = (type: string) => {
    if (type === "All") {
      setApplyFilter(false);
    } else {
      setApplyFilter(true);
      const filtered = products.filter(
        (product: IProduct) => product.type === type
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <CustomSelect
        options={options}
        onSelect={(option) => filterByType(option.value)}
      />

      {isLoading ? (
        <Preloader />
      ) : (
        <div className="products__wrapper">
          {applyFilter
            ? filteredProducts.map(
                ({
                  id,
                  title,
                  type,
                  guarantee,
                  price,
                  photo,
                  serialNumber,
                  order,
                }: IProduct) => {
                  return (
                    <ProductItem
                      serialNumber={serialNumber}
                      img={photo}
                      key={id}
                      type={type}
                      id={id}
                      title={title}
                      startGuarantee={guarantee?.start}
                      endGuarantee={guarantee?.end}
                      price={price || []}
                      orderTitle={getOrderTitleById(order)}
                    />
                  );
                }
              )
            : products.map(
                ({
                  id,
                  title,
                  type,
                  guarantee,
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
                    startGuarantee={guarantee?.start}
                    endGuarantee={guarantee?.end}
                    price={price || []}
                    orderTitle={getOrderTitleById(order)}
                  />
                )
              )}
        </div>
      )}
    </>
  );
};

export default RenderProducts;
