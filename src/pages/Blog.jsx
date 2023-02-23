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
import Blog1 from "../assests/img/blog/blog-1.jpg";
import Blog2 from "../assests/img/blog/blog-2.jpg";
import Blog3 from "../assests/img/blog/blog-3.jpg";
import Blog4 from "../assests/img/blog/blog-4.jpg";
import Blog5 from "../assests/img/blog/blog-5.jpg";
import Blog6 from "../assests/img/blog/blog-5.jpg";
import Blog7 from "../assests/img/blog/blog-7.jpg";
import Blog8 from "../assests/img/blog/blog-8.jpg";
import Blog9 from "../assests/img/blog/blog-9.jpg";
import Blog10 from "../assests/img/blog/blog-10.jpg";
import WidgetBanner from "../assests/img/widget-banner-bg.jpg";
import ArrowAngle from "../assests/img/arrow-angle.png";
import { Link } from "react-router-dom";
const Blog = () => {
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
                        <a href="index.html">Home</a>
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
                        <a href="project.html">
                          Web Design
                          <BsArrowRight />
                        </a>
                      </li>
                      <li>
                        <a href="project.html">
                          Apps Development <BsArrowRight />
                        </a>
                      </li>
                      <li>
                        <a href="project.html">
                          Software Development <BsArrowRight />
                        </a>
                      </li>
                      <li>
                        <a href="project.html">
                          Motion Graphics <BsArrowRight />
                        </a>
                      </li>
                      <li>
                        <a href="project.html">
                          UI/UX Design <BsArrowRight />
                        </a>
                      </li>
                      <li>
                        <a href="project.html">
                          Graphic Design <BsArrowRight />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-widget">
                    <h4>Newest Post</h4>
                    <div className="recent-post">
                      <div className="recent-thumb">
                        <a href="blog-details.html">
                          <img src={TinyBlog1} alt="" />
                        </a>
                      </div>
                      <div className="recent-post-cnt">
                        <span>11.12.22</span>
                        <h5>
                          <a href="blog-details.html">
                            Grant Distributions Conti nu to Incr Ease.
                          </a>
                        </h5>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="recent-thumb">
                        <a href="blog-details.html">
                          <img src={TinyBlog2} alt="" />
                        </a>
                      </div>
                      <div className="recent-post-cnt">
                        <span>30.10.2022</span>
                        <h5>
                          <a href="blog-details.html">
                            Distributions Conti nu to grant Incr Ease.
                          </a>
                        </h5>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="recent-thumb">
                        <a href="blog-details.html">
                          <img src={TinyBlog3} alt="" />
                        </a>
                      </div>
                      <div className="recent-post-cnt">
                        <span>20.08.2022</span>
                        <h5>
                          <a href="blog-details.html">
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
                      <div className="col-md-6">
                        <div className="single-blog">
                          <div className="blog-thumb">
                            <a href="blog-details.html">
                              <img src={Blog1} alt="" />
                            </a>
                            <div className="tag">
                              <a href="project.html">UI/UX</a>
                            </div>
                          </div>
                          <div className="blog-inner">
                            <div className="author-date">
                              <a href="/">By, Admin</a>
                              <a href="/">23.02.2022</a>
                            </div>
                            <h4>
                              <a href="blog-details.html">
                                Quisque malesuada sapien and Donec sed nunc.
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-blog">
                          <div className="blog-thumb">
                            <a href="blog-details.html">
                              <img src={Blog2} alt="" />
                            </a>
                            <div className="tag">
                              <a href="project.html">Software</a>
                            </div>
                          </div>
                          <div className="blog-inner">
                            <div className="author-date">
                              <a href="/">By, Admin</a>
                              <a href="/">12.02.2022</a>
                            </div>
                            <h4>
                              <a href="blog-details.html">
                                Suspendisse pretium magna qu nisl egestas
                                porttitor.
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-blog">
                          <div className="blog-thumb">
                            <a href="blog-details.html">
                              <img src={Blog3} alt="" />
                            </a>
                            <div className="tag">
                              <a href="project.html">Dashbord</a>
                            </div>
                          </div>
                          <div className="blog-inner">
                            <div className="author-date">
                              <a href="/">By, Admin</a>
                              <a href="/">25.02.2022</a>
                            </div>
                            <h4>
                              <a href="blog-details.html">
                                In a augue sit amet erat Suspel eleifend
                                suscipit issen.
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-blog">
                          <div className="blog-thumb">
                            <a href="blog-details.html">
                              <img src={Blog4} alt="" />
                            </a>
                            <div className="tag">
                              <a href="project.html">3D Design</a>
                            </div>
                          </div>
                          <div className="blog-inner">
                            <div className="author-date">
                              <a href="/">By, Admin</a>
                              <a href="/">30.03.2022</a>
                            </div>
                            <h4>
                              <a href="blog-details.html">
                                Quisque malesuada sapien and Donec sed nunc.
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-blog">
                          <div className="blog-thumb">
                            <a href="blog-details.html">
                              <img src={Blog5} alt="" />
                            </a>
                            <div className="tag">
                              <a href="project.html">Graphic</a>
                            </div>
                          </div>
                          <div className="blog-inner">
                            <div className="author-date">
                              <a href="/">By, Admin</a>
                              <a href="/">21.05.2022</a>
                            </div>
                            <h4>
                              <a href="blog-details.html">
                                Suspendisse pretium magna qu nisl egestas
                                porttitor.
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-blog">
                          <div className="blog-thumb">
                            <a href="blog-details.html">
                              <img src={Blog6} alt="" />
                            </a>
                            <div className="tag">
                              <a href="project.html">App</a>
                            </div>
                          </div>
                          <div className="blog-inner">
                            <div className="author-date">
                              <a href="/">By, Admin</a>
                              <a href="/">26.04.2022</a>
                            </div>
                            <h4>
                              <a href="blog-details.html">
                                In a augue sit amet erat Suspel eleifend
                                suscipit issen.
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-blog">
                          <div className="blog-thumb">
                            <a href="blog-details.html">
                              <img src={Blog7} alt="" />
                            </a>
                            <div className="tag">
                              <a href="project.html">Development</a>
                            </div>
                          </div>
                          <div className="blog-inner">
                            <div className="author-date">
                              <a href="/">By, Admin</a>
                              <a href="/">15.04.2022</a>
                            </div>
                            <h4>
                              <a href="blog-details.html">
                                Quisque malesuada sapien and Donec sed nunc.
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-blog">
                          <div className="blog-thumb">
                            <a href="blog-details.html">
                              <img src={Blog8} alt="" />
                            </a>
                            <div className="tag">
                              <a href="project.html">Software</a>
                            </div>
                          </div>
                          <div className="blog-inner">
                            <div className="author-date">
                              <a href="/">By, Admin</a>
                              <a href="/">12.06.2022</a>
                            </div>
                            <h4>
                              <a href="blog-details.html">
                                Suspendisse pretium magna qu nisl egestas
                                porttitor.
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-blog">
                          <div className="blog-thumb">
                            <a href="blog-details.html">
                              <img src={Blog9} alt="" />
                            </a>
                            <div className="tag">
                              <a href="project.html">UI/UX</a>
                            </div>
                          </div>
                          <div className="blog-inner">
                            <div className="author-date">
                              <a href="/">By, Admin</a>
                              <a href="/">20.12.2022</a>
                            </div>
                            <h4>
                              <a href="blog-details.html">
                                In a augue sit amet erat Suspel eleifend
                                suscipit issen.
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-blog">
                          <div className="blog-thumb">
                            <a href="blog-details.html">
                              <img src={Blog10} alt="" />
                            </a>
                            <div className="tag">
                              <a href="project.html">3D Design</a>
                            </div>
                          </div>
                          <div className="blog-inner">
                            <div className="author-date">
                              <a href="/">By, Admin</a>
                              <a href="/">22.05.2022</a>
                            </div>
                            <h4>
                              <a href="blog-details.html">
                                In a augue sit amet erat Suspel eleifend
                                suscipit issen.
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
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
