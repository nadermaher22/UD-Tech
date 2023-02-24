import React, { useState, useEffect } from "react";
import IntroVideo from "../assests/img/video/ocean.webm";
import Logo from "../assests/img/logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import Icon1 from "../assests/img/icons/service-icon-1.png";
import Icon2 from "../assests/img/icons/service-icon-2.png";
import Icon3 from "../assests/img/icons/service-icon-3.png";
import Banner1 from "../assests/img/about-baner-1.jpg";
import Project1 from "../assests/img/project/project-1.jpg";
import Project2 from "../assests/img/project/project-2.jpg";
import Project3 from "../assests/img/project/project-3.jpg";
import Project4 from "../assests/img/project/project-4.jpg";
import Project5 from "../assests/img/project/project-5.jpg";
import Project6 from "../assests/img/project/project-6.jpg";
import Blog1 from "../assests/img/blog/blog-1.jpg";
import Blog2 from "../assests/img/blog/blog-1.jpg";
import Blog3 from "../assests/img/blog/blog-1.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import IsoTopeGrid from "react-isotope";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "swiper/css";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import { motion, useMotionValue } from "framer-motion";
import Data from "../components/Data.js";
import ProjectCard from "../components/ProjectCard";
import ProjectBtn from "../components/ProjectBtn";

