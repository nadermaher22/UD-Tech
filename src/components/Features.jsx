import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import axios from "axios";

const Features = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("http://apiv2.udtech-sa.com/api/WebSite/GetFeatures?languageId=1")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            {apiData.map((feature) => {
              return (
                <div
                  className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                  key={feature.id}
                >
                  <div className="single-feature">
                    <div className="feature-inner">
                      <div className="icon">
                        <img src={feature.photoPath} alt="" />
                      </div>
                      <CountUp className="counter" end={`${feature.counter}`}>
                        {({ countUpRef, start }) => (
                          <ReactVisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </ReactVisibilitySensor>
                        )}
                      </CountUp>
                      <sup>+</sup>
                      <h4>{feature.title}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
