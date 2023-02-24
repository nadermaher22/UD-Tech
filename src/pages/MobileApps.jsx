import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import Newsletter from "../components/Newsletter";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Project1 from "../assests/img/project/project-1.jpg";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { FaPlay } from "react-icons/fa";
import Project2 from "../assests/img/project/project-2.jpg";
import Project3 from "../assests/img/project/project-3.jpg";
import Project4 from "../assests/img/project/project-4.jpg";
import Project5 from "../assests/img/project/project-5.jpg";
import Project6 from "../assests/img/project/project-6.jpg";
import Project7 from "../assests/img/project/project-7.jpg";
import Project8 from "../assests/img/project/project-8.jpg";
import Project9 from "../assests/img/project/project-9.jpg";
import Project10 from "../assests/img/project/project-10.jpg";
import Project11 from "../assests/img/project/project-11.jpg";
import Project12 from "../assests/img/project/project-12.jpg";
import JavaImg from "../assests/img/java.png";

const MobileApps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  const [swiperRef, setSwiperRef] = useState(null);

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
      </div>
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
                    <h1>Mobile Apps</h1>
                    <span>
                      <a href="/">Home</a>
                      <BsArrowRight className="m-1" />
                      Mobile Apps
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

        {/* <section>
          <div className="container">
            <div className="title-wrap">
              <div className="sec-title">
                <h2></h2>
                <p></p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="project-area sec-mar ">
          <div className="container">
            <div
              className="wow animate slideInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="title-wrap">
                <div className="sec-title">
                  <h2>MOBILE APPS & WEBSITES</h2>
                  <p>
                    We are able to customize applications and websites – per the
                    client's needs and requests, starting from the IOS &
                    Android, flutter, .Net core , Backend, and 14 other
                    programming language , please contact us for more
                    information and download our company profile
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <ul className="isotope-menu">
                    <li className="active" data-filter="*">
                      All
                    </li>
                    <li data-filter=".ui">UI/UX</li>
                    <li data-filter=".web">Web Design</li>
                    <li data-filter=".developing">Developing</li>
                    <li data-filter=".graphic">Graphic Design</li>
                  </ul>
                </div>
              </div>
              <div className="row g-4 project-items">
                <div className="col-md-6 col-lg-4 single-item graphic ui">
                  <div className="item-img">
                    <a href="/project-details">
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
                    <a href="/project-details">
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
                    <a href="/project-details">
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
                    <a href="/project-details">
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
                    <a href="/project-details">
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
                    <a href="/project-details">
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
                <div className="col-md-6 col-lg-4 single-item developping">
                  <div className="item-img">
                    <a href="/project-details">
                      <img src={Project7} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>Video</span>
                    <h4>Animation Studio</h4>
                    <div className="view-btn">
                      <a href="/project-details">view details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 single-item ui">
                  <div className="item-img">
                    <a href="/project-details">
                      <img src={Project8} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>Motion</span>
                    <h4>Motion Graphics</h4>
                    <div className="view-btn">
                      <a href="/projects">view details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 single-item developing">
                  <div className="item-img">
                    <a href="/project-details">
                      <img src={Project9} alt="" />
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
                <div className="col-md-6 col-lg-4 single-item web">
                  <div className="item-img">
                    <a href="/project-details">
                      <img src={Project10} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>UI/UX</span>
                    <h4>Design Demo</h4>
                    <div className="view-btn">
                      <a href="/project-details">view details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 single-item graphic">
                  <div className="item-img">
                    <a href="/project-details">
                      <img src={Project11} alt="" />
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
                <div className="col-md-6 col-lg-4 single-item ui">
                  <div className="item-img">
                    <a href="/project-details">
                      <img src={Project12} alt="" />
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
              </div>
              <div className="row text-center">
                <div className="MobApp buttons">
                  <div className="cmn-btn">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <a href="/contact">Send us email</a>
                  </div>
                  <div className="cmn-btn layout-two">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <a href="/">Company Profile</a>
                  </div>
                  <div className="cmn-btn">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <a href="https://wa.me/+9660599209361">call us now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 pt-5 paragraph">
              <div className="col-md-12">
                <div
                  className="about-left wow animate animate__slideInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <h3>technologies that we use </h3>
                  <div className="row g-4">
                    <div
                      className="col-12 col-md-3 single-item wow animate fadeInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="item-img">
                        <img
                          className="m-0"
                          src="http://udtech-sa.com/assets/ios.783dbedf.png"
                        />
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-3 single-item wow animate animate__fadeInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="item-img">
                        <img
                          className="m-0"
                          src="http://udtech-sa.com/assets/android.cdf61795.png"
                        />
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-3 single-item wow animate animate__fadeInRight"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="item-img">
                        <img
                          className="m-0"
                          src="http://udtech-sa.com/assets/react.9f173055.png"
                        />
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-3 single-item wow animate animate__fadeInRight"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="item-img">
                        <img
                          className="m-0"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAACvCAYAAABdEgM5AAAABHNCSVQICAgIfAhkiAAADepJREFUeF7tnW2IXUcZgGebxP2IzW4qJMHaNgWlLU2bVINWKlVbqDZgMYKhEQxtQUVFSn5YrJ+IP4QWDGrxE23Jn5T+MCL4tZHaBmKrpGowkG0XzTY1JOmP7G6UZtckrvNee2/OTs65c+bee3buvOc54I90Z87MPO97HmfOx9yBl05MLxgOCEAAAhEIDCCgCNRpEgIQaBBAQCQCBCAQjQACioaehiEAAQREDkAAAtEIIKBo6GkYAhBAQOQABCAQjQACioaehiEAAQREDkAAAtEIIKBo6GkYAhBAQOQABCAQjQACioaehiEAAQREDkAAAtEIIKBo6GkYAhBAQOQABCAQjQACioaehiEAAQREDkAAAtEIIKBo6GkYAhBAQOQABCAQjQACioaehiEAAQREDkAAAtEIIKBo6GkYAhBAQOQABCAQjQACioaehiEAAQREDkAAAtEIIKBo6GkYAhBAQOQABCAQjQACioaehiEAAQREDkAAAtEIIKBo6GkYAhBAQOQABCAQjQACioaehiEAAQREDkAAAtEIIKBo6GkYAhBAQOQABCAQjQACioaehiEAAQREDkAAAtEIIKBo6GkYAhBAQOQABCAQjQACioaehiEAAQREDkAAAtEIIKBo6GkYAhBAQOQABCAQjQACioaehiEAAQREDkAAAtEIIKBo6GkYAhBAQOQABCAQjQACioaehiEAAQREDkAAAtEIIKBo6GkYAhBAQOQABCAQjQACioaehiEAAQREDkAAAtEIIKBo6GkYAhBAQOQABCAQjQACioaehiEAAQREDkAAAtEIIKBo6GkYAhBAQOQABCAQjQACioaehiEAAQREDkAAAtEIIKAO0J9dGDC7pkfMP88v66C2MW9ZfsHsXP2aGR5Y6Kg+lSCghQACCowk8gkERnEItCGAgALSA/kEwKIoBEoQQEAlIEkR5FMSFMUgEEAAAZWAhXxKQKIIBDoggIA80JBPB1lFFQiUJICA2oBCPiWziGIQ6JAAAioAh3w6zCiqQSCAAALKgYV8AjKIohDoggACcuAhny6yiaoQCCSAgDLAkE9g9lAcAl0SQECvA9Qin2MvT5kndz/eZVoY89BXvr7oHHvsOV+x55bjqmvWm+077u+6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"
                        />
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-3 single-item wow animate animate__fadeInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="item-img">
                        <img
                          className="m-0"
                          src="http://udtech-sa.com/assets/net.6c13232d.png"
                        />
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-3 single-item wow animate animate__fadeInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="item-img">
                        <img
                          className="m-0"
                          src="data:image/png;base64,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"
                        />
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-3 single-item wow animate animate__fadeInRight"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="item-img">
                        <img
                          className="m-0"
                          src="http://udtech-sa.com/assets/node.15cf4ad4.png"
                        />
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-3 single-item wow animate animate__fadeInRight"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="item-img">
                        <img
                          className="m-0"
                          src="http://udtech-sa.com/assets/python.1048713b.png"
                        />
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-3 single-item wow animate animate__fadeInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="item-img">
                        <img className="m-0" src={JavaImg} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-history">
                <div
                  className="col-12 col-md-6 py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="about-left mt-5">
                    <h3>Grow your business with the right mobile solutions </h3>
                    <p>
                      Whether you’re transforming internal business processes,
                      working on an idea that will change the world, or simply
                      increasing your company’s presence in the market, custom
                      mobile application development lets you achieve your goals
                      quickly and efficiently. Trusted design methodologies and
                      high-quality processes help you maximize the value of your
                      mobile app while ensuring you receive a feature-rich,
                      intuitive product that users love.{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-md-6 py-2 pe-4 ps-4 wow animanimate animate__fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="about-left mt-5">
                    <h3>Meet users’ increasingly demanding expectations</h3>
                    <p>
                      To create a top mobile solution, you need a combination of
                      well-crafted system architecture and high-quality code.
                      Our experts help you select the most appropriate
                      technologies to speed up the mobile application
                      development process and ensure your users receive the
                      outstanding experience they expect.
                    </p>
                  </div>
                </div>
              </div>
              <div className="single-history">
                <div
                  className="col-12 col-md-6 py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="about-left mt-5">
                    <h3>How to choose the technology for the application?</h3>
                    <p>
                      Choosing the right technology for your mobile app is a key
                      decision that will significantly influence its success.
                      When planning a cross-platform mobile app, you need to
                      make sure that the underlying tech ensures stable
                      performance and adequate user-friendliness. On top of
                      that, it must enable you to create a beautiful, intuitive
                      UI Although there are many cases where it’s better to
                      stick with native development, cross-platform mobile app
                      development is worth considering as it significantly
                      decreases the time and cost of development. For relatively
                      small custom mobile applications without specific platform
                      requirements, React Native or a similar framework can be a
                      perfect match.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                  navigation={false}
                  modules={[Navigation]}
                  className="mySwiper"
                  scrollbar={{ draggable: true }}
                  loop={true}
                  autoplay={true}
                  onSwiper={(swiper) => setSwiperRef(swiper)}
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
                      spaceBetween: 20,
                    },
                    1204: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
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
        <Newsletter />
      </main>
    </>
  );
};

export default MobileApps;