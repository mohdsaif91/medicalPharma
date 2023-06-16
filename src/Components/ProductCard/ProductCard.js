import React from "react";
import { useNavigate } from "react-router-dom";

import noImage from "../../images/noImage.jpg";

import style from "./productCard.module.scss";
import globalStyle from "../../app.module.scss";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  const getSingleProduct = () => {
    navigate(`/productView/${data.productId}`);
  };

  return (
    <div key={data.preoductId} className={style.productItem}>
      <div className={style.productName}>{data.name}</div>
      <div className={style.activeIngradient}>
        <span className={style.activeIngredientLabel}>Active ingredient:</span>
        <span className={style.activeIngredientvalue}>
          {data.activeIngredient}
        </span>
      </div>
      <img
        alt=""
        src={data.image === "" ? noImage : data.image}
        className={style.productImage}
      />
      <div className={style.priceContainer}>$ {data.price}</div>
      <div className={style.dataRatingContainer}>
        <span className={style.ratingLabel}>Rating</span>
        <span className={style.circleRating}>{data.rating}</span>
        <div className={style.starRating}>
          {[...Array(5)].map((star, index) => {
            return (
              <span
                key={index}
                className={`${style.starItem} ${
                  index + 1 <= data.star ? style.on : style.of
                }`}
              >
                &#9733;
              </span>
            );
          })}
        </div>
      </div>
      <div className={style.btnContainer}>
        <button
          className={`${globalStyle.btn} ${style.viewBtn}`}
          onClick={() => getSingleProduct()}
        >
          View
        </button>
      </div>
    </div>
    // <div key={data.preoductId} className={style.productItem}>
    //   <div className={style.productName}>{data.name}</div>
    //   <div className={style.activeIngradient}>
    //     <span className={style.activeIngredientLabel}>Active ingredient:</span>
    //     <span className={style.activeIngredientvalue}>
    //       {data.activeIngredient}
    //     </span>
    //   </div>
    //   <img
    //     src={data.image === "" ? noImage : data.image}
    //     className={style.productImage}
    //   />
    //   <div className={style.dataRatingContainer}>
    //     <span className={style.ratingLabel}>Rating</span>
    //     <span className={style.circleRating}>{data.rating}</span>
    //     <div className={style.starRating}>
    //       {[...Array(5)].map((star, index) => {
    //         return (
    //           <span
    //             key={index}
    //             className={`${style.starItem} ${
    //               index + 1 <= data.star ? style.on : style.of
    //             }`}
    //           >
    //             &#9733;
    //           </span>
    //         );
    //       })}
    //     </div>
    //   </div>
    //   <div className={style.btnContainer}>
    //     <button
    //       className={`${globalStyle.btn} ${style.viewBtn}`}
    //       onClick={() => getSingleProduct()}
    //     >
    //       View
    //     </button>
    //   </div>
    // </div>
  );
};

export default ProductCard;
