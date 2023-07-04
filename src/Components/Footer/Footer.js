import React from "react";

import Logo from "../../images/logo.jpg";
import Visa from "../../images/visaOg.png";
import masterCard from "../../images/masterCard.png";
import wUnion from "../../images/wunion.png";
import moneyGram from "../../images/moneyGram.png";
import Facebook from "../../images/icon/facebook.png";
import Instagram from "../../images/icon/instagram.png";

import style from "./fotter.module.scss";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.conatinerOne}>
        <div className={style.footerLogoContainer}>
          <img src={Logo} alt="" className={style.footerLogo} />
        </div>
        <div className={style.footerLinks}>
          <div>Refund and Shipping policy</div>
        </div>
        <div className={style.mobileMoneyContainer}>
          <div className={style.mobileEmailContainer}>
            <a
              className={style.mobileNumber}
              href="mailto:support@unitedheatlhcarepharma.com"
            >
              support@unitedheatlhcarepharma.com
            </a>
          </div>
          <div className={style.mobileEmailContainer}>
            <div className={style.mobileLabel}>Call us</div>
            <a className={style.mobileNumber} href="tel:7577675778">
              757-7675778
            </a>
          </div>
          <div className={style.paymentContainer}>
            <img className={style.paymentMedium} alt="" src={Visa} />
            <img className={style.paymentMedium} alt="" src={masterCard} />
            <img className={style.paymentMedium} alt="" src={wUnion} />
            <img className={style.paymentMedium} alt="" src={moneyGram} />
          </div>
        </div>
      </div>
      <div className={style.conatinerTwo}>
        <div className={style.copyRightDescription}>
          Disclaimer BB Meds have taken reasonable care in producing the
          information on this website for your convenience. The information
          provided is intended solely as a guide. Please seek the advice of your
          Pharmacist to determine whether a particular service will be of value
          to you. All health facts and information contained herein should not
          be a substitute for medical advice. The use of this site is subject to
          these Terms and Conditions.
        </div>
      </div>
      <div className={style.conatinerThree}>
        <img
          alt=""
          src={Facebook}
          className={`${style.footerIcon} ${style.footerIconMargin}`}
        />
        <img alt="" src={Instagram} className={style.footerIcon} />
      </div>
      <div className={style.conatinerFour}>
        <div className={style.copyRightLabel}>
          © Copyright All rights reserved 2021, BB Meds, 3012 Bern, CHE.
        </div>
      </div>
    </div>
  );
};

export default Footer;
