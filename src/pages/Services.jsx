import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [t, i18n] = useTranslation();
  const [apiData, setApiData] = useState([]);
  const [preLoader, setPreLoader] = useState(true);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetServices?languageId=${lang}`
      )
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
                      <h1>{t("services_page_services")}</h1>
                      <span>
                        <a href="/">{t("home")}</a>
                        <BsArrowRight className="m-1" />
                        {t("services_page_services")}
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
                  <span>{t("services_page_our_solutions")}</span>
                  <h2>{t("services_page_services")}</h2>
                  <p>{t("services_page_paragraph")}</p>
                </div>
              </div>
              <div className="row g-4">
                {apiData.map((e) => {
                  return (
                    <div
                      className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                      data-wow-duration="1500ms"
                      key={e.id}
                    >
                      <div className="single-service h-100">
                        <span>{e.id}</span>
                        <div className="icon">
                          <img src={e.photoPath} alt="" />
                        </div>
                        <h4>{e.title}</h4>
                        <p
                          dangerouslySetInnerHTML={{ __html: e.description }}
                        ></p>
                        <div className="read-btn">
                          <a href={`/service-details/${e.id}`}>
                            {t("services_page_read_more")}
                          </a>
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
