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

const Footer = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("http://apiv2.udtech-sa.com/api/WebSite/GetContactUs?languageId=1")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
                  <p>
                    Integer purus odio, placerat nec ande rhoncus in,
                    ullamcorper nec dolor. on aptent taciti sociosqu.
                  </p>
                  <ul className="social-media-icons p-0">
                    <li>
                      <a href={apiData.lurl}>
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href={apiData.turl}>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href={apiData.wurl}>
                        <FaGoogleDrive />
                      </a>
                    </li>
                    <li>
                      <a href={apiData.iurl}>
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Our Services</h4>
                  <ul className="footer-menu p-0">
                    <li>
                      <a href="/services">Strategy &amp; Research</a>
                    </li>
                    <li>
                      <a href="/services">Web Development</a>
                    </li>
                    <li>
                      <a href="/services">Web Solution</a>
                    </li>
                    <li>
                      <a href="/services">Digital Merketing</a>
                    </li>
                    <li>
                      <a href="/services">App Design</a>
                    </li>
                    <li>
                      <a href="/services">App Development</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Quick Links</h4>
                  <ul className="footer-menu p-0">
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      <a href="/projects">Project</a>
                    </li>
                    <li>
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/contact">Career</a>
                    </li>
                    <li>
                      <a href="/services">services</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Contacts</h4>
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
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Terms of Use</a>
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
