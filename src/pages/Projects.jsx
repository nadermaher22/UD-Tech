import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import Project1 from "../assests/img/project/project-1.jpg";
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

const Projects = () => {
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
                      <h1>Project</h1>
                      <span>
                        <a href="index.html">Home</a>
                        <BsArrowRight className="m-1" />
                        Project
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
          <section className="project-area sec-mar">
            <div className="container">
              <div className="title-wrap">
                <div className="sec-title">
                  <span>Case Study</span>
                  <h2>Project</h2>
                  <p>
                    Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                    fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                    convallis sapien, quis commodo libero.
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
                    <a href="project-details.html">
                      <img src={Project1} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>Software</span>
                    <h4>Desktop Mockup</h4>
                    <div className="view-btn">
                      <a href="project-details.html">view details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 single-item developing web">
                  <div className="item-img">
                    <a href="project-details.html">
                      <img src={Project2} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>Template</span>
                    <h4>Creative Agency</h4>
                    <div className="view-btn">
                      <a href="project-details.html">view details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 single-item developing">
                  <div className="item-img">
                    <a href="project-details.html">
                      <img src={Project3} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>App</span>
                    <h4>Mobile Crypto Wallet</h4>
                    <div className="view-btn">
                      <a href="project-details.html">view details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 single-item graphic">
                  <div className="item-img">
                    <a href="project-details.html">
                      <img src={Project4} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>UI Kit</span>
                    <h4>E-Shop Ecommerce</h4>
                    <div className="view-btn">
                      <a href="project-details.html">view details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 single-item ui">
                  <div className="item-img">
                    <a href="project-details.html">
                      <img src={Project5} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>Graphic</span>
                    <h4>Art Deco Cocktails</h4>
                    <div className="view-btn">
                      <a href="project-details.html">view details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 single-item web">
                  <div className="item-img">
                    <a href="project-details.html">
                      <img src={Project6} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>3D Design</span>
                    <h4>Low poly Base mesh</h4>
                    <div className="view-btn">
                      <a href="project-details.html">view details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 single-item developping">
                  <div className="item-img">
                    <a href="project-details.html">
                      <img src={Project7} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>Video</span>
                    <h4>Animation Studio</h4>
                    <div className="view-btn">
                      <a href="project-details.html">view details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 single-item ui">
                  <div className="item-img">
                    <a href="project-details.html">
                      <img src={Project8} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>Motion</span>
                    <h4>Motion Graphics</h4>
                    <div className="view-btn">
                      <a href="project.html">view details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 single-item developing">
                  <div className="item-img">
                    <a href="project-details.html">
                      <img src={Project9} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>App</span>
                    <h4>Mobile Crypto Wallet</h4>
                    <div className="view-btn">
                      <a href="project-details.html">view details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 single-item web">
                  <div className="item-img">
                    <a href="project-details.html">
                      <img src={Project10} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>UI/UX</span>
                    <h4>Design Demo</h4>
                    <div className="view-btn">
                      <a href="project-details.html">view details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 single-item graphic">
                  <div className="item-img">
                    <a href="project-details.html">
                      <img src={Project11} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>Graphic</span>
                    <h4>Art Deco Cocktails</h4>
                    <div className="view-btn">
                      <a href="project-details.html">view details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 single-item ui">
                  <div className="item-img">
                    <a href="project-details.html">
                      <img src={Project12} alt="" />
                    </a>
                  </div>
                  <div className="item-inner-cnt">
                    <span>UI Kit</span>
                    <h4>E-Shop Ecommerce</h4>
                    <div className="view-btn">
                      <a href="project-details.html">view details</a>
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

export default Projects;
