import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import ProjectBtn from "../components/ProjectBtn";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [t, i18n] = useTranslation();
  const [apiData, setApiData] = useState([]);
  const [item, setItem] = useState([]);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetProjects?languageId=${lang}`
      )
      .then((res) => {
        setApiData(res.data);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  const menuItems = [...new Set(apiData.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = apiData.filter((newVal) => {
      return newVal.category === curcat;
    });

    setItem(newItem);
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
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
                      <h1>{t("our_projects")}</h1>
                      <span>
                        <a href="/">{t("home")}</a>
                        <BsArrowRight className="m-1" />
                        {t("our_projects")}
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
          <section className="projectsPage project-area sec-mar">
            <div className="container">
              <div className="title-wrap">
                <div className="sec-title">
                  <span>{t("project_page_case_study")}</span>
                  <h2>{t("project_page_project")}</h2>
                  <p>{t("project_page_paragraph")}</p>
                </div>
              </div>
              <ProjectBtn
                setItem={setItem}
                menuItems={menuItems}
                filterItem={filterItem}
                item={apiData}
              />
              <ProjectCard item={item} />
            </div>
          </section>
          <Newsletter />
        </main>
      </div>
    </>
  );
};

export default Projects;
