import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import Banner1 from "../assests/img/why-1.jpg";
import Banner2 from "../assests/img/why-2.jpg";
import Banner3 from "../assests/img/why-3.jpg";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import Logo from "../assests/img/logo-dark.svg";
import AboutBanner from "../assests/img/about-baner-1.jpg";
import { FaPlay } from "react-icons/fa";
import Features from "../components/Features";
import TimeLine1 from "../assests/img/timeline-1.jpg";
import TimeLine2 from "../assests/img/timeline-2.jpg";
import TimeLine3 from "../assests/img/timeline-3.jpg";
import TimeLine4 from "../assests/img/timeline-4.jpg";
import Testimonials from "../components/Testimonials";
import Blog1 from "../assests/img/blog/blog-1.jpg";
import Blog2 from "../assests/img/blog/blog-1.jpg";
import Blog3 from "../assests/img/blog/blog-1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import { Modal } from "bootstrap";
import axios from "axios";

const About = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("http://apiv2.udtech-sa.com/api/WebSite/GetAboutUs?languageId=1")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
    window.scrollTo(0, 0);
  });
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <div className="about">
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
                      <h1>About us</h1>
                      <span>
                        <a href="/">Home</a>
                        <BsArrowRight className="m-1" />
                        About us
                      </span>
                      <div className="breadcrumb-video">
                        <div className="video-inner">
                          <a
                            className="video-popup"
                            href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                          >
                            <FaPlay />
                          </a>
                        </div>

                        <img src={VideoImg} alt="" />
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
          <section
            className="why-choose sec-mar wow animate animate__fadeIn"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="why-choose-left">
                    <div className="choose-banner1">
                      <img src={Banner1} alt="" />
                    </div>
                    <div className="choose-banner2">
                      <img src={Banner2} alt="" />
                      <img src={Banner3} alt="" />
                    </div>
                    <div className="years">
                      <h5>20+</h5>
                      <span>Years</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="why-choose-right">
                    <div className="sec-title layout2">
                      <span>Why Choose</span>
                      <h2>
                        Phasellus tristique a nisi etal tristique Cras interdum.
                      </h2>
                    </div>
                    <div className="counter-boxes">
                      <div className="count-box">
                        <CountUp className="counter" end={150}>
                          {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                          )}
                        </CountUp>
                        <sup>+</sup>
                        <h5>Project Completed</h5>
                      </div>
                      <div className="count-box">
                        <CountUp className="counter" end={250}>
                          {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                          )}
                        </CountUp>
                        <sup>+</sup>
                        <h5>Satisfied Clients</h5>
                      </div>
                      <div className="count-box">
                        <CountUp className="counter" end={50}>
                          {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                          )}
                        </CountUp>
                        <sup>+</sup>
                        <h5>Expert Teams</h5>
                      </div>
                    </div>
                    <p>
                      Integer purus odio, placerat nec rhoncus in, ullamcorper
                      nec dolor. Class onlin aptent taciti sociosqu ad litora
                      torquent per conubia nostra, per inceptos only himenaeos.
                      Praesent nec neque at dolor venenatis consectetur eu quis
                      ex. the Donec lacinia placerat felis non aliquam.Mauris
                      nec justo vitae ante auctor tol euismod sit amet non
                      ipsum. Praesent commodo at massa eget suscipit. Utani
                      vitae enim velit. Ut ut posuere orci, id dapibus odio.
                    </p>
                    <div className="buttons-group">
                      <span>24/7 Support</span>
                      <span>Unique Design</span>
                      <span>Clean Code Develope</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="about-area sec-mar-bottom wow animate animate__slideInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 or-2">
                  <div className="sec-title layout2">
                    <div
                      dangerouslySetInnerHTML={{ __html: apiData.title }}
                    ></div>
                  </div>
                  <div className="about-left">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: apiData.aboutDescription,
                      }}
                    ></div>

                    <div className="company-since">
                      <div className="company-logo">
                        <img src={apiData.missionPhotoPath} alt="" />
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: apiData.missionDescription,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 or-1">
                  <div className="about-right">
                    <div className="banner-1">
                      <img src={apiData.visionPhotoPath} alt="" />
                    </div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: apiData.visionDescription,
                      }}
                    ></div>
                    {/* <div className="buttons">
                      <div className="cmn-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <a href="/contact">Call Us</a>
                      </div>
                      <div className="cmn-btn ">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <a href="/team">Company Profile</a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* features */}
          <Features />
          <section className="history-area sec-mar">
            <div className="container">
              <div className="title-wrap">
                <div className="sec-title">
                  <span>History</span>
                  <h2>Creasoft History</h2>
                </div>
              </div>
              <div className="single-history">
                <div
                  className="history wow animate animate__fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="circle">
                    <div className="inner"></div>
                  </div>
                  <div className="history-thumb">
                    <img src={TimeLine1} alt="" />
                  </div>
                </div>
                <div
                  className="history wow animate animate__fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="circle">
                    <div className="inner"></div>
                  </div>
                  <div className="history-cnt">
                    <div className="history-cnt-inner">
                      <span>2020</span>
                      <h4>We Are Open Our Office</h4>
                      <p>
                        Integer purus odio, placerat nec rhoncus in, ullamcorper
                        nec aptent taciti sociosqu ad litora torquent per
                        conubia nostra, himenaeos. Praesent nec neque at dolor
                        venenatis thoseaol Donec lacinia placerat felis non
                        aliquam.Mauris nec justo ag euismod sit amet non ipsum.
                        Praesent commodo at massa vitae enim velit. Ut ut
                        posuere orci, id dapibus odio. himenaeos. Praesent nec
                        neque at dolor venenatis thoseaol Donec lacinia placerat
                        felis non aliquam.Mauris nec justo ag euismod sit amet
                        non ipsum. Praesent commodo at massa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-history">
                <div
                  className="history wow animate animate__fadeInLeft"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="circle">
                    <div className="inner"></div>
                  </div>
                  <div className="history-cnt">
                    <div className="history-cnt-inner">
                      <span>2021</span>
                      <h4>We Work Hard for design</h4>
                      <p>
                        Integer purus odio, placerat nec rhoncus in, ullamcorper
                        nec aptent taciti sociosqu ad litora torquent per
                        conubia nostra, himenaeos. Praesent nec neque at dolor
                        venenatis thoseaol Donec lacinia placerat felis non
                        aliquam.Mauris nec justo ag euismod sit amet non ipsum.
                        Praesent commodo at massa vitae enim velit. Ut ut
                        posuere orci, id dapibus odio. himenaeos. Praesent nec
                        neque at dolor venenatis thoseaol Donec lacinia placerat
                        felis non aliquam.Mauris nec justo ag euismod sit amet
                        non ipsum. Praesent commodo at massa
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="history wow animate animate__fadeInRight"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="circle">
                    <div className="inner"></div>
                  </div>
                  <div className="history-thumb">
                    <img src={TimeLine2} alt="" />
                  </div>
                </div>
              </div>
              <div className="single-history">
                <div
                  className="history wow animate animate__fadeInLeft"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="circle">
                    <div className="inner"></div>
                  </div>
                  <div className="history-thumb">
                    <img src={TimeLine3} alt="" />
                  </div>
                </div>
                <div
                  className="history wow animate animate__fadeInRight"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="circle">
                    <div className="inner"></div>
                  </div>
                  <div className="history-cnt">
                    <div className="history-cnt-inner">
                      <span>2022</span>
                      <h4>We Are Success And Win</h4>
                      <p>
                        Integer purus odio, placerat nec rhoncus in, ullamcorper
                        nec aptent taciti sociosqu ad litora torquent per
                        conubia nostra, himenaeos. Praesent nec neque at dolor
                        venenatis thoseaol Donec lacinia placerat felis non
                        aliquam.Mauris nec justo ag euismod sit amet non ipsum.
                        Praesent commodo at massa vitae enim velit. Ut ut
                        posuere orci, id dapibus odio. himenaeos. Praesent nec
                        neque at dolor venenatis thoseaol Donec lacinia placerat
                        felis non aliquam.Mauris nec justo ag euismod sit amet
                        non ipsum. Praesent commodo at massa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-history">
                <div
                  className="history wow animate animate__fadeInLeft"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  <div className="circle">
                    <div className="inner"></div>
                  </div>
                  <div className="history-cnt">
                    <div className="history-cnt-inner">
                      <span>2023</span>
                      <h4>Many Award Win</h4>
                      <p>
                        Integer purus odio, placerat nec rhoncus in, ullamcorper
                        nec aptent taciti sociosqu ad litora torquent per
                        conubia nostra, himenaeos. Praesent nec neque at dolor
                        venenatis thoseaol Donec lacinia placerat felis non
                        aliquam.Mauris nec justo ag euismod sit amet non ipsum.
                        Praesent commodo at massa vitae enim velit. Ut ut
                        posuere orci, id dapibus odio. himenaeos. Praesent nec
                        neque at dolor venenatis thoseaol Donec lacinia placerat
                        felis non aliquam.Mauris nec justo ag euismod sit amet
                        non ipsum. Praesent commodo at massa
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="history wow animate animate__fadeInRight"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  <div className="circle">
                    <div className="inner"></div>
                  </div>
                  <div className="history-thumb">
                    <img src={TimeLine4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonials */}
          <Testimonials />
          <section className="blog-area">
            <div className="container">
              <div
                className="title-wrap wow animate animate__fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="sec-title">
                  <span>All Blog</span>
                  <h2>Latest Post</h2>
                  <p>
                    Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                    fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                    convallis sapien, quis commodo libero.
                  </p>
                </div>
              </div>
              <div className="row gy-4">
                <div
                  className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-blog">
                    <div className="blog-thumb">
                      <a href="/blog-details">
                        <img src={Blog1} alt="" />
                      </a>
                      <div className="tag">
                        <a href="/blog-details">UI/UX</a>
                      </div>
                    </div>
                    <div className="blog-inner">
                      <div className="author-date">
                        <a href="/">By, Admin</a>
                        <a href="/">22.02.2022</a>
                      </div>
                      <h4>
                        <a href="/blog-details">
                          Quisque malesuada sapien and Donec sed nunc.
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-blog">
                    <div className="blog-thumb">
                      <a href="/blog-details">
                        <img src={Blog2} alt="" />
                      </a>
                      <div className="tag">
                        <a href="/blog-details">Software</a>
                      </div>
                    </div>
                    <div className="blog-inner">
                      <div className="author-date">
                        <a href="/">By, Admin</a>
                        <a href="/">22.02.2022</a>
                      </div>
                      <h4>
                        <a href="/blog-details">
                          Suspendisse pretium magna qu nisl egestas porttitor.
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-blog">
                    <div className="blog-thumb">
                      <a href="/blog-details">
                        <img src={Blog3} alt="" />
                      </a>
                      <div className="tag">
                        <a href="/blog-details">Dashbord</a>
                      </div>
                    </div>
                    <div className="blog-inner">
                      <div className="author-date">
                        <a href="/">By, Admin</a>
                        <a href="/">22.02.2022</a>
                      </div>
                      <h4>
                        <a href="/blog-details">
                          In a augue sit amet erat Suspel eleifend suscipit
                          issen.
                        </a>
                      </h4>
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

export default About;
