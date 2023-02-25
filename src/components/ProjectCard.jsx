import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const ProjectCard = ({ item }) => {
  useEffect(() => {
    axios
      .get("http://apiv2.udtech-sa.com/api/WebSite/GetProjects?languageId=1")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });
  return (
    <section className="">
      <div className="container-fluid">
        <div className="row g-4 project-items">
          {apiData.map((Val) => {
            return (
              <div
                className="col-md-6 col-lg-4 single-item wow animate animate__fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="500ms"
                key={Val.id}
              >
                <div className="item-img">
                  <a href="/projects">
                    <img src={Val.photoPath} alt="" />
                  </a>
                </div>
                <div className="item-inner-cnt">
                  <span>{Val.title}</span>
                  <h4>{Val.project}</h4>
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
