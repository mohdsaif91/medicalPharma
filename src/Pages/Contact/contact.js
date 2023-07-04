import React from "react";

import style from "./contact.module.scss";
import globalStyle from "../../app.module.scss";

const Contact = () => {
  return (
    <div className={style.contactContainer}>
      <div className={style.contactusHeading}>Contact us</div>
      <div className={style.contactusDetails}>
        <div className={style.contactusDetailsHeading}>Dear Customer,</div>
        <div className={style.contactusDetailsHeading}>
          If you like to talk to us, please fill out the form bellow, or call us
          toll free at:
          <a
            className={`${globalStyle.removeUnderLine} ${style.numberSpacing} ${style.fw600}`}
            href="tel:7577675778"
          >
            757-7675778 /
          </a>
          <a
            className={`${globalStyle.removeUnderLine} ${style.fw600}`}
            href="tel:2098502566"
          >
            209-850-2566
          </a>
        </div>
        <div className={style.contactusDetailsHeading}>
          If you have any quires related to products you can send the mail on
          <a
            className={`${globalStyle.removeUnderLine}`}
            href="mailto:support@unitedheatlhcarepharma.com"
          >
            {" "}
            support@unitedheatlhcarepharma.com
          </a>
        </div>
        <div className={style.contactusDetailsHeading}>
          Our call center is open Monday – Friday, 9 am – 6 pm (EDT)
        </div>
        <div className={style.contactusForm}>
          <div className={style.formItemRow}>
            <div className={style.formItem}>
              <input
                className={`${globalStyle.input} ${style.contactInput}`}
                placeholder="Your Name"
              />
            </div>
            <div className={style.formItem}>
              <input
                className={`${globalStyle.input} ${style.contactInput}`}
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className={style.formItemRow}>
            <textarea
              placeholder="Write your message here."
              className={style.textArea}
            />
          </div>
          <div className={style.formItemRow}>
            <button className={`${globalStyle.btn} ${style.sendBtn}`}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
