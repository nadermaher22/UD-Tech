import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowRight } from "react-icons/bs";
import { FaLongArrowAltRight, FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import BlogThumbnail from "../assests/img/blog/blog-thumnail.jpg";
import ServiceIcon from "../assests/img/icons/service-details-icon.png";
import WidgetBanner from "../assests/img/widget-banner-bg.jpg";
import Arrow from "../assests/img/arrow-angle.png";
import Thumb from "../assests/img/blog/thumb-1.jpg";
import Thumb2 from "../assests/img/blog/thumb-2.jpg";
import Thumb3 from "../assests/img/blog/thumb-3.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [apiData, setApiData] = useState([]);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetServiceDetails?languageId=${lang}&Id=${serviceId}`
      )
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

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
                    <h1>Service Details</h1>
                    <span>
                      <a href="/">Home</a>
                      <BsArrowRight className="m-1" />
                      Service Details
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
        <section className="service-details sec-mar-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="service-details-content">
                  <img src={apiData.photoPath} alt="" />
                  <h3>
                    {/* <i>
                      <img src={ServiceIcon} alt="" />
                    </i> */}
                    {apiData.title}
                  </h3>
                  <p>{apiData.description}</p>
                  {/* <p>
                    ut, hendrerit vel tortor. In pharetra lectus luctus ornare
                    sollicitudin. Pellentesque at neque nec justo sokal
                    porttitor egestas nec eget ex.Etiam suscipit neque elit,
                    hendrerit laoreet quam ultrices id. Proin nec tolde lacinia
                    ligula, sed laoreet ex. Sed nisl ligula, euismod vel justo
                    scelerisque,
                  </p>
                  <p>
                    vestibulum ultricies tellus. volv Pellentesque vel turpis
                    vitae urna tincidunt hendrerit at ut est. Sed eget feugiat
                    felis. Integer sed ornare sem, eget porttitor nisi. Nunc
                    erat sapien, porta laoreet gravida ac,
                  </p> */}
                </div>
              </div>
              {/* <div className="col-lg-4">
                <div className="sidebar-widget">
                  <h4>Category</h4>
                  <ul className="category">
                    <li>
                      <a href="/projects">
                        Web Design
                        <BsArrowRight />
                      </a>
                    </li>
                    <li>
                      <a href="/projects">
                        Apps Development
                        <BsArrowRight />
                      </a>
                    </li>
                    <li>
                      <a href="/projects">
                        Software Development
                        <BsArrowRight />
                      </a>
                    </li>
                    <li>
                      <a href="/projects">
                        Motion Graphics
                        <BsArrowRight />
                      </a>
                    </li>
                    <li>
                      <a href="/projects">
                        UI/UX Design
                        <BsArrowRight />
                      </a>
                    </li>
                    <li>
                      <a href="/projects">
                        Graphic Design
                        <BsArrowRight />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-banner">
                  <img src={WidgetBanner} alt="" />
                  <div className="banner-inner">
                    <h3>
                      Any Project <span>Call Now.</span>
                      <img className="angle" src={Arrow} alt="" />
                    </h3>
                    <a href="tel:11231231234">+1-123-123-1234</a>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="service-items sec-mar-top">
              <div className="service-details-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-details">
                      <h4>
                        <span>01</span>Brainstroming & Wirefarme
                      </h4>
                      <p>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Etiam eu nibh elementum, accumsan ona
                        vestibulum ultricies tellus. volv Pellentesque vel tu
                        neque ac, aliquet nunc. In eu ipsum fringilla, accumsan
                        purus vel, tourbakaniv pellentesque risus. Vivamus
                        vehicula nl hendrerit vel tortor. In pharetra lectus
                        purus at eros interdum, in dignissim nulla vestibulum.
                        Nunc sit amet finibuson felis, ut egestas lacus. Sedan
                        pellentesque quis magna eu vestibulum. Olangb
                        pellentesque quis magna eu vestibulum. Ut sed commodo
                        neque. Morbi erat nisi, vehicula quis faucibus il
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-details-thumb">
                      <img src={Thumb} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-details-item">
                <div className="row">
                  <div className="col-lg-6 or-2">
                    <div className="single-details-thumb">
                      <img src={Thumb2} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-details">
                      <h4>
                        <span>02</span>UI Design
                      </h4>
                      <p>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Etiam eu nibh elementum, accumsan ona
                        vestibulum ultricies tellus. volv Pellentesque vel tu
                        neque ac, aliquet nunc. In eu ipsum fringilla, accumsan
                        purus vel, tourbakaniv pellentesque risus. Vivamus
                        vehicula nl hendrerit vel tortor. In pharetra lectus
                        purus at eros interdum, in dignissim nulla vestibulum.
                        Nunc sit amet finibuson felis, ut egestas lacus. Sedan
                        pellentesque quis magna eu vestibulum. Olangb
                        pellentesque quis magna eu vestibulum. Ut sed commodo
                        neque. Morbi erat nisi, vehicula quis faucibus il
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-details-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-details">
                      <h4>
                        <span>03</span>Final Developing
                      </h4>
                      <p>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Etiam eu nibh elementum, accumsan ona
                        vestibulum ultricies tellus. volv Pellentesque vel tu
                        neque ac, aliquet nunc. In eu ipsum fringilla, accumsan
                        purus vel, tourbakaniv pellentesque risus. Vivamus
                        vehicula nl hendrerit vel tortor. In pharetra lectus
                        purus at eros interdum, in dignissim nulla vestibulum.
                        Nunc sit amet finibuson felis, ut egestas lacus. Sedan
                        pellentesque quis magna eu vestibulum. Olangb
                        pellentesque quis magna eu vestibulum. Ut sed commodo
                        neque. Morbi erat nisi, vehicula quis faucibus il
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-details-thumb">
                      <img src={Thumb3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        <Newsletter />
      </main>
    </>
  );
};

export default ServiceDetails;
