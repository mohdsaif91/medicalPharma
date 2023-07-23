import React, { useLayoutEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";

import Phone from "../../images/icon/telephone.png";
import Cart from "../../images/icon/shopping-cart-empty-side-view.png";
import Auth from "../../images/icon/user.png";
import Logo from "../../images/logo.jpg";
import { masterData } from "../../data/masterData";
import navigationIcon from "../../images/icon/navigation-bar.png";
import crossIcon from "../../images/icon/close.png";

import style from "./header.module.scss";
// import globalStyle from "../../app.module.scss";

const Header = () => {
  const [selectValue, setSelectedValue] = useState(null);
  const [options, setOptions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const loacation = useLocation();

  useLayoutEffect(() => {
    if (options.length === 0) {
      setOptions(
        masterData.map((m) => {
          return { value: m.productId, label: m.name };
        })
      );
    }
  }, [options.length]);

  const handleChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    navigate(`/productView/${selectedOption.value}`);
  };

  return (
    <div className={style.headerContainer}>
      <div className={style.firstRow}>
        <div className={style.redHeading}>CORONAVIRUS! </div>
        <div className={style.redHeadingSub}>
          Prepare, don't panic. Here's what you need to keep the disease at bay.
          Know more
        </div>
      </div>
      <div className={style.secondRow}>
        <div className={style.primaryItems}>
          <div className={style.logoAndNameContainer}>
            <div>
              <img
                onClick={() => navigate("/")}
                alt=""
                className={style.logoImage}
                src={Logo}
              />
              <span className={style.mainLogoHeading}>united</span>
            </div>
            <div className={style.logoName}> healthcare pharmacy</div>
          </div>
          <div className={style.inputContainer}>
            <Select
              placeholder="Search Medicines"
              value={selectValue}
              onChange={handleChange}
              options={options}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
            />
          </div>
        </div>
        <div className={style.secondaryItems}>
          <div className={style.thirdRow}>
            <ul className={style.thirdRowItem}>
              <li className={style.listItem}>
                <Link
                  className={`${style.listItemLink} ${
                    loacation.pathname === "/" && style.active
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className={style.listItem}>
                <Link
                  className={`${style.listItemLink} ${
                    loacation.pathname === "/product" && style.active
                  }`}
                  to="/product"
                >
                  Product
                </Link>
              </li>
              <li className={style.listItem}>
                <Link
                  className={`${style.listItemLink} ${
                    loacation.pathname === "/about" && style.active
                  }`}
                  to="/about"
                >
                  About us
                </Link>
              </li>
              <li className={style.listItem}>
                <Link
                  className={`${style.listItemLink} ${
                    loacation.pathname === "/contact" && style.active
                  }`}
                  to="/contact"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.rigthCornerContainer}>
            <div className={style.iconContainer}>
              <img className={style.headerIcon} src={Phone} alt="phone" />
              <a className={style.removeUnderLine} href="tel:7577675778">
                757-7675778
              </a>
            </div>
            <div className={style.iconContainer}>
              <img className={style.headerIcon} src={Cart} alt="Cart" />
            </div>
            <div className={style.iconContainer}>
              <img className={style.headerIcon} src={Auth} alt="Auth" />
            </div>
          </div>
        </div>
        <div className={style.navigationIcon}>
          <img
            onClick={() => setMenuOpen(!menuOpen)}
            className={style.naviIcon}
            src={navigationIcon}
            alt=""
          />
        </div>
        <input
          id="menuOpner"
          className={style.menuCheckbox}
          type="checkbox"
          checked={menuOpen}
        />

        <div
          className={`${style.mobileNavigateionContainer} ${
            menuOpen ? style.disBloack : style.disNone
          }`}
        >
          <div className={style.menuContainer}>
            <div className={style.menuHeader}>
              <div className={style.headerText}>United Healtcare Pharmacy</div>
              <img
                onClick={() => setMenuOpen(false)}
                className={style.closeIcon}
                src={crossIcon}
                alt="close"
              />
            </div>
            <div className={style.MenuRoutList}>
              <div className={style.mobileLinkContainer}>
                <Link
                  onClick={() => setTimeout(() => setMenuOpen(false), 500)}
                  className={`${style.listItemLinkMobile} ${
                    loacation.pathname === "/" && style.active
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </div>
              <div className={style.mobileLinkContainer}>
                <Link
                  onClick={() => setTimeout(() => setMenuOpen(false), 500)}
                  className={`${style.listItemLinkMobile} ${
                    loacation.pathname === "/product" && style.active
                  }`}
                  to="/product"
                >
                  Product
                </Link>
              </div>
              <div className={style.mobileLinkContainer}>
                <Link
                  onClick={() => setTimeout(() => setMenuOpen(false), 500)}
                  className={`${style.listItemLinkMobile} ${
                    loacation.pathname === "/about" && style.active
                  }`}
                  to="/about"
                >
                  About us
                </Link>
              </div>
              <div className={style.mobileLinkContainer}>
                <Link
                  onClick={() => setTimeout(() => setMenuOpen(false), 500)}
                  className={`${style.listItemLinkMobile} ${
                    loacation.pathname === "/contact" && style.active
                  }`}
                  to="/contact"
                >
                  Contact us
                </Link>
              </div>
            </div>
            <div className={style.mobileNavContact}>
              <div className={style.iconContainerMobile}>
                <img
                  className={style.headerIconMobile}
                  src={Phone}
                  alt="phone"
                />
                <a className={style.removeUnderLine} href="tel:7577675778">
                  757-7675778
                </a>
              </div>
              <div className={style.iconContainerMobile}>
                <img className={style.headerIconMobile} src={Cart} alt="Cart" />
                <a className={style.removeUnderLine} href="/#">
                  Cart
                </a>
              </div>
              <div className={style.iconContainerMobile}>
                <img className={style.headerIconMobile} src={Auth} alt="Auth" />
                <a className={style.removeUnderLine} href="/#">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
