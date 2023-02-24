import React, { useEffect } from "react";
import WOW from "wowjs";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectCard = ({ item }) => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });
  return (
    <section className="">
      <div className="container-fluid">
        <div className="row g-4 project-items">
          {item.map((Val) => {
            return (
              <div
                className="col-md-6 col-lg-4 single-item wow animate animate__fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="500ms"
              >
                <div className="item-img">
                  <a href="/projects">
                    <img src={Val.img} alt="" />
                  </a>
                </div>
                <div className="item-inner-cnt">
                  <span>{Val.title}</span>
                  <h4>{Val.subtitle}</h4>
                  <div className="view-btn">
                    <a href="/project-details">view details</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
