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

const Home = () => {
  const handleCategoryClick = (categoryValue) => {
    console.log(categoryValue);
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
            <li
              onClick={() => handleCategoryClick("AIDS or HIV Treatment")}
              className={style.categoryItem}
            >
              AIDS or HIV Treatment
            </li>
            <li
              onClick={() => handleCategoryClick("Anesthetics")}
              className={style.categoryItem}
            >
              Anesthetics
            </li>
            <li
              onClick={() => handleCategoryClick("Anti Viral")}
              className={style.categoryItem}
            >
              Anti Viral
            </li>
            <li
              onClick={() => handleCategoryClick("Anti-Acidity")}
              className={style.categoryItem}
            >
              Anti-Acidity
            </li>
            <li
              onClick={() => handleCategoryClick("Anti-Acne")}
              className={style.categoryItem}
            >
              Anti-Acne
            </li>
            <li
              onClick={() => handleCategoryClick("Anti-Allergic or Asthma")}
              className={style.categoryItem}
            >
              Anti-Allergic or Asthma
            </li>
            <li
              onClick={() => handleCategoryClick("Anti-Depressant")}
              className={style.categoryItem}
            >
              Anti-Depressant
            </li>
            <li
              onClick={() => handleCategoryClick("Anti-Diabetic")}
              className={style.categoryItem}
            >
              Anti-Diabetic
            </li>
            <li
              onClick={() => handleCategoryClick("Anti-Fungus")}
              className={style.categoryItem}
            >
              Anti-Fungus
            </li>
            <li
              onClick={() => handleCategoryClick("Anti-Hair loss")}
              className={style.categoryItem}
            >
              Anti-Hair loss
            </li>
            <li
              onClick={() => handleCategoryClick("Anti-Herpes")}
              className={style.categoryItem}
            >
              Anti-Herpes
            </li>
            <li
              onClick={() => handleCategoryClick("Anti-Muscular Dystrophy")}
              className={style.categoryItem}
            >
              Anti-Muscular Dystrophy
            </li>
            <li
              onClick={() => handleCategoryClick("Antibiotics")}
              className={style.categoryItem}
            >
              Antibiotics
            </li>
            <li
              onClick={() => handleCategoryClick("Antioxidant")}
              className={style.categoryItem}
            >
              Antioxidant
            </li>
            <li
              onClick={() => handleCategoryClick("Blood Pressure")}
              className={style.categoryItem}
            >
              Blood Pressure
            </li>
            <li
              onClick={() => handleCategoryClick("Cholesterol")}
              className={style.categoryItem}
            >
              Cholesterol
            </li>
            <li
              onClick={() => handleCategoryClick("Erectile Dysfunction")}
              className={style.categoryItem}
            >
              Erectile Dysfunction
            </li>
            <li
              onClick={() => handleCategoryClick("Eye Care")}
              className={style.categoryItem}
            >
              Eye Care
            </li>
            <li
              onClick={() => handleCategoryClick("Gastrointestinal")}
              className={style.categoryItem}
            >
              Gastrointestinal
            </li>
            <li
              onClick={() => handleCategoryClick("General Health")}
              className={style.categoryItem}
            >
              General Health
            </li>
            <li
              onClick={() => handleCategoryClick("Healthy Bones")}
              className={style.categoryItem}
            >
              Healthy Bones
            </li>
            <li
              onClick={() => handleCategoryClick("Hepatitis B")}
              className={style.categoryItem}
            >
              Hepatitis B
            </li>
            <li
              onClick={() => handleCategoryClick("Men`s Health</")}
              className={style.categoryItem}
            >
              Men`s Health
            </li>
            <li
              onClick={() => handleCategoryClick("Pain Relief")}
              className={style.categoryItem}
            >
              Pain Relief
            </li>
            <li
              onClick={() => handleCategoryClick("Premature Ejaculation")}
              className={style.categoryItem}
            >
              Premature Ejaculation
            </li>
            <li
              onClick={() => handleCategoryClick("Skin Care")}
              className={style.categoryItem}
            >
              Skin Care
            </li>
            <li
              onClick={() => handleCategoryClick("Sleeping Aid")}
              className={style.categoryItem}
            >
              Sleeping Aid
            </li>
            <li
              onClick={() => handleCategoryClick("Vitamins")}
              className={style.categoryItem}
            >
              Vitamins
            </li>
            <li
              onClick={() => handleCategoryClick("Weight Loss")}
              className={style.categoryItem}
            >
              Weight Loss
            </li>
            <li
              onClick={() => handleCategoryClick(`Women's Health`)}
              className={style.categoryItem}
            >
              Women's Health
            </li>
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
