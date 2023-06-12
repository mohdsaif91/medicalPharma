import React from "react";
import { useParams } from "react-router-dom";

import { masterData } from "../../data/masterData";
import ProductCard from "../../Components/ProductCard/ProductCard";

import style from "./productByCategory.module.scss";

const ProductByCategory = () => {
  const { categoryName } = useParams();
  const formatedCategoryName = categoryName.split("-").join(" ").toUpperCase();
  const productContainingCategory = masterData.filter(
    (m) => m.categoryName === formatedCategoryName
  );

  return (
    <div className={style.productByCategoryContainer}>
      <div className={style.pageHeading}>Category {formatedCategoryName}</div>
      <div className={style.productConatienr}>
        {productContainingCategory.map((m) => (
          <ProductCard data={m} key={m.productId} />
        ))}
      </div>
    </div>
  );
};

export default ProductByCategory;
