import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlay,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import Team1 from "../assests/img/team/team-1.jpg";
import Team2 from "../assests/img/team/team-2.jpg";
import Team3 from "../assests/img/team/team-3.jpg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });

  const [swiperRef, setSwiperRef] = useState(null);
  const swiper = useSwiper();

  return (
    <>
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
                    <h1>Meet Our Team</h1>
                    <span>
                      <a href="/">Home</a>
                      <BsArrowRight className="m-1" />
                      Team
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
        <section className="our-team sec-mar">
          <div className="container">
            <div
              className="title-wrap  wow animate animate__fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="sec-title">
                <span>Our Team</span>
                <h2>Meet Our Team</h2>
                <p>
                  Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                  fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                  convallis sapien, quis commodo libero.
                </p>
              </div>
            </div>
            <div className="swiper team-slider">
              <div className="swiper-wrapper">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
                  pagination={true}
                  modules={[Pagination, A11y]}
                  centeredSlides={true}
                  className="mySwiper"
                  loop={true}
                  autoplay={true}
                  onSwiper={(swiper) => setSwiperRef(swiper)}
                >
                  <SwiperSlide>
                    <div
                      className="swiper-slide wow animate animate__fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-team">
                        <div className="member-img">
                          <img src={Team1} alt="" />
                          <svg
                            width="185"
                            height="299"
                            viewBox="0 0 167 269"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.25412 0.814453C1.68125 2.62384 0 5.61553 0 8.99991V269H167C167 269 47 269 66.5 112.171C75.5581 39.3209 20.2679 8.22409 4.25412 0.814453Z"
                              fill="#191A1C"
                            />
                          </svg>
                          <ul className="team-social">
                            <li>
                              <a href="https://www.instagram.com/">
                                <FaInstagram />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.twitter.com/">
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.whatsapp.com/">
                                <FaWhatsapp />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="team-inner">
                          <h4>Thoren Okendhild</h4>
                          <span>Executive Chairman</span>
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
                      <div className="single-team">
                        <div className="member-img">
                          <img src={Team2} alt="" />
                          <svg
                            width="185"
                            height="299"
                            viewBox="0 0 167 269"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.25412 0.814453C1.68125 2.62384 0 5.61553 0 8.99991V269H167C167 269 47 269 66.5 112.171C75.5581 39.3209 20.2679 8.22409 4.25412 0.814453Z"
                              fill="#191A1C"
                            />
                          </svg>
                          <ul className="team-social">
                            <li>
                              <a href="https://www.instagram.com/">
                                <FaInstagram />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.twitter.com/">
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.whatsapp.com/">
                                <FaWhatsapp />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="team-inner">
                          <h4>Lincoln Anthony</h4>
                          <span>Software Engeenier</span>
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
                      <div className="single-team">
                        <div className="member-img">
                          <img src={Team3} alt="" />
                          <svg
                            width="185"
                            height="299"
                            viewBox="0 0 167 269"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.25412 0.814453C1.68125 2.62384 0 5.61553 0 8.99991V269H167C167 269 47 269 66.5 112.171C75.5581 39.3209 20.2679 8.22409 4.25412 0.814453Z"
                              fill="#191A1C"
                            />
                          </svg>
                          <ul className="team-social">
                            <li>
                              <a href="https://www.instagram.com/">
                                <FaInstagram />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.twitter.com/">
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.whatsapp.com/">
                                <FaWhatsapp />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="team-inner">
                          <h4>Adrian Eodri</h4>
                          <span>UI/UX Designer</span>
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
                      <div className="single-team">
                        <div className="member-img">
                          <img src={Team3} alt="" />
                          <svg
                            width="185"
                            height="299"
                            viewBox="0 0 167 269"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.25412 0.814453C1.68125 2.62384 0 5.61553 0 8.99991V269H167C167 269 47 269 66.5 112.171C75.5581 39.3209 20.2679 8.22409 4.25412 0.814453Z"
                              fill="#191A1C"
                            />
                          </svg>
                          <ul className="team-social">
                            <li>
                              <a href="https://www.instagram.com/">
                                <FaInstagram />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.twitter.com/">
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.whatsapp.com/">
                                <FaWhatsapp />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="team-inner">
                          <h4>Adrian Eodri</h4>
                          <span>UI/UX Designer</span>
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
                      <div className="single-team">
                        <div className="member-img">
                          <img src={Team3} alt="" />
                          <svg
                            width="185"
                            height="299"
                            viewBox="0 0 167 269"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.25412 0.814453C1.68125 2.62384 0 5.61553 0 8.99991V269H167C167 269 47 269 66.5 112.171C75.5581 39.3209 20.2679 8.22409 4.25412 0.814453Z"
                              fill="#191A1C"
                            />
                          </svg>
                          <ul className="team-social">
                            <li>
                              <a href="https://www.instagram.com/">
                                <FaInstagram />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.twitter.com/">
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.whatsapp.com/">
                                <FaWhatsapp />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="team-inner">
                          <h4>Adrian Eodri</h4>
                          <span>UI/UX Designer</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
    </>
  );
};

export default Team;
