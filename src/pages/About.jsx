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
import i18next from "i18next";

const About = () => {
  const [t, i18n] = useTranslation();
  const [apiData, setApiData] = useState([]);
  const [getBlogsHome, setGetBlogsHome] = useState([]);
  const [getHistory, setGetHistory] = useState([]);
  const [preLoader, setPreLoader] = useState(true);
  const lang = localStorage.i18nextLng === "en" ? 1 : 2;

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
                      <span>{t("about_page_years")}</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="why-choose-right">
                    <div className="sec-title layout2">
                      <span>{t("about_page_why_choose")}</span>
                      <h2>{t("about_page_title1")}</h2>
                    </div>
                    <div className="counter-boxes">
                      <div className="count-box">
                        <CountUp className="counter" end={100}>
                          {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                          )}
                        </CountUp>
                        <sup>+</sup>
                        <h5>{t("about_page_projects_completed")}</h5>
                      </div>
                      <div className="count-box">
                        <CountUp className="counter" end={70}>
                          {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                          )}
                        </CountUp>
                        <sup>+</sup>
                        <h5>{t("about_page_satisfied_customers")}</h5>
                      </div>
                      <div className="count-box">
                        <CountUp className="counter" end={38}>
                          {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                          )}
                        </CountUp>
                        <sup>+</sup>
                        <h5>{t("about_page_experts")}</h5>
                      </div>
                    </div>
                    <p>{t("about_page_paragraph1")}</p>
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
                              __html: post.description,
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
                              __html: post.description,
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
