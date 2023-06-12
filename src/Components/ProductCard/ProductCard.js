import React from "react";

import style from "./productCard.module.scss";

const ProductCard = ({ data }) => {
  return (
    <div key={data.preoductId} className={style.productItem}>
      <div className={style.cardHeader}>
        <div className={style.dataRatingContainer}>{data.rating}</div>
      </div>
      <div className={style.productName}>{data.name}</div>
      <img src={data.image} className={style.productImage} />
    </div>
  );
};

export default ProductCard;
