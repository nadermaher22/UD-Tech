import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home";
import "./assests/css/style.css";
// import "./assests/css/bootstrap.min.css";
// import "./assests/css/style-rtl.css";
// import "./assests/css/style-rtl.css.map";
import "./assests/css/bootstrap-rtl.min.css";
import "./assests/css/fontawesome.min.css";
import "./assests/css/magnific-popup.css";
import "animate.css/animate.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Mobile from "./pages/MobileApps";
import ElectronicInvoice from "./pages/ElectronicInvoice";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import BlogDetails from "./pages/BlogDetails";
import BlogStandard from "./pages/BlogStandard";
import Error from "./pages/Error";
import Faq from "./pages/Faq";
import Pricing from "./pages/Pricing";
import ServiceDetails from "./pages/ServiceDetails";
import ProjectDetails from "./pages/ProjectDetails";
import Team from "./pages/Team";
import "../src/assests/css/bootstrap-icons.css";
import AnimatedCursor from "react-animated-cursor";
import { useTranslation } from "react-i18next";

// if (localStorage.getItem("i18nextLng") === "en") {
//   alert("en");
//   require("./assests/css/bootstrap.min.css");
//   require("./assests/css/style.css");
// } else {
//   alert("ar");
//   require("./assests/css/bootstrap-rtl.min.css");
//   require("./assests/css/style.css");
//   require("./assests/css/style-rtl.css");
// }

const App = () => {
  const [t] = useTranslation();
  const [isShown, setIsShown] = useState(false);
  const [preLoader, setPreLoader] = useState(true);
  const lang = localStorage.i18nextLng === "en" ? 1 : 2;
  const { userLang } = useParams();
  useEffect(() => {
    setTimeout(function () {
      setPreLoader(false);
    }, 5000);
  }, []);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div
      className={
        localStorage.getItem("i18nextLng") === "en"
          ? "App directionEN"
          : "App directionAR"
      }
    >
      <Router>
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
        {/* Ask for cookies */}
        {localStorage.getItem("cookieAccept") === "true" ? (
          <div className="d-none">
            <div className="cookies sc-breuTD gPIury aos-init aos-animate">
              <div className="container">
                <div className="row my-2">
                  <div className="col-12 col-md-8 ">
                    <p className="m-0">{t("we_use_cookie")}</p>
                    <p className="m-0">{t("cookie_paragraph")}</p>
                  </div>
                  <div className="col-12 col-md-4 d-flex gap-3 align-items-center">
                    <div className="buttons mt-3">
                      <div

                      //                        onClick={handleClick}
                      >
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <span
                          onClick={() =>
                            localStorage.setItem("cookieAccept", false)
                          }
                        >
                          {t("refuse")}
                        </span>
                      </div>
                    </div>
                    <div className="buttons mt-3">
                      <div
                      // onClick={handleClick}
                      >
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <span
                          onClick={() =>
                            localStorage.setItem("cookieAccept", true)
                          }
                        >
                          {t("accept")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="cookies sc-breuTD gPIury aos-init aos-animate">
              <div className="container">
                <div className="row my-2">
                  <div className="col-12 col-md-8 ">
                    <p className="m-0">{t("we_use_cookie")}</p>
                    <p className="m-0">{t("cookie_paragraph")}</p>
                  </div>
                  <div className="col-12 col-md-4 d-flex gap-3 align-items-center">
                    <div className="buttons mt-3">
                      <div className="cmn-btn" onClick={handleClick}>
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <span
                          onClick={() =>
                            localStorage.setItem("cookieAccept", false)
                          }
                        >
                          {t("refuse")}
                        </span>
                      </div>
                    </div>
                    <div className="buttons mt-3">
                      <div className="cmn-btn" onClick={handleClick}>
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <span
                          onClick={() =>
                            localStorage.setItem("cookieAccept", true)
                          }
                        >
                          {t("accept")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* animated-cursor-react */}
        <div>
          <AnimatedCursor
            hasBlendMode={true}
            outerStyle={{
              mixBlendMode: "exclusion",
            }}
            innerSize={0.001}
            trailingSpeed={30}
            outerSize={28}
            color="255, 255 ,255"
            outerAlpha={0.8}
            outerScale={1}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              "li",
              ".link",
            ]}
          />
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/electronic" element={<ElectronicInvoice />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog-details/:blogId" element={<BlogDetails />} />
          <Route path="/blog-standard" element={<BlogStandard />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/service-details/:serviceId"
            element={<ServiceDetails />}
          />
          <Route path="/team" element={<Team />} />
          <Route
            path="/project-details/:projectId"
            element={<ProjectDetails />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
