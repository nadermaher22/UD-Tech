import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Reviewer1 from "../assests/img/reivewer.jpg";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const Testimonials = () => {
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
              spaceBetween={50}
              slidesPerView={3}
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
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="single-testimonial">
                    <div className="quote">
                      <FaQuoteRight />
                    </div>
                    <h5>Martha Maldonado</h5>
                    <span>Executive Chairman</span>
                    <div className="stars">
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
                      </a>
                      <a href="/">
                        <FaStar />
                      </a>
                    </div>
                    <p>
                      Integer purus odio, placerat nec rhoncus in, ullamcorper
                      nec dolor. ani aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per sonic himenaeos. Praesent nec
                      neque at dolor venenatis consectetur europ Donec lacinia
                      placerat felis non aliquam.
                    </p>
                    <div className="reviewer">
                      <img src={Reviewer1} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="single-testimonial">
                    <div className="quote">
                      <FaQuoteRight />
                    </div>
                    <h5>Martha Maldonado</h5>
                    <span>Executive Chairman</span>
                    <div className="stars">
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
                      </a>
                      <a href="/">
                        <FaStar />
                      </a>
                    </div>
                    <p>
                      Integer purus odio, placerat nec rhoncus in, ullamcorper
                      nec dolor. ani aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per sonic himenaeos. Praesent nec
                      neque at dolor venenatis consectetur europ Donec lacinia
                      placerat felis non aliquam.
                    </p>
                    <div className="reviewer">
                      <img src={Reviewer1} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="single-testimonial">
                    <div className="quote">
                      <FaQuoteRight />
                    </div>
                    <h5>Martha Maldonado</h5>
                    <span>Executive Chairman</span>
                    <div className="stars">
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
                      </a>
                      <a href="/">
                        <FaStar />
                      </a>
                    </div>
                    <p>
                      Integer purus odio, placerat nec rhoncus in, ullamcorper
                      nec dolor. ani aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per sonic himenaeos. Praesent nec
                      neque at dolor venenatis consectetur europ Donec lacinia
                      placerat felis non aliquam.
                    </p>
                    <div className="reviewer">
                      <img src={Reviewer1} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="single-testimonial">
                    <div className="quote">
                      <FaQuoteRight />
                    </div>
                    <h5>Martha Maldonado</h5>
                    <span>Executive Chairman</span>
                    <div className="stars">
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
                      </a>
                      <a href="/">
                        <FaStar />
                      </a>
                    </div>
                    <p>
                      Integer purus odio, placerat nec rhoncus in, ullamcorper
                      nec dolor. ani aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per sonic himenaeos. Praesent nec
                      neque at dolor venenatis consectetur europ Donec lacinia
                      placerat felis non aliquam.
                    </p>
                    <div className="reviewer">
                      <img src={Reviewer1} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
