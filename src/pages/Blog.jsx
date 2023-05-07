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
import ReactPaginate from "react-paginate";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Newsletter from "../components/Newsletter";

const Blog = () => {
  const [apiData, setApiData] = useState([]);
  const [t] = useTranslation();
  const [getContact, setGetContact] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
  const [video, setVideo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.udtech-sa.com/api/WebSite/GetBlogs?languageId=${lang}`)
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
  }, []);

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
                      <h1>{t("blog")}</h1>
                      <span>
                        <a href="/">{t("home")}</a>
                        <BsArrowRight className="m-1" />
                        {t("blog")}
                      </span>
                      <div
                        className="breadcrumb-video"
                        style={{
                          display: video.video_Blogs ? "block" : "none",
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
                src={video.video_Blogs}
                controls
                autoPlay
                className="bread-video"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
          <section className="blog-grid sec-mar-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  {/* <div className="sidebar-widget">
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
                  </div> */}
                  {/* <div className="sidebar-widget">
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
                  </div> */}
                  <div className="sidebar-widget">
                    <h4>{t("blog_page_new_post")}</h4>
                    {apiData.slice(0, 3).map((tinyBlog) => {
                      return (
                        <div className="recent-post" key={tinyBlog.id}>
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
                  {/* <div className="sidebar-widget">
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
                  </div> */}
                  <div className="sidebar-banner mb-5">
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
                      {apiData
                        .slice(currentPage * 5, currentPage * 5 + 5)
                        .map((e) => {
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
                  <ReactPaginate
                    pageCount={Math.ceil(apiData.length / 5)}
                    onPageChange={(data) => setCurrentPage(data.selected)}
                    containerClassName={"load-more paginations ms-3"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    activeClassName={"active"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    disabledClassName={"disabled"}
                  />
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

export default Blog;
