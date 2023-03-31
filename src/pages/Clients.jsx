import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const [apiData, setApiData] = useState([]);
  const [t, i18n] = useTranslation();
  const lang = localStorage.i18nextLng === "en" ? 1 : 2;
  const [preLoader, setPreLoader] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetClients?languageId=${lang}`
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
                      <h1>{t("clients")}</h1>
                      <span>
                        <a href="/">{t("home")}</a>
                        <BsArrowRight className="m-1" />
                        {t("clients")}
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
          <section
            className="why-choose sec-mar wow animate animate__fadeIn"
            data-wow-duration="1500ms"
          >
            <div className="container">
              <div className="row g-4 ">
                {apiData.map((e) => {
                  return (
                    <div
                      className="col-12 col-md-4 col-lg-3 single-item graphic ui"
                      key={e.id}
                    >
                      <div className="item-img">
                        <a href="/">
                          <img src={e.photoPath} alt="" />
                        </a>
                      </div>
                      <div className="item-inner-cnt">
                        <h4>{e.name}</h4>
                        <div className="view-btn">
                          {/* <a href="/">View Website</a> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <Newsletter />
        </main>
      </div>
    </>
  );
};

export default Clients;
