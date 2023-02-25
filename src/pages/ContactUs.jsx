import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import CallCenter from "../assests/img/call-center.png";
import { BsArrowRight } from "react-icons/bs";
import {
  FaFacebookF,
  FaGoogleDrive,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestP,
  FaPlay,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import axios from "axios";
const ContactUs = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });
  const [preLoader, setPreLoader] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setPreLoader(false);
    }, 3000);
  }, []);

  useEffect(() => {
    axios
      .get("http://apiv2.udtech-sa.com/api/WebSite/GetContactUs?languageId=1")
      .then((res) => {
        setApiData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [apiData, setApiData] = useState([]);

  return (
    <>
      <div>
        {preLoader && (
          <div className="preloader">
            <div className="loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <main className="creasoft-wrap">
          <div className="line_wrap">
            <div className="line_item"></div>
            <div className="line_item"></div>
            <div className="line_item"></div>
            <div className="line_item"></div>
            <div className="line_item"></div>
          </div>
          <section className="breadcrumbs">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="breadcrumb-wrapper">
                    <div className="breadcrumb-cnt">
                      <h1>Contact us</h1>
                      <span>
                        <a href="/">Home</a>
                        <BsArrowRight className="m-1" />
                        Contact us
                      </span>
                      <div className="breadcrumb-video">
                        <img src={VideoImg} alt="/" />
                        <div className="video-inner">
                          <a
                            className="video-popup"
                            href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                          >
                            <FaPlay />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="contact-area sec-mar">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  <div className="contact-left">
                    <div className="sec-title layout2">
                      <span>Get in touch</span>
                      <h2>Contact us if you have more questions.</h2>
                    </div>
                    <ul className="social-follow">
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
                    <div className="informations">
                      <div className="single-info">
                        <div className="icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="info">
                          <h3>Location</h3>
                          <p>{apiData.address}</p>
                        </div>
                      </div>
                      <div className="single-info">
                        <div className="icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="info">
                          <h3>Phone</h3>
                          <a href="tel:${apiData.mobile}">{apiData.mobile}</a>
                        </div>
                      </div>
                      <div className="single-info">
                        <div className="icon">
                          <FaRegEnvelope />
                        </div>
                        <div className="info">
                          <h3>Email</h3>
                          <a href={apiData.email}>{apiData.email}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.3503421209366!2d39.17810381421185!3d21.57224367437963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d19c274486c1%3A0x3bf6242bc980369c!2sUD-Tech%20United%20Diamond%20Technology!5e0!3m2!1sen!2seg!4v1677317107987!5m2!1sen!2seg"></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="getin-touch">
                <div className="row">
                  <div className="col-md-6 col-lg-7">
                    <div
                      className="contact-form wow animate fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <h3>Have Any Questions</h3>
                      <form action="#" method="post">
                        <div className="row">
                          <div className="col-12">
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter your name"
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              name="subject"
                              placeholder="Subject"
                            />
                          </div>
                          <div className="col-12">
                            <textarea
                              name="message"
                              cols="30"
                              rows="10"
                              placeholder="Your message"
                            ></textarea>
                            <input type="submit" value="Send Message" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-5 wow animate fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="call-banner">
                      <img src={CallCenter} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Newsletter />
        </main>
      </div>
    </>
  );
};

export default ContactUs;
