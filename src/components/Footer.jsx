import React, { useState } from "react";
import Logo from "../assests/img/logo.svg";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaRegEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src={Logo} alt="" />
                    </a>
                  </div>
                  <p>
                    Integer purus odio, placerat nec ande rhoncus in,
                    ullamcorper nec dolor. on aptent taciti sociosqu.
                  </p>
                  <ul className="social-media-icons p-0">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <FaPinterestP />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
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
                      <a href="service-details.html">Strategy &amp; Research</a>
                    </li>
                    <li>
                      <a href="service-details.html">Web Development</a>
                    </li>
                    <li>
                      <a href="service-details.html">Web Solution</a>
                    </li>
                    <li>
                      <a href="service-details.html">Digital Merketing</a>
                    </li>
                    <li>
                      <a href="service-details.html">App Design</a>
                    </li>
                    <li>
                      <a href="service-details.html">App Development</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Quick Links</h4>
                  <ul className="footer-menu p-0">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="project.html">Project</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Career</a>
                    </li>
                    <li>
                      <a href="services.html">services</a>
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
                      <a href="tel:05661111985">+880 566 1111 985</a>
                      <a href="tel:06571111576">+880 657 1111 576</a>
                    </div>
                  </div>
                  <div className="office-mail">
                    <div className="mail-icon">
                      <FaRegEnvelope />
                    </div>
                    <div className="email">
                      <a href="tell:info@example.com">info@example.com</a>
                      <a href="tell:info@support.com">info@support.com</a>
                    </div>
                  </div>
                  <div className="address">
                    <div className="address-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <p>168/170, Avenue 01, Mirpur DOHS, Bangladesh</p>
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
            <a href="https://wa.me/+9660599209361">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>

    </>
  );
};

export default Footer;
