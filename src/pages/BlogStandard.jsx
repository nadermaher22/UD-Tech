import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowRight, BsSearch } from "react-icons/bs";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaPlay,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import BlogImg1 from "../assests/img/blog/blog-1.jpg";
import BlogStandard1 from "../assests/img/blog/blog-standard-1.jpg";
import BlogStandard2 from "../assests/img/blog/blog-standard-2.jpg";
import BlogStandard3 from "../assests/img/blog/blog-standard-3.jpg";
import TinyBlog1 from "../assests/img/blog/blog-tiny-1.jpg";
import TinyBlog2 from "../assests/img/blog/blog-tiny-2.jpg";
import TinyBlog3 from "../assests/img/blog/blog-tiny-3.jpg";
import WidgetBanner from "../assests/img/widget-banner-bg.jpg";
import ArrowAngel from "../assests/img/arrow-angle.png";
const BlogStandard = () => {
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
                      <h1>Blog standard</h1>
                      <span>
                        <a href="index.html">Home</a>
                        <BsArrowRight className="m-1" />
                        Blog standard
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
          <section className="blog-standard sec-mar-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 or-2">
                  <div className="blog-standard-details">
                    <div className="single-blog layout3">
                      <div className="blog-thumb">
                        <a href="blog-details.html">
                          <img src={BlogImg1} alt="" />
                        </a>
                        <div className="tag">
                          <a href="/project">Dashbord</a>
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
                        <p>
                          Integer purus odio, placerat nec rhoncus in, all
                          ullamcorper nec dolor. Class online befor thatn aptent
                          taciti sociosqu ad litora torquent per.
                        </p>
                      </div>
                    </div>
                    <div className="single-blog layout4">
                      <div className="blog-thumb">
                        <a href="blog-details.html">
                          <img src={BlogStandard1} alt="" />
                        </a>
                      </div>
                      <div className="blog-inner">
                        <div className="author-date">
                          <a href="/">By, Admin</a>
                          <a className="cmnt" href="/">
                            Comment (02)
                          </a>
                          <a href="/">22.02.2022</a>
                        </div>
                        <h4>
                          <a href="/blog-details">
                            Donec porttitor feugiat lectus quis vehicula enim
                            metus Proin ide odio sagittis cursus nisi at
                            pellentesque.
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="single-blog layout4">
                      <div className="blog-thumb">
                        <a href="blog-details.html">
                          <img src={BlogStandard2} alt="" />
                        </a>
                      </div>
                      <div className="blog-inner">
                        <div className="author-date">
                          <a href="/">By, Admin</a>
                          <a className="cmnt" href="/">
                            Comment (02)
                          </a>
                          <a href="/">22.02.2022</a>
                        </div>
                        <h4>
                          <a href="blog-details.html">
                            consectetur vehicula enim metus bibendum elitangu
                            quis vulputate lectus leo sed erat vehicula elitangu
                            quis.
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="single-blog layout4">
                      <div className="blog-thumb">
                        <a href="blog-details.html">
                          <img src={BlogStandard3} alt="" />
                        </a>
                      </div>
                      <div className="blog-inner">
                        <div className="author-date">
                          <a href="/">By, Admin</a>
                          <a className="cmnt" href="/">
                            Comment (02)
                          </a>
                          <a href="/">22.02.2022</a>
                        </div>
                        <h4>
                          <a href="blog-details.html">
                            Aliquam nec urna non nisl finibus ornare et in dolor
                            Praesent suscipit dui vel urna non nisl finibus
                            ornare.
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="load-more">
                    <ul className="paginations">
                      <li>
                        <a href="/">
                          <FaLongArrowAltLeft />
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
                          <FaLongArrowAltRight />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 or-1">
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
                          Apps Development
                          <BsArrowRight />
                        </a>
                      </li>
                      <li>
                        <a href="project.html">
                          Software Development
                          <BsArrowRight />
                        </a>
                      </li>
                      <li>
                        <a href="project.html">
                          Motion Graphics
                          <BsArrowRight />
                        </a>
                      </li>
                      <li>
                        <a href="project.html">
                          UI/UX Design
                          <BsArrowRight />
                        </a>
                      </li>
                      <li>
                        <a href="project.html">
                          Graphic Design
                          <BsArrowRight />
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
                        <span>20.12.2022</span>
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
                        <span>30.02.2022</span>
                        <h5>
                          <a href="blog-details.html">
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
                        <span>12.04.2021</span>
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
                        <a href="/project">Website</a>
                      </li>
                      <li>
                        <a href="/project">Web Design</a>
                      </li>
                      <li>
                        <a href="/project">Development</a>
                      </li>
                      <li>
                        <a href="/project">Graphic Design</a>
                      </li>
                      <li>
                        <a href="/project">Graphic</a>
                      </li>
                      <li>
                        <a href="/project">UI/UX Design</a>
                      </li>
                      <li>
                        <a href="/project">Activities</a>
                      </li>
                      <li>
                        <a href="/project">Software Design</a>
                      </li>
                      <li>
                        <a href="/project">3d Design</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-banner">
                    <img src={WidgetBanner} alt="" />
                    <div className="banner-inner">
                      <h3>
                        Any Project <span>Call Now.</span>
                        <img className="angle" src={ArrowAngel} alt="" />
                      </h3>
                      <a href="tel:11231231234">+1-123-123-1234</a>
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

export default BlogStandard;