const Home = () => {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const [swiperRef, setSwiperRef] = useState(null);
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setItem(newItem);
  };
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

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

  // cursor style
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const moveCursor = (e) => {};
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };
  });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
  });
  return (
    <>
      <main className="creasoft-wrap layout2">
        <div className="line_wrap layout2">
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
        </div>
        <section className="hero-area">
          <div className="verticale-social">
            <ul className="vertical-media">
              <li>
                <a href="https://www.twitter.com/">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">Linkedin</a>
              </li>
            </ul>
          </div>
          <div className="hero-wrapper">
            <div className="container">
              <video
                poster="video/ocean.jpg"
                className="first-slide"
                autoPlay="autoplay"
                source={IntroVideo}
                loop="loop"
                muted="muted"
              >
                <source
                  src={IntroVideo}
                  type='video/webm; codecs="vp8, vorbis"'
                />
                <source
                  src="assets/img/video/ocean.mp4"
                  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                />
                <source
                  src="assets/img/video/ocean.ogv"
                  type='video/ogg; codecs="theora, vorbis"'
                />
                Video tag not supported.
              </video>
            </div>
          </div>
        </section>
        <div>
          <section className="services-area layout2 sec-mar">
            <div className="container-fluid">
              <div
                className="title-wrap wow animate animate__fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="sec-title white">
                  <span>Our Solutions</span>
                  <h2>Services</h2>

                  <p data-aos="flip-left">
                    Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                    fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                    convallis sapien, quis commodo libero.
                  </p>
                </div>
              </div>
              <Swiper
                freeMode={true}
                navigation={true}
                modules={[Navigation, FreeMode]}
                className="mySwiper homeSwiper"
                scrollbar={{ draggable: true }}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    spaceBetween: 50,
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                  1204: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                  },
                }}
              >
                <SwiperSlide>
                  <div
                    className="swiper-slide wow animate animate__fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="single-service layout2">
                      <span>01</span>
                      <div className="icon">
                        <img src={Icon1} alt="" />
                      </div>
                      <h4>Web Design</h4>
                      <p>
                        Integer purus odio, placerat nec rhoncu in, ullamcorper
                        nec dolor.
                      </p>
                      <div className="read-btn">
                        <a href="/service-details">Read More</a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="swiper-slide wow animate animate__fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="single-service layout2">
                      <span>02</span>
                      <div className="icon">
                        <img src={Icon2} alt="" />
                      </div>
                      <h4>UI/UX Design</h4>
                      <p>
                        Integer purus odio, placerat nec rhoncu in, ullamcorper
                        nec dolor.
                      </p>
                      <div className="read-btn">
                        <a href="/service-details">Read More</a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="swiper-slide wow animate animate__fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="single-service layout2">
                      <span>03</span>
                      <div className="icon">
                        <img src={Icon3} alt="" />
                      </div>
                      <h4>Software Development</h4>
                      <p>
                        Integer purus odio, placerat nec rhoncu in, ullamcorper
                        nec dolor.
                      </p>
                      <div className="read-btn">
                        <a href="/service-details">Read More</a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="swiper-slide wow animate animate__fadeInUp"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="single-service layout2">
                      <span>01</span>
                      <div className="icon">
                        <img src={Icon1} alt="" />
                      </div>
                      <h4>Web Design</h4>
                      <p>
                        Integer purus odio, placerat nec rhoncu in, ullamcorper
                        nec dolor.
                      </p>
                      <div className="read-btn">
                        <a href="/service-details">Read More</a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
        </div>

        <section className="about-area sec-mar-bottom">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 or-2 wow animate animate__fadeIn text-left"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="sec-title white layout2">
                  <span>Get To Know</span>
                  <h2>About Us</h2>
                </div>
                <div className="about-left layout2">
                  <h3>We do design, code & develop Software finally launch.</h3>
                  <p>
                    Integer purus odio, placerat nec rhoncus in, ullamcorper nec
                    dolor. Class onlin aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos only himenaeos. Praesent
                    nec neque at dolor venenatis consectetur eu quis ex. the
                    Donec lacinia placerat felis non aliquam.
                  </p>
                  <div className="company-since layout2">
                    <div className="company-logo">
                      <img src={Logo} alt="" />
                    </div>
                    <strong>#1</strong>
                    <h4>
                      Best Creative IT Agency And Solutions
                      <span>Since 2005.</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 or-1 wow animate animate__fadeIn"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="about-right layout2">
                  <div className="banner-1">
                    <img src={Banner1} alt="" />
                  </div>
                  <div className="buttons">
                    <div className="cmn-btn">
                      <div className="line-1"></div>
                      <div className="line-2"></div>
                      <a href="/contact">Call Us</a>
                    </div>
                    <div className="cmn-btn ">
                      <div className="line-1"></div>
                      <div className="line-2"></div>
                      <a href="/contact">Company Profile</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features section */}
        <Features />
        <section className="project-area sec-mar">
          <div className="container">
            <div className="title-wrap">
              <div className="sec-title white">
                <span>Case Study</span>
                <h2>Project</h2>
                <p>
                  Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                  fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                  convallis sapien, quis commodo libero.
                </p>
              </div>
            </div>
            <ProjectBtn
              setItem={setItem}
              menuItems={menuItems}
              filterItem={filterItem}
            />
            <ProjectCard item={item} />
            {/*
            <div className="row g-4 project-items">
              <div className="col-md-6 col-lg-4 single-item graphic ui">
                <div className="item-img">
                  <a href="/projects">
                    <img src={Project1} alt="" />
                  </a>
                </div>
                <div className="item-inner-cnt">
                  <span>Software</span>
                  <h4>Desktop Mockup</h4>
                  <div className="view-btn">
                    <a href="/project-details">view details</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 single-item developing web">
                <div className="item-img">
                  <a href="/projects">
                    <img src={Project2} alt="" />
                  </a>
                </div>
                <div className="item-inner-cnt">
                  <span>Template</span>
                  <h4>Creative Agency</h4>
                  <div className="view-btn">
                    <a href="/project-details">view details</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 single-item developing">
                <div className="item-img">
                  <a href="/projects">
                    <img src={Project3} alt="" />
                  </a>
                </div>
                <div className="item-inner-cnt">
                  <span>App</span>
                  <h4>Mobile Crypto Wallet</h4>
                  <div className="view-btn">
                    <a href="/project-details">view details</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 single-item graphic">
                <div className="item-img">
                  <a href="/projects">
                    <img src={Project4} alt="" />
                  </a>
                </div>
                <div className="item-inner-cnt">
                  <span>UI Kit</span>
                  <h4>E-Shop Ecommerce</h4>
                  <div className="view-btn">
                    <a href="/project-details">view details</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 single-item ui">
                <div className="item-img">
                  <a href="/projects">
                    <img src={Project5} alt="" />
                  </a>
                </div>
                <div className="item-inner-cnt">
                  <span>Graphic</span>
                  <h4>Art Deco Cocktails</h4>
                  <div className="view-btn">
                    <a href="/project-details">view details</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 single-item web">
                <div className="item-img">
                  <a href="/projects">
                    <img src={Project6} alt="" />
                  </a>
                </div>
                <div className="item-inner-cnt">
                  <span>3D Design</span>
                  <h4>Low poly Base mesh</h4>
                  <div className="view-btn">
                    <a href="/project-details">view details</a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section className="our-partner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="sec-title white layout2">
                  <span>Satisfied Client</span>
                  <h2>Our Partner</h2>
                  <div className="-partnerslider-navigator d-flex">
                    <div className="swiper-button-prev-c" onClick={prevHandler}>
                      <BsChevronLeft />
                    </div>
                    <div className="swiper-button-next-c" onClick={nextHandler}>
                      <BsChevronRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={3}
                  navigation={false}
                  modules={[Navigation]}
                  className="mySwiper"
                  scrollbar={{ draggable: true }}
                  loop={true}
                  autoplay={true}
                  onSwiper={(swiper) => setSwiperRef(swiper)}
                >
                  <div className="swiper partner-slider">
                    <div className="swiper-wrapper">
                      <SwiperSlide>
                        <div className="single-partner single-item graphic ui">
                          <div className="item-img">
                            <a href="/">
                              <img src={Project1} alt="" />
                            </a>
                          </div>
                          <div className="item-inner-cnt">
                            <h4 className="d-flex">Client Name</h4>
                            <div className="view-btn">
                              <a href="/">View Website</a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="single-partner single-item graphic ui">
                          <div className="item-img">
                            <a href="/">
                              <img src={Project1} alt="" />
                            </a>
                          </div>
                          <div className="item-inner-cnt">
                            <h4 className="d-flex">Client Name</h4>
                            <div className="view-btn">
                              <a href="/">View Website</a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="single-partner single-item graphic ui">
                          <div className="item-img">
                            <a href="/">
                              <img src={Project1} alt="" />
                            </a>
                          </div>
                          <div className="item-inner-cnt">
                            <h4 className="d-flex">Client Name</h4>
                            <div className="view-btn">
                              <a href="/">View Website</a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="single-partner single-item graphic ui">
                          <div className="item-img">
                            <a href="/">
                              <img src={Project1} alt="" />
                            </a>
                          </div>
                          <div className="item-inner-cnt">
                            <h4 className="d-flex">Client Name</h4>
                            <div className="view-btn">
                              <a href="/">View Website</a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="single-partner single-item graphic ui">
                          <div className="item-img">
                            <a href="/">
                              <img src={Project1} alt="" />
                            </a>
                          </div>
                          <div className="item-inner-cnt">
                            <h4 className="d-flex">Client Name</h4>
                            <div className="view-btn">
                              <a href="/">View Website</a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="single-partner single-item graphic ui">
                          <div className="item-img">
                            <a href="/">
                              <img src={Project1} alt="" />
                            </a>
                          </div>
                          <div className="item-inner-cnt">
                            <h4 className="d-flex">Client Name</h4>
                            <div className="view-btn">
                              <a href="/">View Website</a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="buttons mt-3">
                    <div className="cmn-btn">
                      <div className="line-1"></div>
                      <div className="line-2"></div>
                      <a href="/clients">More Clients</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonials */}
        <Testimonials />
        <section className="blog-area">
          <div className="container">
            <div
              className="title-wrap wow animate animate__fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="sec-title white">
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
                <div className="single-blog layout2">
                  <div className="blog-thumb">
                    <a href="/blog-details">
                      <img src={Blog1} alt="" />
                    </a>
                    <div className="tag">
                      <a href="/projects">UI/UX</a>
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
                <div className="single-blog layout2">
                  <div className="blog-thumb">
                    <a href="/blog-details">
                      <img src={Blog2} alt="" />
                    </a>
                    <div className="tag">
                      <a href="/projects">Software</a>
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
                <div className="single-blog layout2">
                  <div className="blog-thumb">
                    <a href="/blog-details">
                      <img src={Blog3} alt="" />
                    </a>
                    <div className="tag">
                      <a href="/projects">Dashbord</a>
                    </div>
                  </div>
                  <div className="blog-inner">
                    <div className="author-date">
                      <a href="/">By, Admin</a>
                      <a href="/">22.02.2022</a>
                    </div>
                    <h4>
                      <a href="/blog-details">
                        In a augue sit amet erat Suspel eleifend suscipit issen.
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
    </>
  );
};

export default Home;
