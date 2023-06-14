import React from "react";

import { masterData } from "../../data/masterData";
import ProductCard from "../../Components/ProductCard/ProductCard";

import style from "./product.module.scss";

const Product = () => {
  return (
    <div className={style.productContainer}>
      <div className={style.productHeading}>All Products</div>
      <div className={style.productList}>
        {masterData.map((m) => (
          <ProductCard data={m} />
        ))}
      </div>
    </div>
  );
};

export default Product;
