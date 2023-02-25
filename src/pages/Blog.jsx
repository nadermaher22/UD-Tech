import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowLeft, BsArrowRight, BsSearch } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import TinyBlog1 from "../assests/img/blog/blog-tiny-1.jpg";
import TinyBlog2 from "../assests/img/blog/blog-tiny-2.jpg";
import TinyBlog3 from "../assests/img/blog/blog-tiny-3.jpg";
import WidgetBanner from "../assests/img/widget-banner-bg.jpg";
import ArrowAngle from "../assests/img/arrow-angle.png";
import { Link } from "react-router-dom";
import axios from "axios";
const Blog = () => {
  useEffect(() => {
    axios
      .get("http://apiv2.udtech-sa.com/api/WebSite/GetClients?languageId=1")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [apiData, setApiData] = useState([]);
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
                      <h1>Blog sidebar</h1>
                      <span>
                        <a href="/">Home</a>
                        <BsArrowRight className="m-1" />
                        Blog sidebar
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
                          placeholder="Search Here"
                        />
                        <button type="submit">
                          <BsSearch />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="sidebar-widget">
                    <h4>Category</h4>
                    <ul className="category">
                      <li>
                        <a href="/projects">
                          Web Design
                          <BsArrowRight />
                        </a>
                      </li>
                      <li>
                        <a href="/projects">
                          Apps Development <BsArrowRight />
                        </a>
                      </li>
                      <li>
                        <a href="/projects">
                          Software Development <BsArrowRight />
                        </a>
                      </li>
                      <li>
                        <a href="/projects">
                          Motion Graphics <BsArrowRight />
                        </a>
                      </li>
                      <li>
                        <a href="/projects">
                          UI/UX Design <BsArrowRight />
                        </a>
                      </li>
                      <li>
                        <a href="/projects">
                          Graphic Design <BsArrowRight />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-widget">
                    <h4>Newest Post</h4>
                    <div className="recent-post">
                      <div className="recent-thumb">
                        <a href="/blog-details">
                          <img src={TinyBlog1} alt="" />
                        </a>
                      </div>
                      <div className="recent-post-cnt">
                        <span>11.12.22</span>
                        <h5>
                          <a href="/blog-details">
                            Grant Distributions Conti nu to Incr Ease.
                          </a>
                        </h5>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="recent-thumb">
                        <a href="/blog-details">
                          <img src={TinyBlog2} alt="" />
                        </a>
                      </div>
                      <div className="recent-post-cnt">
                        <span>30.10.2022</span>
                        <h5>
                          <a href="/blog-details">
                            Distributions Conti nu to grant Incr Ease.
                          </a>
                        </h5>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="recent-thumb">
                        <a href="/blog-details">
                          <img src={TinyBlog3} alt="" />
                        </a>
                      </div>
                      <div className="recent-post-cnt">
                        <span>20.08.2022</span>
                        <h5>
                          <a href="/blog-details">
                            Conti nu to Incr Ease malesuada sapien sed.
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget">
                    <h4>Post Tag</h4>
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
                        Any Project <span>Call Now.</span>
                        <img className="angle" src={ArrowAngle} alt="" />
                      </h3>
                      <a href="tel:11231231234">+1-123-123-1234</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="blog-item-grid">
                    <div className="row g-4">
                      {apiData.map((e) => {
                        return (
                          <div className="col-md-6" key={e.id}>
                            <div className="single-blog">
                              <div className="blog-thumb">
                                <a href="/blog-details">
                                  <img src={e.photoPath} alt="" />
                                </a>
                                <div className="tag">
                                  <a href="/projects">{e.title}</a>
                                </div>
                              </div>
                              <div className="blog-inner">
                                <div className="author-date">
                                  <a href="/">By, Admin</a>
                                  <a href="/">23.02.2022</a>
                                </div>
                                <h4>
                                  <a href="/blog-details">
                                    Quisque malesuada sapien and Donec sed nunc.
                                  </a>
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
                      <li>
                        <a href="/">01</a>
                      </li>
                      <li className="active">
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
          <Newsletter />
        </main>
      </div>
    </>
  );
};

export default Blog;
