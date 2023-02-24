import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import CallCenter from "../assests/img/call-center.png";
import { BsArrowRight } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
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
                    <div className="informations">
                      <div className="single-info">
                        <div className="icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="info">
                          <h3>Location</h3>
                          <p>
                            168/170, Avenue 01, Old York Drive Rich Mirpur DOHS,
                            Bangladesh
                          </p>
                        </div>
                      </div>
                      <div className="single-info">
                        <div className="icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="info">
                          <h3>Phone</h3>
                          <a href="tel:05661111985">+880 566 1111 985</a>
                          <a href="tel:06571111576">+880 657 1111 576</a>
                        </div>
                      </div>
                      <div className="single-info">
                        <div className="icon">
                          <FaRegEnvelope />
                        </div>
                        <div className="info">
                          <h3>Email</h3>
                          <a href="tell:info@example.com">info@example.com</a>
                          <a href="tell:info@support.com">info@support.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe src="https://maps.google.com/maps?q=dhaka%20bangladesh&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
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
