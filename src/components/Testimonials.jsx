import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import axios from "axios";

const Testimonials = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://apiv2.udtech-sa.com/api/WebSite/GetTestimonials?languageId=1"
      )
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <section className="testimonial-area sec-mar">
        <div className="container-fluid p-0">
          <div className="title-wrap">
            <div className="sec-title white">
              <span>Testimonial</span>
              <h2>Client Say About Us</h2>
              <p>
                Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                convallis sapien, quis commodo libero.
              </p>
            </div>
          </div>
          <div className="swiper testimonial-slider">
            <Swiper
              spaceBetween={20}
              slidesPerView={1.9}
              centeredSlides={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              scrollbar={{ draggable: true }}
              loop={true}
              autoplay={{
                delay: 2500,
              }}
              onSwiper={(swiper) => setSwiperRef(swiper)}
            >
              {apiData.map((testimonial) => {
                return (
                  <SwiperSlide key={testimonial.id}>
                    {({ isActive }) => (
                      <div
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
                            {/* <a href="/">
                              <FaStar />
                            </a>
                            <a href="/">
                              <FaStar />
                            </a>
                            <a href="/">
                              <FaStar />
                            </a>
                            <a href="/">
                              <FaStar />
                            </a>
                            <a href="/">
                              <FaStar />
                            </a> */}
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
