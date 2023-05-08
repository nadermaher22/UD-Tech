import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import Banner1 from "../assests/img/why-1.jpg";
import Banner2 from "../assests/img/why-2.jpg";
import Banner3 from "../assests/img/why-3.jpg";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { FaPlay } from "react-icons/fa";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Logo from "../assests/img/logo.svg";

const About = () => {
  const [t] = useTranslation();
  const [apiData, setApiData] = useState([]);
  const [getBlogsHome, setGetBlogsHome] = useState([]);
  const [getHistory, setGetHistory] = useState([]);
  const [getFeature, setGetFeature] = useState([]);
  const [video, setVideo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [preLoader, setPreLoader] = useState(true);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;

  useEffect(() => {
    axios
      .get(`https://api.udtech-sa.com/api/WebSite/GetBlogs?languageId=${lang}`)
      .then((res) => {
        setGetBlogsHome(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetAboutUs?languageId=${lang}`
      )
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetCompanyHistory?languageId=${lang}`
      )
      .then((res) => {
        setGetHistory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetFeatures?languageId=${lang}`
      )
      .then((res) => {
        setGetFeature(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  useEffect(() => {
    axios
      .get("https://api.udtech-sa.com/api/WebSite/GetPagesVideo")
      .then((res) => {
        setVideo(res.data);
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

  useEffect(() => {
    setTimeout(function () {
      setPreLoader(false);
    }, 3000);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
                      <h1>{t("about_page_about_us")}</h1>
                      <span>
                        <a href="/">{t("home")}</a>
                        <BsArrowRight className="m-1" />
                        {t("about_page_about_us")}
                      </span>
                      <div
                        className="breadcrumb-video"
                        style={{
                          display: video.video_About ? "block" : "none",
                        }}
                      >
                        <img src={VideoImg} alt="" />
                        <div className="video-inner">
                          <Link
                            className="video-popup"
                            href="#"
                            onClick={() => setShowModal(true)}
                          >
                            <FaPlay />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Body>
              <video
                src={video.video_About}
                controls
                autoPlay
                className="bread-video"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>

          <section
            className="why-choose sec-mar wow animate animate__fadeIn"
            data-wow-duration="1500ms"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="why-choose-left">
                    <div className="choose-banner1">
                      <img
                        src={apiData.aboutPhotoPath}
                        alt=""
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                    {/* <div className="choose-banner2">
                      <img src={Banner2} alt="" />
                      <img src={Banner3} alt="" />
                    </div> */}
                    <div className="years">
                      <h5>15+</h5>
                      <span>{t("about_page_years")}</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="why-choose-right">
                    <div className="sec-title layout2">
                      <span>{t("about_page_why_choose")}</span>
                      <h2>{apiData.title}</h2>
                    </div>
                    <div className="counter-boxes">
                      {getFeature.map((feature) => {
                        return (
                          <div className="count-box" key={feature.id}>
                            <CountUp
                              className="counter"
                              end={`${feature.counter}`}
                            >
                              {({ countUpRef, start }) => (
                                <ReactVisibilitySensor
                                  onChange={start}
                                  delayedCall
                                >
                                  <span ref={countUpRef} />
                                </ReactVisibilitySensor>
                              )}
                            </CountUp>
                            <sup>+</sup>
                            <h5>{feature.title}</h5>
                          </div>
                        );
                      })}
                    </div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `<div>${apiData.aboutDescription}</div>`,
                      }}
                    ></p>
                    <div className="buttons-group">
                      <span>{t("about_page_superior_support")}</span>
                      <span>{t("about_page_unique_design")}</span>
                      <span>{t("about_page_clean_code")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="about-area sec-mar-bottom wow animate animate__slideInUp"
            data-wow-duration="1500ms"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 or-2">
                  <div className="sec-title layout2">
                    <span>{t("about_page_get_to_know")}</span>
                    <h2>{t("about_page_about_us")}</h2>
                  </div>
                  <div className="about-left">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<div>${apiData.missionDescription}</div>`,
                      }}
                    ></div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<div>${apiData.visionDescription}</div>`,
                      }}
                    ></div>
                    {/* 
                    <div className="company-since">
                      <div className="company-logo">
                        <img src={Logo} alt="" />
                      </div>
                      <div>Best creativ</div>
                    </div> */}
                    <div className="company-since">
                      <div className="company-logo">
                        <img src={Logo} alt="" />
                      </div>
                      <strong>#1</strong>
                      <h4>
                        {t("about_page_best_agency")}
                        <span>{t("about_page_since")}</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 or-1">
                  <div className="about-right">
                    <div className="banner-1">
                      <img src={apiData.missionPhotoPath} alt="" />
                    </div>
                    <div className="buttons">
                      <div className="cmn-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <Link to="/contact">{t("call_us")}</Link>
                      </div>
                      <div className="cmn-btn ">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <Link to="/about">{t("company_profile")}</Link>
                      </div>
                    </div>
                    {/* 
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<div>${apiData.visionDescription}</div>`,
                      }}
                    ></div> */}
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
                  <span>{t("about_page_our_history")}</span>
                  <h2>{t("about_page_ud_history")}</h2>
                </div>
              </div>
              {getHistory.map((post, id) =>
                id % 2 ? (
                  <div className="single-history" key={post.id}>
                    <div
                      className="history wow animate animate__fadeInLeft"
                      data-wow-duration="1500ms"
                    >
                      <div className="circle">
                        <div className="inner"></div>
                      </div>
                      <div className="history-thumb">
                        <img src={post.photoPath} alt="" />
                      </div>
                    </div>
                    <div
                      className="history wow animate animate__fadeInRight"
                      data-wow-duration="1500ms"
                    >
                      <div className="circle">
                        <div className="inner"></div>
                      </div>
                      <div className="history-cnt">
                        <div className="history-cnt-inner">
                          <span>{post.year}</span>
                          <h4>{post.title}</h4>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: `<div>${post.description}</div>`,
                            }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="single-history" key={post.id}>
                    <div
                      className="history wow animate animate__fadeInLeft"
                      data-wow-duration="1500ms"
                    >
                      <div className="circle">
                        <div className="inner"></div>
                      </div>
                      <div className="history-cnt">
                        <div className="history-cnt-inner">
                          <span>{post.year}</span>
                          <h4>{post.title}</h4>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: `<div>${post.description}</div>`,
                            }}
                          ></p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="history wow animate animate__fadeInRight"
                      data-wow-duration="1500ms"
                    >
                      <div className="circle">
                        <div className="inner"></div>
                      </div>
                      <div className="history-thumb">
                        <img src={post.photoPath} alt="" />
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
          {/* Testimonials */}
          <Testimonials />
          <section className="blog-area">
            <div className="container">
              <div
                className="title-wrap wow animate animate__fadeInUp"
                data-wow-duration="1500ms"
              >
                <div className="sec-title">
                  <span>{t("home_blog_all")}</span>
                  <h2>{t("home_blog_latest")}</h2>
                  <p>{t("home_blog_paragraph")}</p>
                </div>
              </div>
              <div className="row gy-4">
                {getBlogsHome.slice(0, 3).map((blog) => {
                  return (
                    <div
                      className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                      data-wow-duration="1500ms"
                      key={blog.id}
                    >
                      <div className="single-blog layout2">
                        <div className="blog-thumb">
                          <a href={`/blog-details/${blog.id}`}>
                            <img src={blog.photoPath} alt="" />
                          </a>
                          <div className="tag">
                            <a href="/projects">{blog.category}</a>
                          </div>
                        </div>
                        <div className="blog-inner">
                          <div className="author-date">
                            <a href="/">By, {blog.blogAuthor}</a>
                            <a href="/">{blog.blogDate}</a>
                          </div>
                          <h4>
                            <a href={`/blog-details/${blog.id}`}>
                              {blog.title}
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
