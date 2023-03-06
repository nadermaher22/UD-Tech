import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./assests/css/style.css";
import "./assests/css/bootstrap.min.css";
import "./assests/css/fontawesome.min.css";
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

const App = () => {
  const [isShown, setIsShown] = useState(false);
  const [preLoader, setPreLoader] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setPreLoader(false);
    }, 2000);
  }, []);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <div className="App">
      <BrowserRouter>
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

        <div className={isShown ? "d-none" : ""}>
          <div className="cookies sc-breuTD gPIury aos-init aos-animate">
            <div className="container">
              <div className="row my-2">
                <div className="col-12 col-md-8 ">
                  <p className="m-0">WE USE COOKIES</p>
                  <p className="m-0">
                    THIS WEBSITE USES COOKIES TO ENSURE YOU GET THE BEST
                    EXPERIENCE ON OUR WEBSITE
                  </p>
                </div>
                <div className="col-12 col-md-4 d-flex gap-3 align-items-center">
                  <div className="buttons mt-3">
                    <div
                      className={isShown ? "d-none" : "cmn-btn"}
                      onClick={handleClick}
                    >
                      <div className="line-1"></div>
                      <div className="line-2"></div>
                      <span>Refuse</span>
                    </div>
                  </div>
                  <div className="buttons mt-3">
                    <div
                      className={isShown ? "d-none" : "cmn-btn"}
                      onClick={handleClick}
                    >
                      <div className="line-1"></div>
                      <div className="line-2"></div>
                      <span>Accept</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* animated-cursor-react */}
        <div>
          <AnimatedCursor
            hasBlendMode={true}
            outerStyle={{
              mixBlendMode: "exclusion",
            }}
            innerSize={0.001}
            trailingSpeed={30}
            outerSize={30}
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
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/team" element={<Team />} />
          <Route
            path="/project-details/:projectId"
            element={<ProjectDetails />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
