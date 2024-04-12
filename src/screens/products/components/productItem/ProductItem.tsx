import React from "react";
import { IProductItemProps } from "../../../../interfaces/interfaces";
import "./productItem.scss";
const ProductItem = ({
  title,
  type,
  startGuarantee,
  endGuarantee,
  price,
  id,
  img,
}: IProductItemProps) => {
  return (
    <div id={id.toString()} className="product-item">
      <div className="product-item__body">
        <div className="product-item__info">
          <img className="product-item__photo" src={img} alt="product photo" />
        </div>
        <div className="product-item__info product-item__title">{title}</div>
        <div className="product-item__info product-item__type">{type}</div>
        <div className="product-item__info product-item__guarante">
          <div className="product-item__guarante-wrapper">
            <span className="product-item__smallItem">c </span>
            <span>{startGuarantee}</span>
          </div>
          <div>
            <span className="product-item__smallItem">по </span>
            <span>{endGuarantee}</span>
          </div>
        </div>
        <div className="product-item__info product-item__currency">
          {price &&
            price.map(({ value, symbol }, index) => (
              <React.Fragment key={index}>
                <span className="" key={value}>
                  {value + " " + symbol}
                </span>
              </React.Fragment>
            ))}
        </div>
        <div className="product-item__info"></div>
      </div>
    </div>
  );
};

export default ProductItem;
