import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowRight, BsReply } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaPlay,
  FaQuoteLeft,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import BlogThumb1 from "../assests/img/blog/blog-thumb.jpg";
import BlogGallery1 from "../assests/img/blog/blog-gallery-1.jpg";
import BlogGallery2 from "../assests/img/blog/blog-gallery-2.jpg";
import Auther1 from "../assests/img/author-1.jpg";
import Auther2 from "../assests/img/author-2.jpg";
import WidgetBanner from "../assests/img/widget-banner-bg.jpg";
import axios from "axios";

const BlogDetails = () => {
  const [apiData, setApiData] = useState([]);
  const [blogDetailsData, setBlogDetailsData] = useState([]);
  const [dataId, setDataId] = useState("");
  const { blogId } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://apiv2.udtech-sa.com/api/WebSite/GetBlogDetails?languageId=1&Id=${blogId}`
      )
      .then((res) => {
        setApiData(res.data);
        // console.log("BlogData", apiData);
        // console.log("BlogId from api", blogId);
        // let BlogDataww = apiData.filter((item) => item.id === Number(dataId));
        // setBlogDetailsData(BlogDataww);
        // console.log("nader ", BlogDataww);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <main className="creasoft-wrap">
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
                      <h1>Blog Details</h1>
                      <span>
                        <Link to="/">Home</Link>
                        <BsArrowRight className="m-1" />
                        Blog details
                      </span>
                      <div className="breadcrumb-video">
                        <img src={VideoImg} alt="" />
                        <div className="video-inner">
                          <Link
                            className="video-popup"
                            href="http://www.youtube.com/watch?v=0O2aH4XLbto"
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
          <section className="blog-details-area sec-mar-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="blog-details-content">
                    <h3>{apiData.title}</h3>
                    <div className="author-date layout2">
                      <Link to="/">By, Admin</Link>
                      <Link to="/">Comment (02)</Link>
                      <Link to="/">22.02.2022</Link>
                    </div>
                    <div className="details-thumb">
                      <img src={apiData.photoPath} alt="" />
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: apiData.description }}>
                      
                    </p>
                    <div className="tag-share">
                      <div className="line-tag">
                        <span>Tag:</span>
                        <Link to="/projects">web,</Link>
                        <Link to="/projects">template,</Link>
                        <Link to="/projects">app,</Link>
                        <Link to="/projects">software,</Link>
                        <Link to="/projects">plugin</Link>
                      </div>
                      <div className="share-blog">
                        <span>Share On:</span>
                        <ul className="social-share-blog">
                          <li>
                            <Link to="https://www.facebook.com/">
                              <FaFacebookF />
                            </Link>
                          </li>
                          <li>
                            <Link to="https://www.twitter.com/">
                              <FaTwitter />
                            </Link>
                          </li>
                          <li>
                            <Link to="https://www.pinterest.com/">
                              <FaPinterestP />
                            </Link>
                          </li>
                          <li>
                            <Link to="https://www.instagram.com/">
                              <FaInstagram />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="comments">
                      <h3>2 Comment</h3>
                      <div className="single-comment">
                        <div className="author-post">
                          <div className="reply">
                            <Link to="/">
                              <BsReply />
                              Reply
                            </Link>
                          </div>
                          <div className="author-thumb">
                            <img src={Auther1} alt="" />
                          </div>
                          <div className="author-info">
                            <h5>Polard Girdet</h5>
                            <span>11 January, 2022 At 01.56 pm</span>
                          </div>
                        </div>
                        <p>
                          Donec bibendum enim ut elit porta ullamcorper.
                          Vestibulum quam nulla, venenatis eget iaculis cold
                          vitae nulla. Morbi mattis nec mi ac mollis. Nam et
                          consequat tellus, a varius mag iaculis, ligula vitae
                          commodo blandit, augue urna accumsan sapien.
                        </p>
                      </div>
                      <div className="single-comment">
                        <div className="author-post">
                          <div className="reply">
                            <Link to="/">
                              <BsReply />
                              Reply
                            </Link>
                          </div>
                          <div className="author-thumb">
                            <img src={Auther2} alt="" />
                          </div>
                          <div className="author-info">
                            <h5>algiro mudaran</h5>
                            <span>11 January, 2022 At 01.56 pm</span>
                          </div>
                        </div>
                        <p>
                          Donec bibendum enim ut elit porta ullamcorper.
                          Vestibulum quam nulla, venenatis eget iaculis cold
                          vitae nulla. Morbi mattis nec mi ac mollis. Nam et
                          consequat tellus, a varius mag iaculis, ligula vitae
                          commodo blandit, augue urna accumsan sapien.
                        </p>
                      </div>
                    </div>
                    <div className="comment-form">
                      <h5>Leave A Comment</h5>
                      <form action="#" method="post">
                        <div className="row">
                          <div className="col-md-6">
                            <label for="name">
                              Name*
                              <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                id="name"
                              />
                            </label>
                          </div>
                          <div className="col-md-6">
                            <label for="email">
                              Email*
                              <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                id="email"
                              />
                            </label>
                          </div>
                          <div className="col-12">
                            <label for="msg">
                              Message*
                              <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                placeholder="Type your Message"
                                id="msg"
                              ></textarea>
                            </label>
                            <input type="submit" value="Submit Comment" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
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
                          <FaSearch />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="sidebar-widget">
                    <h4>Category</h4>
                    <ul className="category">
                      <li>
                        <Link to="/projects">
                          Web Design
                          <BsArrowRight />
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects">
                          Apps Development
                          <BsArrowRight />
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects">
                          Software Development
                          <BsArrowRight />
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects">
                          Motion Graphics
                          <BsArrowRight />
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects">
                          UI/UX Design
                          <BsArrowRight />
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects">
                          Graphic Design
                          <BsArrowRight />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-widget">
                    <h4>Newest Post</h4>
                    <div className="recent-post">
                      <div className="recent-thumb">
                        <Link to="/blog-details">
                          <img src="assets/img/blog/blog-tiny-1.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="recent-post-cnt">
                        <span>23.12.2022</span>
                        <h5>
                          <Link to="/blog-details">
                            Grant Distributions Conti nu to Incr Ease.
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="recent-thumb">
                        <Link to="/blog-details">
                          <img src="assets/img/blog/blog-tiny-2.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="recent-post-cnt">
                        <span>10.10.2022</span>
                        <h5>
                          <Link to="/blog-details">
                            Distributions Conti nu to grant Incr Ease.
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="recent-thumb">
                        <Link to="/blog-details">
                          <img src="assets/img/blog/blog-tiny-3.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="recent-post-cnt">
                        <span>23.12.2022</span>
                        <h5>
                          <Link to="/blog-details">
                            Conti nu to Incr Ease malesuada sapien sed
                          </Link>
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
                        <img
                          className="angle"
                          src="assets/img/arrow-angle.png"
                          alt=""
                        />
                      </h3>
                      <Link to="/tel:11231231234">+1-123-123-1234</Link>
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

export default BlogDetails;
