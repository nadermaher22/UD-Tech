import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import LogoDark from "../assests/img/logo.svg";
import LogoDarkMob from "../assests/img/logo-dark.svg";
import { BsPlus } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [t, i18n] = useTranslation();
  // navbar scroll
  const [onScroll, setOnScroll] = useState(false);
  const { userLang } = useParams();

  const addStickyClass = () => {
    if (window.scrollY >= 200) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };
  window.addEventListener("scroll", addStickyClass);
  // active class
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const [addClass, setAddClass] = useState(false);
  const AddClassSlide = () => {
    setAddClass(!addClass);
  };

  return (
    <div
      className={
        window.localStorage.i18nextLng === "en" ? "directionEN" : "directionAR"
      }
    >
      <header
        className={
          onScroll
            ? "header-area position_top sticky"
            : "header-area position_top"
        }
      >
        <div className="site-logo">
          <div className="logo">
            <Link to="/">
              <img src={LogoDark} alt="sd" />
            </Link>
          </div>
        </div>
        <div className="main-menu">
          <nav className={addClass ? "main-nav slidenav" : "main-nav"}>
            <div className="mobile-menu-logo">
              <Link to="/">
                <img src={LogoDarkMob} alt="logo" />
              </Link>
              <div className="remove">
                <BsPlus onClick={AddClassSlide} />
              </div>
            </div>
            <ul onClick={AddClassSlide}>
              <li>
                <Link to="/" className={url === "/" ? " active" : ""}>
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className={url === "/about" ? " active" : ""}>
                  {t("about_us")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={url === "/services" ? " active" : ""}
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={url === "/projects" ? " active" : ""}
                >
                  {t("our_projects")}
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className={url === "/clients" ? " active" : ""}
                >
                  {t("clients")}
                </Link>
              </li>
              <li>
                <Link
                  to="/mobile"
                  className={url === "/mobile" ? " active" : ""}
                >
                  {t("mobile_apps")}
                </Link>
              </li>
              <li>
                <Link
                  to="/electronic"
                  className={url === "/electronic" ? " active" : ""}
                >
                  {t("electronic_invoice")}
                </Link>
              </li>
              <li>
                <Link to="/blog" className={url === "/blog" ? " active" : ""}>
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={url === "/contact" ? " active" : ""}
                >
                  {t("contact_us")}
                </Link>
              </li>
              <li>
                {i18n.language === "en" && (
                  <Link
                    onClick={() => {
                      window.location.reload();
                      i18n.changeLanguage("ar");
                    }}
                  >
                    العربية
                  </Link>
                )}
              </li>
              <li>
                {i18n.language === "ar" && (
                  <Link
                    onClick={() => {
                      window.location.reload();
                      i18n.changeLanguage("en");
                    }}
                  >
                    English
                  </Link>
                )}
              </li>
            </ul>
            <div className="get-qoute d-flex justify-content-center d-lg-none d-block pt-50">
              <div className="cmn-btn">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <Link to="/contact" onClick={AddClassSlide}>
                  {t("company_profile")}
                </Link>
              </div>
              <div className="cmn-btn">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <Link to="/contact" onClick={AddClassSlide}>
                  {t("call_us")}
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="nav-right">
          <div className="get-qoute">
            <div className="cmn-btn">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <Link to="/about">{t("company_profile")}</Link>
            </div>

            <div className="cmn-btn">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <Link to="/contact"> {t("call_us")}</Link>
            </div>
          </div>
          <div className="mobile-menu" onClick={AddClassSlide}>
            <div to="" className="cross-btn">
              <span className="cross-top"></span>
              <span className="cross-middle"></span>
              <span className="cross-bottom"></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
