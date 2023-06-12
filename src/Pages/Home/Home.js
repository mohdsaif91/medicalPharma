import React from "react";
import { Carousel } from "react-responsive-carousel";

import hero1 from "../../images/heroBanner1.jpg";
import hero2 from "../../images/heroBanner2.jpg";
import hero3 from "../../images/heroBanner3.jpg";
import Medicen from "../../images/medicine.png";
import Truck from "../../images/shipped.png";
import CreditCard from "../../images/credit-card.png";
import Message from "../../images/conversation.png";
import vigra from "../../images/products/vigra.gif";
import Hacker from "../../images/certificates/hackerSafe.jpg";
import Postal from "../../images/certificates/postalservice.jpg";
import EMS from "../../images/certificates/ems.jpg";
import Eagle from "../../images/certificates/eagle.png";
import Verisign from "../../images/certificates/verisign.png";
import Visa from "../../images/certificates/vis.png";
import checker from "../../images/certificates/checker.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import style from "./home.module.scss";
import globalStyle from "../../app.module.scss";
import { category } from "../../data/masterData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryValue) => {
    const formatedcategoryValue = categoryValue.split(" ").join("-");
    navigate(`/productByCategory/${formatedcategoryValue}`);
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
              <div>over 25K products</div>
            </div>
          </div>
          <div className={style.serviceCardsItem}>
            <img src={Truck} alt="" className={style.cardIcon} />
            <div className={style.serviceCardText}>
              <div className={style.serviceCardTextMain}>90 days return</div>
              <div>If goods have problem</div>
            </div>
          </div>
          <div className={style.serviceCardsItem}>
            <img src={CreditCard} alt="" className={style.cardIcon} />
            <div className={style.serviceCardText}>
              <div className={style.serviceCardTextMain}>Secure Payment</div>
              <div>100% secure payment</div>
            </div>
          </div>
          <div className={style.serviceCardsItem}>
            <img src={Message} alt="" className={style.cardIcon} />
            <div className={style.serviceCardText}>
              <div className={style.serviceCardTextMain}>24/7 Support</div>
              <div>Dedicated support in 24h</div>
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
        <div className={style.dealContainer}>
          <div className={style.dealCard}>
            <div className={style.cardTitle}>Generic Viagra</div>
            <img className={style.dealCardImage} src={vigra} alt="" />
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
            <div className={style.cardTitle}>Generic Viagra</div>
            <img className={style.dealCardImage} src={vigra} alt="" />
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
            <div className={style.cardTitle}>Generic Viagra</div>
            <img className={style.dealCardImage} src={vigra} alt="" />
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
            <div className={style.cardTitle}>Generic Viagra</div>
            <img className={style.dealCardImage} src={vigra} alt="" />
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
            <div className={style.cardTitle}>Generic Viagra</div>
            <img className={style.dealCardImage} src={vigra} alt="" />
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
