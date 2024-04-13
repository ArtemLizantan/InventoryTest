import "./orderProducts.scss";
const OrderProducts = ({ title, products, setClose }) => {
  const closeProducts = () => {
    setClose(false);
  };
  return (
    <div className="order-products">
      <div className="order-products__body">
        <button onClick={closeProducts} className="order-products__title">
          X
        </button>
        <div className="order-products__title">{title}</div>
        <button>Добавить продукты</button>
        <div className="order-products__wrapper">
          <ul className="order-products__list">
            {products.map(({ id, title, photo }) => (
              <li key={id} className="order-products__list-item">
                <img src={photo} alt="" />
                <div className="order-products__info">{title}</div>
                <div className="order-products__info">
                  <button className="order-products__btn">x</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderProducts;
