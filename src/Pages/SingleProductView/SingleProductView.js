import React from "react";
import { useLocation } from "react-router-dom";

import { masterData } from "../../data/masterData";
import noImage from "../../images/noImage.jpg";
import World from "../../images/icon/world.png";
import Bill from "../../images/icon/bill.png";
import Pay from "../../images/icon/valid.png";
import Plus from "../../images/icon/add.png";
import Minus from "../../images/icon/minus.png";

import style from "./singleProductView.module.scss";
import globalStyle from "../../app.module.scss";

const SingleProductView = () => {
  const location = useLocation();

  const gotProduct = masterData.find(
    (f) => f.productId === parseInt(location.pathname.split("/").pop())
  );
  console.log(gotProduct);
  return (
    <>
      <div className={style.singleProductContainer}>
        <div className={style.productImageContainer}>
          <img
            alt=""
            className={style.productImage}
            src={gotProduct.image === "" ? noImage : gotProduct.image}
          />
        </div>
        <div className={style.productDetialsContainer}>
          <div className={style.porductConatinerOne}>
            <div className={style.productName}>{gotProduct.name}</div>
            <div className={style.reviewAndStar}>
              <div className={style.starRating}>
                {[...Array(5)].map((star, index) => {
                  return (
                    <span
                      key={index}
                      className={`${style.starItem} ${
                        index + 1 <= gotProduct.star
                          ? globalStyle.on
                          : globalStyle.of
                      }`}
                    >
                      &#9733;
                    </span>
                  );
                })}
              </div>
              <div className={style.rating}>Rating({gotProduct.rating})</div>
            </div>
          </div>
          <div className={style.productPriceContainer}>
            <div className={style.productPrice}>$ {gotProduct.price}</div>
          </div>
        </div>
        <div className={style.productDeliveryMessage}>
          <div className={style.productDetialsItem}>
            <img className={style.productDeliveryIcon} src={World} alt="" />
            <div>Shipping worldwide</div>
          </div>
          <div className={style.productDetialsItem}>
            <img className={style.productDeliveryIcon} src={Bill} alt="" />
            <div>Supplier give bills for this product.</div>
          </div>
          <div className={style.productDetialsItem}>
            <img className={style.productDeliveryIcon} src={Pay} alt="" />
            <div>Pay online or when receiving goods</div>
          </div>
        </div>
      </div>
      <div className={style.productquantity}>
        {gotProduct.productVariants.map((m) => (
          <div className={style.productTableContainer}>
            <div
              className={style.productNameAndMg}
            >{`${gotProduct.name} ${gotProduct.productCount} tabs/bottle ${m.mg} mg`}</div>
            <table className={style.productQuantityTable}>
              <tr>
                <th className={style.tableHeaderRow}>Package</th>
                <th className={style.tableHeaderRow}>Price</th>
                <th className={style.tableHeaderRow}>Price p.bottle</th>
                <th className={style.tableHeaderRow}>Quantity</th>
                <th className={style.tableHeaderRow}>Order</th>
              </tr>
              {m.bottle.map((bm) => (
                <tr>
                  <td
                    className={style.tabledata}
                  >{`${gotProduct.productCount} tabs / bottle ${m.mg} x ${bm.count}`}</td>
                  <td className={`${style.tabledata} ${globalStyle.bold}`}>
                    {bm.price}
                  </td>
                  <td className={`${style.tabledata} ${globalStyle.bold}`}>
                    {bm.pricePerBottle}
                  </td>
                  <td className={style.tabledata}>
                    <div className={style.inputContainer}>
                      <img src={Minus} alt="" className={style.minusBtn} />
                      <input className={style.input} type="number" />
                      <img src={Plus} alt="" className={style.plusBtn} />
                    </div>
                  </td>
                  <td className={style.tabledata}>
                    <button className={`${globalStyle.btn} ${style.orderBtn}`}>
                      Order
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        ))}
        <div className={style.medicenDescription}>
          <div className={`${style.descriptionTitle} ${globalStyle.bold}`}>
            Why is this medication prescribed?
          </div>
          <div className={style.howToUseValue}>{gotProduct.prescription}</div>
          <div className={`${style.descriptionTitle} ${globalStyle.bold}`}>
            How should this medicine be used?
          </div>
          <div className={style.howToUseValue}>{gotProduct.howToUse}</div>
          <div className={style.howToUseValue}>
            {gotProduct.additionalDetials}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductView;
