import React, { useEffect, useState } from "react";
import Logo from "../assests/img/logo.svg";
import {
  FaTwitter,
  FaInstagram,
  FaRegEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGoogleDrive,
} from "react-icons/fa";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Footer = () => {
  const [t, i18n] = useTranslation();
  const [apiData, setApiData] = useState([]);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetContactUs?languageId=${lang}`
      )
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="/">
                      <img src={Logo} alt="" />
                    </a>
                  </div>
                  <p>{t("footer_paragraph1")}</p>
                  <ul className="social-media-icons p-0">
                    <li>
                      <a href={apiData.lurl} target="_blank" rel="noreferrer">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href={apiData.turl} target="_blank" rel="noreferrer">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href={apiData.wurl} target="_blank" rel="noreferrer">
                        <FaGoogleDrive />
                      </a>
                    </li>
                    <li>
                      <a href={apiData.iurl} target="_blank" rel="noreferrer">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>{t("footer_our_services")}</h4>
                  <ul className="footer-menu p-0">
                    <li>
                      <a href="/services">{t("footer_our_ui_ux")}</a>
                    </li>
                    <li>
                      <a href="/services">{t("footer_our_mobile_apps")}</a>
                    </li>
                    <li>
                      <a href="/services">{t("footer_our_websites")}</a>
                    </li>
                    <li>
                      <a href="/services">{t("footer_our_ecommerce")}</a>
                    </li>
                    <li>
                      <a href="/services">{t("footer_our_ERP_by_odoo")}</a>
                    </li>
                    <li>
                      <a href="/services">{t("footer_our_customized")}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>{t("footer_our_quick_links")}</h4>
                  <ul className="footer-menu p-0">
                    <li>
                      <a href="/about">{t("about_us")}</a>
                    </li>
                    <li>
                      <a href="/services">{t("services")}</a>
                    </li>
                    <li>
                      <a href="/projects">{t("our_projects")}</a>
                    </li>
                    <li>
                      <a href="/blog">{t("blog")}</a>
                    </li>
                    <li>
                      <a href="/contact">{t("contact_us")}</a>
                    </li>
                    <li>
                      <a href="/services">{t("services")}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>{t("footer_our_contacts")}</h4>
                  <div className="number">
                    <div className="num-icon">
                      <FaPhoneAlt />
                    </div>
                    <div className="phone">
                      <a href={`tel:${apiData.mobile}`}>{apiData.mobile}</a>
                    </div>
                  </div>
                  <div className="office-mail">
                    <div className="mail-icon">
                      <FaRegEnvelope />
                    </div>
                    <div className="email">
                      <a href={`mailto:${apiData.email}`}>{apiData.email}</a>
                    </div>
                  </div>
                  <div className="address">
                    <div className="address-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <p>{apiData.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-12 col-md-4 col-lg-4 col-xl-5">
                <div className="copy-txt">
                  <span>
                    Copyright 2023 <b>UD-Tech Software Company</b>
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-8 col-xl-7">
                <ul className="footer-bottom-menu">
                  <li>
                    <a href="/">{t("footer_privacy")}</a>
                  </li>
                  <li>
                    <a href="/">{t("footer_terms")}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="whatsapp-button EN">
        <ul className="social-media-icons">
          <li>
            <a href={`https://wa.me/${apiData.mobile}`}>
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
