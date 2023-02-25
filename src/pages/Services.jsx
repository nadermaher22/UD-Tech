import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
import axios from "axios";

const Services = () => {
  useEffect(() => {
    axios
      .get("http://apiv2.udtech-sa.com/api/WebSite/GetServices?languageId=1")
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
                {apiData.map((e) => {
                  return (
                    <div
                      className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                      key={e.id}
                    >
                      <div className="single-service">
                        <span>{e.id}</span>
                        <div className="icon">
                          <img src={e.photoPath} alt="" />
                        </div>
                        <h4>{e.title}</h4>
                        <p>{e.description}</p>
                        <div className="read-btn">
                          <a href="/service-details">Read More</a>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
