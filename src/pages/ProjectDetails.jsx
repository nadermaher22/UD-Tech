import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowLeft, BsArrowRight, BsSearch } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import ProjectThumbnail from "../assests/img/project/thumbnail-project.jpg";
import WorkThumbnail from "../assests/img/project/work-thumb-slide.jpg";
import CheckImg from "../assests/img/icons/check.svg";
import Project1 from "../assests/img/project/project-1.jpg";
import Project2 from "../assests/img/project/project-2.jpg";
import Project3 from "../assests/img/project/project-3.jpg";

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });
  return (
    <>
      <main class="creasoft-wrap">
        <div class="line_wrap">
          <div class="line_item"></div>
          <div class="line_item"></div>
          <div class="line_item"></div>
          <div class="line_item"></div>
          <div class="line_item"></div>
        </div>
        <section class="breadcrumbs">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="breadcrumb-wrapper">
                  <div class="breadcrumb-cnt">
                    <h1>Project Details</h1>
                    <span>
                      <a href="index.html">Home</a>
                      <BsArrowRight className="m-1" />
                      Project Details
                    </span>
                    <div class="breadcrumb-video">
                      <img src={VideoImg} alt="" />
                      <div class="video-inner">
                        <a
                          class="video-popup"
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
        <section class="project-details sec-mar-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="project-details-content">
                  <div class="project-thumb">
                    <img src={ProjectThumbnail} alt="" />
                    <div class="tag">
                      <a href="/project-details">Software</a>
                    </div>
                  </div>
                  <h3>Desktop Mockup</h3>
                  <p>
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Etiam eu nibh elementum, accumsan ona neque ac,
                    aliquet nunc. In eu ipsum fringilla, accumsan purus vel,
                    pellentesque risus. Vivamus vehicula nl purus at eros
                    interdum, in dignissim nulla vestibulum. Nunc sit amet
                    finibus felis, ut egestas lacus. Sedan pellentesque quis
                    magna eu vestibulum. Ut sed commodo neque. Morbi erat nisi,
                    vehicula quis faucibus il ut, hendrerit vel tortor. In
                    pharetra lectus luctus ornare sollicitudin. Pellentesque at
                    neque nec justo sokal porttitor egestas nec eget ex.Etiam
                    suscipit neque elit, hendrerit laoreet quam ultrices id.
                    Proin nec tolde lacinia ligula, sed laoreet ex. Sed nisl
                    ligula, euismod vel justo scelerisque, vestibulum ultricies
                    tellus. volv Pellentesque vel turpis vitae urna tincidunt
                    hendrerit at ut est. Sed eget feugiat felis. Integer sed
                    ornare sem, eget porttitor nisi. Nunc erat sapien, porta
                    laoreet gravida ac, dictum eu tortor. Nulla faucibus leoren
                    rhoncus, gravida ligula a, ultrices enim. Proin lacinia
                    malesuada finibus.
                  </p>
                  <div class="clinet-need">
                    <h4>Client Needs</h4>
                    <p>
                      The style and theme should match the current website
                      http://www.egenslab.com but be a little more punchy. Clean
                      and crisp is preference.
                    </p>
                    <p>
                      Our landing page will have more text than other landing
                      pages (we have already written this out at
                      http://egenslab.com) as our client's need education to
                      purchase this new service.
                    </p>
                    <p>
                      The landing page should start with punchy headlines and
                      less text and as you scroll down it will become more text
                      heavy for those wanting to learn more before clicking to
                      complete the contact form.
                    </p>
                  </div>
                  <div class="working-process">
                    <h4>Working Process</h4>
                    <div class="swiper work-process-slide">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <div class="work-thumb">
                            <img src={WorkThumbnail} alt="" />
                            <div class="label">
                              <span>01. Brainstorming</span>
                            </div>
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="work-thumb">
                            <img src={WorkThumbnail} alt="" />
                            <div class="label">
                              <span>02. Drawing</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="arrow">
                        <div class="swiper-button-next-c">
                          <BsArrowRight />
                        </div>
                        <div class="swiper-button-prev-c">
                          <BsArrowLeft />
                        </div>
                      </div>
                    </div>
                    <p>
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus. Etiam eu nibh elementum, accumsan ona neque ac,
                      aliquet nunc. In eu ipsum fringilla, accumsan purus vel,
                      pellentesque risus. Vivamus vehicula nl purus at eros
                      interdum, in dignissim nulla vestibulum. Nunc sit amet
                      finibus felis, ut egestas lacus. Sedan pellentesque quis
                      magna eu vestibulum. Ut sed commodo neque. Morbi erat nis
                    </p>
                  </div>
                  <div class="check-lunch">
                    <h4>Check & Launch</h4>
                    <div class="row">
                      <div class="col-lg-6">
                        <ul class="check">
                          <li>
                            <i>
                              <img src={CheckImg} alt="" />
                            </i>
                            Aenean vitae pharetra leo. Aliquam pri.
                          </li>
                          <li>
                            <i>
                              <img src={CheckImg} alt="" />
                            </i>
                            In aliquet, quam vitae blandit temporg.
                          </li>
                          <li>
                            <i>
                              <img src={CheckImg} alt="" />
                            </i>
                            Aenean volutpat enim vitae tincidunta.
                          </li>
                          <li>
                            <i>
                              <img src={CheckImg} alt="" />
                            </i>
                            Felis at venenatis porttitor, nunc arcua.
                          </li>
                          <li>
                            <i>
                              <img src={CheckImg} alt="" />
                            </i>
                            Maximus felis quam vitae tortor phase.
                          </li>
                          <li>
                            <i>
                              <img src={CheckImg} alt="" />
                            </i>
                            Nulla vulputate urna quis ex pellentes.
                          </li>
                        </ul>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          Interdum et malesuada fames ac ante ipsum tobal primis
                          in faucibus. Etiam eu nibh elementum, tolda accumsan
                          ona In eu ipsum fringilla, accumsan pur neque ac,
                          aliquet nunc. In eu ipsum fringilla, wolan accumsan
                          purus vel, pellentesque risus. Vivamusa purus at eros
                          interdum, in dignissim nulla Ut sedal vestibulum. Nunc
                          sit amet finibus felis, ut egestas lacus. Sedan
                          commodo neque. Morbi erat niswole pellentesque quis
                          magna eu vestibulum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="sidebar-widget">
                  <div class="client-box">
                    <span>Client:</span>
                    <h5>Argova Josen</h5>
                  </div>
                  <div class="client-box">
                    <span>Company:</span>
                    <h5>Egens Theme</h5>
                  </div>
                  <div class="client-box">
                    <span>Location:</span>
                    <h5>7 Lake Street, London</h5>
                  </div>
                  <div class="client-box">
                    <span>Project Type:</span>
                    <h5>Desktop Mockup</h5>
                  </div>
                  <div class="client-box">
                    <span>Duration:</span>
                    <h5>6 Month</h5>
                  </div>
                </div>
                <div class="sidebar-widget">
                  <div class="contact-info">
                    <h3>Need help?</h3>
                    <p>
                      Interdum et malesuada fames ac ante tolds alli ipsum
                      primis in faucibus. Etiam eu nibh.
                    </p>
                    <div class="cmpy-info">
                      <div class="icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div class="cnt">
                        <h5>Location</h5>
                        <p>
                          168/170, Avenue 01, Old York Drive Rich Mirpur DOHS,
                          Bangladesh
                        </p>
                      </div>
                    </div>
                    <div class="cmpy-info">
                      <div class="icon">
                        <FaPhoneAlt />
                      </div>
                      <div class="cnt">
                        <h5>Phone</h5>
                        <a href="tel:05661111985">+880 566 1111 985</a>
                        <a href="tel:06571111576">+880 657 1111 576</a>
                      </div>
                    </div>
                    <div class="cmpy-info">
                      <div class="icon">
                        <FaEnvelope />
                      </div>
                      <div class="cnt">
                        <h5>Email</h5>
                        <a href="tell:info@example.com">info@example.com</a>
                        <a href="tell:info@support.com">info@support.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-slider">
                <h4>Related Project</h4>
                <div class="arrow">
                  <div class="swiper-button-next-c">
                    <BsArrowRight />
                  </div>
                  <div class="swiper-button-prev-c">
                    <BsArrowRight />
                  </div>
                </div>
                <div class="swiper project-slide">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="single-item">
                        <div class="item-img">
                          <a href="/project-details">
                            <img src={Project1} alt="" />
                          </a>
                        </div>
                        <div class="item-inner-cnt">
                          <span>Software</span>
                          <h4>Desktop Mockup</h4>
                          <div class="view-btn">
                            <a href="/project-details">view details</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="single-item">
                        <div class="item-img">
                          <a href="/project-details">
                            <img src={Project2} alt="" />
                          </a>
                        </div>
                        <div class="item-inner-cnt">
                          <span>Template</span>
                          <h4>Creative Agency</h4>
                          <div class="view-btn">
                            <a href="/project-details">view details</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="single-item">
                        <div class="item-img">
                          <a href="/project-details">
                            <img src={Project3} alt="" />
                          </a>
                        </div>
                        <div class="item-inner-cnt">
                          <span>App</span>
                          <h4>Mobile Crypto Wallet</h4>
                          <div class="view-btn">
                            <a href="/project-details">view details</a>
                          </div>
                        </div>
                      </div>
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

export default ProjectDetails;
