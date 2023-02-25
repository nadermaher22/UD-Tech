import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import axios from "axios";

const Clients = () => {
  useEffect(() => {
    axios
      .get("http://apiv2.udtech-sa.com/api/WebSite/GetClients?languageId=1")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [apiData, setApiData] = useState([]);
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
                      <h1>Clients</h1>
                      <span>
                        <a href="/">Home</a>
                        <BsArrowRight className="m-1" />
                        Clients
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
          <section
            className="why-choose sec-mar wow animate animate__fadeIn"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="container">
              <div className="row g-4 ">
                {apiData.map((e) => {
                  return (
                    <div
                      className="col-12 col-md-4 col-lg-3 single-item graphic ui"
                      key={e.id}
                    >
                      <div className="item-img">
                        <a href="/">
                          <img src={e.photoPath} alt="" />
                        </a>
                      </div>
                      <div className="item-inner-cnt">
                        <h4>{e.name}</h4>
                        <div className="view-btn">
                          <a href="/">View Website</a>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* <div className="col-12 col-md-4 col-lg-3 single-item developing web">
                  <div className="item-img">
                    <a href="/">
                      <img src={Client2} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <h4>Client Name</h4>
                    <div className="view-btn">
                      <a href="/">View Website</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 single-item developing">
                  <div className="item-img">
                    <a href="/">
                      <img src={Client3} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <h4>Client Name</h4>
                    <div className="view-btn">
                      <a href="/">View Website</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 single-item graphic">
                  <div className="item-img">
                    <a href="/">
                      <img src={Client4} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <h4>Client Name</h4>
                    <div className="view-btn">
                      <a href="/">View Website</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 single-item ui">
                  <div className="item-img">
                    <a href="/">
                      <img src={Client5} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <h4>Client Name</h4>
                    <div className="view-btn">
                      <a href="/">View Website</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 single-item web">
                  <div className="item-img">
                    <a href="/">
                      <img src={Client6} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <h4>Client Name</h4>
                    <div className="view-btn">
                      <a href="/">View Website</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 single-item developping">
                  <div className="item-img">
                    <a href="/">
                      <img src={Client7} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <h4>Client Name</h4>
                    <div className="view-btn">
                      <a href="/">View Website</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 single-item ui">
                  <div className="item-img">
                    <a href="/">
                      <img src={Client8} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <h4>Client Name</h4>
                    <div className="view-btn">
                      <a href="/">View Website</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 single-item developing">
                  <div className="item-img">
                    <a href="/">
                      <img src={Client9} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <h4>Client Name</h4>
                    <div className="view-btn">
                      <a href="/">View Website</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 single-item web">
                  <div className="item-img">
                    <a href="/">
                      <img src={Client10} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <h4>Client Name</h4>
                    <div className="view-btn">
                      <a href="/">View Website</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 single-item graphic">
                  <div className="item-img">
                    <a href="/">
                      <img src={Client11} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <h4>Client Name</h4>
                    <div className="view-btn">
                      <a href="/">View Website</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 single-item ui">
                  <div className="item-img">
                    <a href="/">
                      <img src={Client12} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <h4>Client Name</h4>
                    <div className="view-btn">
                      <a href="/">View Website</a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>

          <Newsletter />
        </main>
      </div>
    </>
  );
};

export default Clients;
