import React, { useState, useEffect } from "react";
import IntroVideo from "../assests/img/video/UDT_PromoVideo.mp4";
import IntroVideoMob from "../assests/img/video/UDT_PromoVideo-Mobile.mp4";
import Logo from "../assests/img/logo-dark.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "swiper/css";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import { useMotionValue } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import ProjectBtn from "../components/ProjectBtn";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t] = useTranslation();
  const [servicesApiData, setServicesApiData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [getClients, setGetClients] = useState([]);
  const [getBlogsHome, setGetBlogsHome] = useState([]);
  const [getContact, setGetcontact] = useState([]);
  const [preLoader, setPreLoader] = useState(true);
  const lang = localStorage.i18nextLng === "en" ? 1 : 2;

  useEffect(() => {
    axios
      .get(
        `http://apiv2.udtech-sa.com/api/WebSite/GetContactUs?languageId=${lang}`
      )
      .then((res) => {
        setGetcontact(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  useEffect(() => {
    axios
      .get(
        `http://apiv2.udtech-sa.com/api/WebSite/GetClients?languageId=${lang}`
      )
      .then((res) => {
        setGetClients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  useEffect(() => {
    axios
      .get(`http://apiv2.udtech-sa.com/api/WebSite/GetBlogs?languageId=${lang}`)
      .then((res) => {
        setGetBlogsHome(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  useEffect(() => {
    axios
      .get(
        `http://apiv2.udtech-sa.com/api/WebSite/GetServices?languageId=${lang}`
      )
      .then((res) => {
        setServicesApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  useEffect(() => {
    axios
      .get(
        `http://apiv2.udtech-sa.com/api/WebSite/GetAboutUs?languageId=${lang}`
      )
      .then((res) => {
        setAboutData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  useEffect(() => {
    axios
      .get(
        `http://apiv2.udtech-sa.com/api/WebSite/GetProjects?languageId=${lang}`
      )
      .then((res) => {
        setGetProjects(res.data);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  const [getProjects, setGetProjects] = useState([]);
  const [item, setItem] = useState([]);
  const menuItems = [...new Set(getProjects.map((Val) => Val.category))];
  const [swiperRef, setSwiperRef] = useState(null);
  const filterItem = (curcat) => {
    const newItem = getProjects.filter((newVal) => {
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
                <a href={getContact.turl}>Twitter</a>
              </li>
              <li>
                <a href={getContact.iurl}>Instagram</a>
              </li>
              <li>
                <a href={getContact.lurl}>Linkedin</a>
              </li>
            </ul>
          </div>
          <div className="hero-wrapper">
            <div className="container">
              <video
                id="bigScreen"
                className="first-slide"
                autoPlay="autoplay"
                loop="loop"
                muted="muted"
              >
                <source
                  src={IntroVideo}
                  type='video/webm; codecs="vp8, vorbis"'
                />
              </video>
              <video
                id="smallScreen"
                className="first-slide"
                autoPlay="autoplay"
                loop="loop"
                muted="muted"
              >
                <source
                  src={IntroVideoMob}
                  type='video/webm; codecs="vp8, vorbis"'
                />
              </video>
            </div>
          </div>
        </section>
        <div>
          <section className="services-area layout2 sec-mar">
            <div className="container">
              <div
                className="title-wrap wow animate animate__fadeInUp"
                data-wow-duration="1500ms"
              >
                <div className="sec-title white">
                  <span>{t("services_page_our_solutions")}</span>
                  <h2>{t("services_page_services")}</h2>

                  <p data-aos="flip-left">
                    {t("services_page_home_paragraph")}
                  </p>
                </div>
              </div>
              <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                centeredSlides={true}
                scrollbar={{ draggable: true }}
                loop={true}
                // autoplay={{
                //   delay: 5000,
                //   disableOnInteraction: false,
                // }}
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
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                  1204: {
                    slidesPerView: 2.7,
                    spaceBetween: 50,
                  },
                }}
              >
                {servicesApiData.map((service) => {
                  return (
                    <SwiperSlide key={service.id}>
                      <div
                        className="swiper-slide wow animate animate__fadeInUp "
                        data-wow-duration="1500ms"
                      >
                        <div className="single-service layout2">
                          <span>{service.id}</span>
                          <div className="icon">
                            <img src={service.photoPath} alt={service.title} />
                          </div>
                          <h4>{service.title}</h4>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: service.description
                                .substring(200, 20)
                                .concat(" ..."),
                            }}
                          ></p>
                          <div className="read-btn">
                            <a href={`/service-details/${service.id}`}>
                              {t("services_page_read_more")}
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </section>
        </div>
        <section className="about-area sec-mar-bottom">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 or-2 wow animate animate__fadeIn text-left"
                data-wow-duration="1500ms"
              >
                <div className="sec-title white layout2">
                  <div
                    dangerouslySetInnerHTML={{ __html: aboutData.title }}
                  ></div>
                </div>
                <div className="about-left layout2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: aboutData.aboutDescription,
                    }}
                  ></div>
                  <div className="company-since layout2">
                    <div className="company-logo">
                      <img src={Logo} alt="" />
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: aboutData.missionDescription,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 or-1 wow animate animate__fadeIn"
                data-wow-duration="1500ms"
              >
                <div className="about-right layout2">
                  <div className="banner-1">
                    <img src={aboutData.visionPhotoPath} alt="" />
                  </div>
                  <div className="buttons">
                    <div className="cmn-btn">
                      <div className="line-1"></div>
                      <div className="line-2"></div>
                      <a href="/contact">{t("call_us")}</a>
                    </div>
                    <div className="cmn-btn ">
                      <div className="line-1"></div>
                      <div className="line-2"></div>
                      <a href="/contact">{t("company_profile")}</a>
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
                <span>{t("project_page_case_study")}</span>
                <h2>{t("project_page_project")}</h2>
                <p>{t("home_project_paragraph")}</p>
              </div>
            </div>
            <ProjectBtn
              setItem={setItem}
              menuItems={menuItems}
              filterItem={filterItem}
              item={getProjects}
            />
            <ProjectCard item={item} />
          </div>
        </section>
        <section className="our-partner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="sec-title white layout2">
                  <span>{t("about_page_satisfied_customers")}</span>
                  <h2>{t("mobileApps_page_our_partners")}</h2>
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
                  slidesPerView={2.7}
                  centeredSlides={true}
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
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                    1204: {
                      slidesPerView: 2.7,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {getClients.map((client) => {
                    return (
                      <div className="swiper partner-slider" key={client.id}>
                        <div className="swiper-wrapper">
                          <SwiperSlide>
                            <div className="single-partner single-item graphic ui">
                              <div className="item-img">
                                <a href="/clients">
                                  <img src={client.photoPath} alt="" />
                                </a>
                              </div>
                              <div className="item-inner-cnt">
                                <h4 className="d-flex">{client.name}</h4>
                                <div className="view-btn">
                                  {/* <a href="/">View Website</a> */}
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </div>
                      </div>
                    );
                  })}
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
                      <a href="/clients">{t("mobileApps_page_more_clients")}</a>
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
              data-wow-duration="1500ms"
            >
              <div className="sec-title white">
                <span>{t("home_blog_all")}</span>
                <h2>{t("home_blog_latest")}</h2>
                <p>{t("home_blog_paragraph")}</p>
              </div>
            </div>
            <div className="row gy-4">
              {getBlogsHome.slice(0, 3).map((blog) => {
                return (
                  <div
                    className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                    data-wow-duration="1500ms"
                    key={blog.id}
                  >
                    <div className="single-blog layout2">
                      <div className="blog-thumb">
                        <a href={`/blog-details/${blog.id}`}>
                          <img src={blog.photoPath} alt="" />
                        </a>
                        <div className="tag">
                          <a href="/projects">{blog.category}</a>
                        </div>
                      </div>
                      <div className="blog-inner">
                        <div className="author-date">
                          <a href="/">
                            {t("by")}, {blog.blogAuthor}
                          </a>
                          <a href="/">{blog.blogDate}</a>
                        </div>
                        <h4>
                          <a href={`/blog-details/${blog.id}`}>{blog.title}</a>
                        </h4>
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
    </>
  );
};

export default Home;
