import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const [apiData, setApiData] = useState([]);
  const [t, i18n] = useTranslation();
  const lang = localStorage.i18nextLng === "en" ? 1 : 2;

  useEffect(() => {
    axios
      .get(
        `http://api.udtech-sa.com/api/WebSite/GetTestimonials?languageId=${lang}`
      )
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  function starsCounter(stars) {
    const rows = [];
    for (let i = 0; i < stars; i++) {
      rows.push(
        <a href="/">
          <FaStar />
        </a>
      );
    }
    return rows;
  }

  const [swiperRef, setSwiperRef] = useState(null);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <>
      <section className="testimonial-area sec-mar">
        <div className="container-fluid p-0">
          <div className="title-wrap">
            <div className="sec-title white">
              <span>{t("testimonial_title")}</span>
              <h2>{t("testimonial_client_say")}</h2>
              <p>{t("testimonial_paragraph")}</p>
            </div>
          </div>
          <div className="swiper testimonial-slider">
            <Swiper
              spaceBetween={20}
              slidesPerView={1.9}
              centeredSlides={true}
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              scrollbar={{ draggable: true }}
              loop={true}
              autoplay={{
                delay: 4000,
              }}
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
                  slidesPerView: 1.7,
                  spaceBetween: 50,
                },
              }}
            >
              {apiData.map((testimonial) => {
                return (
                  <SwiperSlide>
                    {({ isActive }) => (
                      <div
                        key={testimonial.id}
                        className={
                          isActive
                            ? "swiper-slide swiper-slide-active"
                            : "swiper-slide"
                        }
                      >
                        <div className="single-testimonial">
                          <div className="quote">
                            <FaQuoteRight />
                          </div>
                          <h5>{testimonial.name}</h5>
                          <span>{testimonial.category}</span>
                          <div className="stars">
                            {/* ToDo: map stars */}
                            {starsCounter(testimonial.starsCount)}
                          </div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: testimonial.comment,
                            }}
                          ></p>
                          <div className="reviewer">
                            <img src={testimonial.photoPath} alt="" />
                          </div>
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
