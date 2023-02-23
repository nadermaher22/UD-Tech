import React from "react";
import FeatureIcon1 from "../assests/img/icons/feature-icon-1.png";
import FeatureIcon2 from "../assests/img/icons/feature-icon-2.png";
import FeatureIcon3 from "../assests/img/icons/feature-icon-3.png";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const Features = () => {
  return (
    <>
      <section className="features-area">
        <div className="container">
          <div
            className="title-wrap wow animate__animated animate__fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-title white">
              <span>Care Study</span>
              <h2>Features</h2>
              <p>
                Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                convallis sapien, quis commodo libero.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={FeatureIcon1} alt="" />
                  </div>
                  <CountUp className="counter" end={150}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                  <sup>+</sup>
                  <h4>Project Completed</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={FeatureIcon2} alt="" />
                  </div>
                  <CountUp className="counter" end={250}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                  <sup>+</sup>
                  <h4>Satisfied Clients</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={FeatureIcon3} alt="" />
                  </div>
                  <CountUp className="counter" end={50}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                  <sup>+</sup>
                  <h4>Expert Teams</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
