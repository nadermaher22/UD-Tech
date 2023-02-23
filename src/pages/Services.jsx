import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
import Service1 from "../assests/img/icons/service-icon-1.png";
import Service2 from "../assests/img/icons/service-icon-2.png";
import Service3 from "../assests/img/icons/service-icon-3.png";
import Service4 from "../assests/img/icons/service-icon-4.png";
import Service5 from "../assests/img/icons/service-icon-5.png";
import Service6 from "../assests/img/icons/service-icon-6.png";

const Services = () => {
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
                      <h1>Service</h1>
                      <span>
                        <a href="/">Home</a>
                        <BsArrowRight className="m-1" />
                        Service
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
          <section className="services-grid sec-mar">
            <div className="container">
              <div className="title-wrap">
                <div className="sec-title">
                  <span>Our Solutions</span>
                  <h2>Services</h2>
                  <p>
                    Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                    fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                    convallis sapien, quis commodo libero.
                  </p>
                </div>
              </div>
              <div className="row g-4">
                <div
                  className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-service">
                    <span>01</span>
                    <div className="icon">
                      <img src={Service1} alt="" />
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
                <div
                  className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-service">
                    <span>02</span>
                    <div className="icon">
                      <img src={Service2} alt="" />
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
                <div
                  className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-service">
                    <span>03</span>
                    <div className="icon">
                      <img src={Service3} alt="" />
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
                <div
                  className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                  data-wow-delay="800ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-service">
                    <span>04</span>
                    <div className="icon">
                      <img src={Service4} alt="" />
                    </div>
                    <h4>App Design</h4>
                    <p>
                      Integer purus odio, placerat nec rhoncu in, ullamcorper
                      nec dolor.
                    </p>
                    <div className="read-btn">
                      <a href="/service-details">Read More</a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                  data-wow-delay="1000ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-service">
                    <span>05</span>
                    <div className="icon">
                      <img src={Service5} alt="" />
                    </div>
                    <h4>Graphic Design</h4>
                    <p>
                      Integer purus odio, placerat nec rhoncu in, ullamcorper
                      nec dolor.
                    </p>
                    <div className="read-btn">
                      <a href="/service-details">Read More</a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                  data-wow-delay="1200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-service">
                    <span>06</span>
                    <div className="icon">
                      <img src={Service6} alt="" />
                    </div>
                    <h4>Video Animation</h4>
                    <p>
                      Integer purus odio, placerat nec rhoncu in, ullamcorper
                      nec dolor.
                    </p>
                    <div className="read-btn">
                      <a href="/service-details">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Testimonials />
          <Newsletter />
        </main>
      </div>
    </>
  );
};

export default Services;
