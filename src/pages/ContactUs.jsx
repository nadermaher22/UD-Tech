import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import CallCenter from "../assests/img/call-center.png";
import { BsArrowRight } from "react-icons/bs";
import {
  FaGoogleDrive,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlay,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Newsletter from "../components/Newsletter";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [t] = useTranslation();
  const [preLoader, setPreLoader] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [apiData, setApiData] = useState([]);
  const [messagesSubmit, setMessageSubmit] = useState("");
  const [errorMessagesSubmit, setErrorMessageSubmit] = useState("");
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
  const [video, setVideo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetContactUs?languageId=${lang}`
      )
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [apiData, lang]);
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

  const PostMessage = (e) => {
    e.preventDefault();
    axios
      .post("https://api.udtech-sa.com/api/WebSite/SendContactUs", {
        name,
        email,
        subject,
        message,
      })
      .then((response) => {
        setMessageSubmit(response.data);
      })
      .catch((err) => {
        setErrorMessageSubmit(err.response.data.message);
      });
  };
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
                      <h1>{t("contact_us")}</h1>
                      <span>
                        <a href="/">{t("home")}</a>
                        <BsArrowRight className="m-1" />
                        {t("contact_us")}
                      </span>
                      <div
                        className="breadcrumb-video"
                        style={{
                          display: video.video_Contacts ? "block" : "none",
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
                src={video.video_Contacts}
                controls
                autoPlay
                className="bread-video"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>

          <section className="contact-area sec-mar">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  <div className="contact-left">
                    <div className="sec-title layout2">
                      <span>{t("contact_page_get_in_touch")}</span>
                      <h2>{t("contact_page_contact_us")}</h2>
                    </div>
                    <ul className="social-follow">
                      <li>
                        <a href={apiData.lurl} target="_blank" rel="noreferrer">
                          <FaLinkedin />
                        </a>
                      </li>
                      <li>
                        <a href={apiData.turl} target="_blank" rel="noreferrer">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href={apiData.wurl} target="_blank" rel="noreferrer">
                          <FaGoogleDrive />
                        </a>
                      </li>
                      <li>
                        <a href={apiData.iurl} target="_blank" rel="noreferrer">
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                    <div className="informations">
                      <div className="single-info">
                        <div className="icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="info">
                          <h3>{t("contact_page_location")}</h3>
                          <p>{apiData.address}</p>
                        </div>
                      </div>
                      <div className="single-info">
                        <div className="icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="info arabicMob">
                          <h3>{t("contact_page_phone")}</h3>
                          <Link href={`tel:${apiData.mobile}`}>
                            {apiData.mobile}
                          </Link>
                        </div>
                      </div>
                      <div className="single-info">
                        <div className="icon">
                          <FaRegEnvelope />
                        </div>
                        <div className="info">
                          <h3>{t("contact_page_email")}</h3>
                          <Link to={`mailto:${apiData.email}`}>
                            {apiData.email}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.3503421209366!2d39.17810381421185!3d21.57224367437963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d19c274486c1%3A0x3bf6242bc980369c!2sUD-Tech%20United%20Diamond%20Technology!5e0!3m2!1sen!2seg!4v1677317107987!5m2!1sen!2seg"></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="getin-touch">
                <div className="row">
                  <div className="col-md-6 col-lg-7">
                    <div
                      className="contact-form wow animate animate__fadeInUp"
                      data-wow-duration="1500ms"
                    >
                      <h3>{t("contact_page_questions")}</h3>
                      <form method="post" onSubmit={PostMessage}>
                        <div className="row">
                          <div className="col-12">
                            <input
                              type="text"
                              placeholder={t("contact_page_enter_name")}
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              className="text-AR"
                              type="email"
                              placeholder={t("contact_page_email")}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              placeholder={t("contact_page_subject")}
                              value={subject}
                              onChange={(e) => setSubject(e.target.value)}
                            />
                          </div>
                          <div className="col-12">
                            <textarea
                              cols="30"
                              rows="10"
                              placeholder={t("contact_page_message")}
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <input
                              type="submit"
                              value={t("contact_page_submit")}
                            />
                          </div>
                        </div>
                      </form>
                      <h1 className="mt-3 text-success">{messagesSubmit}</h1>
                      <h1 className="mt-3 text-danger">
                        {errorMessagesSubmit}
                      </h1>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-5 wow animate animate__fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="call-banner">
                      <img src={CallCenter} alt="" />
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

export default ContactUs;
