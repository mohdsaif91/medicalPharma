import React from "react";

import style from "./about.module.scss";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutusHeadingContainer}>
        <div className={style.aboutusHeading}>About us</div>
        <div className={style.headingBorder} />
      </div>
      <div className={style.aboutDetails}>
        BB Meds is a well-established pharmacy service that deals primarily with
        generic medicines produced by quality-assured manufacturers from
        developing countries. This helps to minimize the self-cost without any
        impact on the efficiency or quality of the medicines. They say, the
        proof of the pudding is in the eating; this statement is especially true
        with what we see.
      </div>
      <div className={style.aboutDetails}>
        People flock to us, searching for a fast and fool-proof way to cut down
        their pharmacy shopping costs. BB Meds provides people from different
        parts of the world with this opportunity. This renowned approach lands
        us with thousands of customers monthly, and according to our internal
        statistics, 67% of our customers come back within a month after their
        initial order to become confirmed loyalists. Becoming a returned
        customer of BB Meds will help you reap a benefit down the road. This is
        the easiest way to partake of our awesome bonuses and special returned
        customer offers. Besides, if you subscribe to our newsletters, you will
        be the first to know about season’s offers and other such things and
        enjoy VIP club experience of BB Meds.
      </div>
      <div className={style.aboutDetails}>
        Disclaimer We are not in any way associated with copyright owners of any
        brand names. All trademarks belong to their respective owners. We are
        not affiliated with any such copyright holders. We do not encourage
        following any instructions or advice contained in information pieces
        published on our website. You should at all times have check-ups and
        follow-ups with your doctor prior to taking any drugs.
      </div>
    </div>
  );
};

export default About;
