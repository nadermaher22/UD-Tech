import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const ElectronicInvoice = () => {
  const [getInvoice, setGetInvoice] = useState([]);
  const [t, i18n] = useTranslation();
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
  const [video, setVideo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetElectronicInvoice?languageId=${lang}`
      )
      .then((res) => {
        setGetInvoice(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

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
                      <h1>{t("electronic_invoice")}</h1>
                      <span>
                        <a href="/">{t("home")}</a>
                        <BsArrowRight className="m-1" />
                        {t("electronic_invoice")}
                      </span>
                      <div
                        className="breadcrumb-video"
                        style={{
                          display: video.video_Electronic ? "block" : "none",
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
                src={video.video_Electronic}
                controls
                autoPlay
                className="bread-video"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
          <section
            className="why-choose paragraph sec-mar wow animate animate__fadeIn"
            data-wow-duration="1500ms"
          >
            <div className="container">
              <div className="row">
                <div className="single-history">
                  {getInvoice.slice(0, 2).map((first) => {
                    return (
                      <div className="col-12 col-md-6" key={first.id}>
                        <div
                          className="about-left py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                          data-wow-duration="1500ms"
                        >
                          <h3>{first.title}</h3>

                          <p
                            dangerouslySetInnerHTML={{
                              __html: `<div>${first.description}</div>`,
                            }}
                          ></p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="single-history">
                  <div className="col-12 col-md-6">
                    {getInvoice.slice(2, 3).map((second) => {
                      return (
                        <div
                          className="about-left py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                          data-wow-duration="1500ms"
                          key={second.id}
                        >
                          <h3>{second.title}</h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: `<div>${second.description}</div>`,
                            }}
                          ></p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="col-12 col-md-6">
                    {getInvoice.slice(3, 4).map((third) => {
                      return (
                        <div
                          className="item-img single-item py-2 pe-4 ps-4 wow animate animate__fadeInRight"
                          data-wow-duration="1500ms"
                          key={third.id}
                        >
                          <img
                            className="m-0 border"
                            src={third.photoPath}
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="single-history">
                  {getInvoice.slice(4).map((fourth) => {
                    return (
                      <div className="col-12 col-md-6" key={fourth.id}>
                        <div
                          className="about-left  py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                          data-wow-duration="1500ms"
                        >
                          <h3>{fourth.title}</h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: `<div>${fourth.description}</div>`,
                            }}
                          ></p>
                        </div>
                      </div>
                    );
                  })}
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

export default ElectronicInvoice;
