import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

import hero1 from "../../images/heroBanner1.jpg";
import hero2 from "../../images/heroBanner2.jpg";
import hero3 from "../../images/heroBanner3.jpg";
import Medicen from "../../images/medicine.png";
import Truck from "../../images/shipped.png";
import CreditCard from "../../images/credit-card.png";
import Message from "../../images/conversation.png";
import Hacker from "../../images/certificates/hackerSafe.jpg";
import Postal from "../../images/certificates/postalservice.jpg";
import EMS from "../../images/certificates/ems.jpg";
import Eagle from "../../images/certificates/eagle.png";
import Verisign from "../../images/certificates/verisign.png";
import Visa from "../../images/certificates/vis.png";
import checker from "../../images/certificates/checker.png";
import { category, masterData } from "../../data/masterData";
import noImage from "../../images/noImage.jpg";

import style from "./home.module.scss";
import globalStyle from "../../app.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryValue) => {
    const formatedcategoryValue = categoryValue.split(" ").join("-");
    navigate(`/productByCategory/${formatedcategoryValue}`);
  };

  const generateRandomProduct = (extendedNumber) => {
    const randomNumber = Math.floor(Math.random() * masterData.length + 1);
    return masterData.slice(randomNumber, randomNumber + extendedNumber);
  };

  const generateMobile = () => {
    return generateRandomProduct(5).map((m) => (
      <div className={style.dealCard}>
        <div className={style.cardTitle}>{m.name}</div>
        <img
          className={style.dealCardImage}
          src={m.image === "" ? noImage : m.image}
          alt=""
        />
        <div className={style.cardSubTitle}>
          <div className={style.cardTitleLabel}>Active ingredient:</div>
          <span className={style.cardTitleMain}>Sildenafil Citrate</span>
        </div>
        <div className={style.starRating}>
          {[...Array(5)].map((star, index) => {
            return (
              <span
                key={index}
                className={`${style.starItem} ${
                  index + 1 <= 4 ? style.on : style.of
                }`}
              >
                &#9733;
              </span>
            );
          })}
        </div>
        <div className={style.homeBtnContainer}>
          <button className={`${globalStyle.btn} ${style.buyBtn}`}>
            Buy now
          </button>
          <button className={`${globalStyle.btn} ${style.cartBtn}`}>
            Add to cart
          </button>
        </div>
      </div>
    ));
  };

  const generateTab = () => {
    const generatedArray = generateRandomProduct(6);
    return generatedArray.map((m, i) => {
      return (
        <div className={style.tabDealCard} key={i}>
          <div className={style.dealCard}>
            <div className={style.cardTitle}>{m.name}</div>
            <img
              className={style.dealCardImage}
              src={m.image === "" ? noImage : m.image}
              alt=""
            />
            <div className={style.cardSubTitle}>
              <div className={style.cardTitleLabel}>Active ingredient:</div>
              <span className={style.cardTitleMain}>Sildenafil Citrate</span>
            </div>
            <div className={style.starRating}>
              {[...Array(5)].map((star, index) => {
                return (
                  <span
                    key={index}
                    className={`${style.starItem} ${
                      index + 1 <= 4 ? style.on : style.of
                    }`}
                  >
                    &#9733;
                  </span>
                );
              })}
            </div>
            <div className={style.homeBtnContainer}>
              <button className={`${globalStyle.btn} ${style.buyBtn}`}>
                Buy now
              </button>
              <button className={`${globalStyle.btn} ${style.cartBtn}`}>
                Add to cart
              </button>
            </div>
          </div>
          <div className={style.dealCard}>
            <div className={style.cardTitle}>
              {generatedArray[generatedArray.length === i + 1 ? i : i + 1].name}
            </div>
            <img
              className={style.dealCardImage}
              src={
                generatedArray[generatedArray.length === i + 1 ? i : i + 1]
                  .image === ""
                  ? noImage
                  : generatedArray[generatedArray.length === i + 1 ? i : i + 1]
                      .image
              }
              alt=""
            />
            <div className={style.cardSubTitle}>
              <div className={style.cardTitleLabel}>Active ingredient:</div>
              <span className={style.cardTitleMain}>Sildenafil Citrate</span>
            </div>
            <div className={style.starRating}>
              {[...Array(5)].map((star, index) => {
                return (
                  <span
                    key={index}
                    className={`${style.starItem} ${
                      index + 1 <= 4 ? style.on : style.of
                    }`}
                  >
                    &#9733;
                  </span>
                );
              })}
            </div>
            <div className={style.homeBtnContainer}>
              <button className={`${globalStyle.btn} ${style.buyBtn}`}>
                Buy now
              </button>
              <button className={`${globalStyle.btn} ${style.cartBtn}`}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={style.homeContainer}>
      <div className={style.heroContainer}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
        >
          <div>
            <img src={hero1} alt="" />
          </div>
          <div>
            <img src={hero2} alt="" />
          </div>
          <div>
            <img src={hero3} alt="" />
          </div>
        </Carousel>
        <div className={style.serviceCards}>
          <div className={style.serviceCardsItem}>
            <img src={Medicen} alt="" className={style.cardIcon} />
            <div className={style.serviceCardText}>
              <div className={style.serviceCardTextMain}>Reliable</div>
              <div className={style.serviceCardTextsub}>over 25K products</div>
            </div>
          </div>
          <div className={style.serviceCardsItem}>
            <img src={Truck} alt="" className={style.cardIcon} />
            <div className={style.serviceCardText}>
              <div className={style.serviceCardTextMain}>90 days return</div>
              <div className={style.serviceCardTextsub}>
                If goods have problem
              </div>
            </div>
          </div>
          <div className={style.serviceCardsItem}>
            <img src={CreditCard} alt="" className={style.cardIcon} />
            <div className={style.serviceCardText}>
              <div className={style.serviceCardTextMain}>Secure Payment</div>
              <div className={style.serviceCardTextsub}>
                100% secure payment
              </div>
            </div>
          </div>
          <div className={style.serviceCardsItem}>
            <img src={Message} alt="" className={style.cardIcon} />
            <div className={style.serviceCardText}>
              <div className={style.serviceCardTextMain}>24/7 Support</div>
              <div className={style.serviceCardTextsub}>
                Dedicated support in 24h
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.containerHeading}>Shop by Category</div>
        <div className={style.categoryContainerParent}>
          <ul className={style.categoryContainer}>
            {category.map((m, index) => (
              <li
                key={index}
                onClick={() => handleCategoryClick(m)}
                className={style.categoryItem}
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.container}>
        <div className={`${style.containerHeading}`}>
          Deals of the day
          {/* <div className={style.borderBottom} /> */}
        </div>
        <div className={style.dealContainerDesktop}>
          {generateRandomProduct().map((m) => (
            <div className={style.dealCard}>
              <div className={style.cardTitle}>{m.name}</div>
              <img
                className={style.dealCardImage}
                src={m.image === "" ? noImage : m.image}
                alt=""
              />
              <div className={style.cardSubTitle}>
                <div className={style.cardTitleLabel}>Active ingredient:</div>
                <span className={style.cardTitleMain}>Sildenafil Citrate</span>
              </div>
              <div className={style.starRating}>
                {[...Array(5)].map((star, index) => {
                  return (
                    <span
                      key={index}
                      className={`${style.starItem} ${
                        index + 1 <= 4 ? style.on : style.of
                      }`}
                    >
                      &#9733;
                    </span>
                  );
                })}
              </div>
              <div className={style.homeBtnContainer}>
                <button className={`${globalStyle.btn} ${style.buyBtn}`}>
                  Buy now
                </button>
                <button className={`${globalStyle.btn} ${style.cartBtn}`}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={style.dealContainerMobile}>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
          >
            {window.screen.width <= 800 && window.screen.width > 601
              ? generateTab()
              : generateMobile()}
            {/* {generateRandomProduct().map((m) => (
              <div className={style.dealCard}>
                <div className={style.cardTitle}>{m.name}</div>
                <img
                  className={style.dealCardImage}
                  src={m.image === "" ? noImage : m.image}
                  alt=""
                />
                <div className={style.cardSubTitle}>
                  <div className={style.cardTitleLabel}>Active ingredient:</div>
                  <span className={style.cardTitleMain}>
                    Sildenafil Citrate
                  </span>
                </div>
                <div className={style.starRating}>
                  {[...Array(5)].map((star, index) => {
                    return (
                      <span
                        key={index}
                        className={`${style.starItem} ${
                          index + 1 <= 4 ? style.on : style.of
                        }`}
                      >
                        &#9733;
                      </span>
                    );
                  })}
                </div>
                <div className={style.homeBtnContainer}>
                  <button className={`${globalStyle.btn} ${style.buyBtn}`}>
                    Buy now
                  </button>
                  <button className={`${globalStyle.btn} ${style.cartBtn}`}>
                    Add to cart
                  </button>
                </div>
              </div>
            ))} */}
          </Carousel>
        </div>
        <div></div>
      </div>
      <div className={style.container}>
        <div className={`${style.containerHeading}`}>Certificates</div>
        <div className={style.certificatesList}>
          <img alt="" src={checker} />
          <img alt="" src={Visa} />
          <img alt="" src={Verisign} />
          <img alt="" src={Eagle} />
          <img alt="" src={EMS} />
          <img alt="" src={Postal} />
          <img alt="" src={Hacker} />
        </div>
      </div>
    </div>
  );
};

export default Home;
