import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowLeft, BsArrowRight, BsSearch } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import WidgetBanner from "../assests/img/widget-banner-bg.jpg";
import ArrowAngle from "../assests/img/arrow-angle.png";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const [apiData, setApiData] = useState([]);
  const [t] = useTranslation();
  const [getContact, setGetContact] = useState([]);
  const lang = localStorage.i18nextLng === "en" ? 1 : 2;

  useEffect(() => {
    axios
      .get(`https://api.udtech-sa.com/api/WebSite/GetBlogs?languageId=${lang}`)
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetContactUs?languageId=${lang}`,
        {
          params: {
            languageId: lang,
            // languageId: 1,
          },
        }
      )
      .then((res) => {
        setGetContact(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
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
                      <h1>{t("blog")}</h1>
                      <span>
                        <a href="/">{t("home")}</a>
                        <BsArrowRight className="m-1" />
                        {t("blog")}
                      </span>
                      <div className="breadcrumb-video">
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
          <section className="blog-grid sec-mar-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="sidebar-widget">
                    <div className="widget-search">
                      <form action="#" method="post">
                        <input
                          type="text"
                          name="search"
                          placeholder={t("blog_page_search")}
                        />
                        <button type="submit">
                          <BsSearch />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="sidebar-widget">
                    <h4>{t("blog_page_category")}</h4>
                    <ul className="category">
                      <li>
                        <BsArrowRight />
                        <a href="/projects">{t("blog_page_web")}</a>
                      </li>
                      <li>
                        <BsArrowRight />
                        <a href="/projects">{t("blog_page_app")}</a>
                      </li>
                      <li>
                        <BsArrowRight />
                        <a href="/projects">{t("blog_page_software")}</a>
                      </li>
                      <li>
                        <BsArrowRight />
                        <a href="/projects">{t("blog_page_motion")}</a>
                      </li>
                      <li>
                        <BsArrowRight />
                        <a href="/projects">{t("blog_page_ui_ux")}</a>
                      </li>
                      <li>
                        <BsArrowRight />
                        <a href="/projects">{t("blog_page_graphic")}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-widget">
                    <h4>{t("blog_page_new_post")}</h4>
                    {apiData.slice(0, 3).map((tinyBlog) => {
                      return (
                        <div className="recent-post">
                          <div className="recent-thumb">
                            <a href={`/blog-details/${tinyBlog.id}`}>
                              <img src={tinyBlog.photoPath} alt="" />
                            </a>
                          </div>
                          <div className="recent-post-cnt">
                            <span>{apiData.blogDate}</span>
                            <h5>
                              <a href={`/blog-details/${tinyBlog.id}`}>
                                {tinyBlog.title}
                              </a>
                            </h5>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="sidebar-widget">
                    <h4>{t("blog_page_hashtag")}</h4>
                    <ul className="tag-list">
                      <li>
                        <Link to="/projects">Website</Link>
                      </li>
                      <li>
                        <Link to="/projects">Web Design</Link>
                      </li>
                      <li>
                        <Link to="/projects">Development</Link>
                      </li>
                      <li>
                        <Link to="/projects">Graphic Design</Link>
                      </li>
                      <li>
                        <Link to="/projects">Graphic</Link>
                      </li>
                      <li>
                        <Link to="/projects">UI/UX Design</Link>
                      </li>
                      <li>
                        <Link to="/projects">Activities</Link>
                      </li>
                      <li>
                        <Link to="/projects">Software Design</Link>
                      </li>
                      <li>
                        <Link to="/projects">3d Design</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-banner">
                    <img src={WidgetBanner} alt="" />
                    <div className="banner-inner">
                      <h3>
                        {t("blog_page_any_project")}
                        <span>{t("blog_page_call_now")}</span>
                        <img className="angle" src={ArrowAngle} alt="" />
                      </h3>
                      <a href={`tel:${getContact.mobile}`}>
                        {getContact.mobile}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="blog-item-grid">
                    <div className="row g-4">
                      {apiData.map((e) => {
                        return (
                          <div className="col-md-6" key={e.id}>
                            <div className="single-blog h-100">
                              <div className="blog-thumb">
                                <Link Link to={`/blog-details/${e.id}`}>
                                  <img src={e.photoPath} alt="" />
                                </Link>
                                <div className="tag">
                                  <Link to={`/blog-details/${e.id}`}>
                                    {e.category}
                                  </Link>
                                </div>
                              </div>
                              <div className="blog-inner">
                                <div className="author-date">
                                  <Link to={"/blog-details/" + e.id}>
                                    {t("by")}, {e.blogAuthor}
                                  </Link>
                                  <Link to={`/blog-details/${e.id}`}>
                                    {e.blogDate}
                                  </Link>
                                </div>
                                <h4>
                                  <Link to={`/blog-details/${e.id}`}>
                                    {e.title}
                                  </Link>
                                </h4>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="load-more">
                    <ul className="paginations">
                      <li>
                        <a href="/">
                          <BsArrowLeft />
                        </a>
                      </li>
                      <li className="active">
                        <a href="/">01</a>
                      </li>
                      <li>
                        <a href="/">02</a>
                      </li>
                      <li>
                        <a href="/">03</a>
                      </li>
                      <li>
                        <a href="/">04</a>
                      </li>
                      <li>
                        <a href="/">
                          <BsArrowRight />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Blog;
