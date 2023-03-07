import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoDark from "../assests/img/logo.svg";
import LogoDarkMob from "../assests/img/logo-dark.svg";
import { BsPlus, BsPlusLg } from "react-icons/bs";

const Navbar = () => {
  // navbar scroll
  const [onScroll, setOnScroll] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  
  const showSideBar = () => {
    setSideBar(true);
  };




  const addStickyClass = () => {
    if (window.scrollY >= 200) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };
  window.addEventListener("scroll", addStickyClass);
  // active class
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  const [addClass, setAddClass] = useState(false);
  const AddClassSlide = () => {
    setAddClass(!addClass);
  };
  return (
    <div >
      <header
        className={
          onScroll
            ? "header-area position_top sticky"
            : "header-area position_top"
        }
      >
        <div className="site-logo">
          <div className="logo">
            <Link to="/">
              <img src={LogoDark} alt="sd" />
            </Link>
          </div>
        </div>
        <div className="main-menu">
          <nav className={addClass ? "main-nav slidenav" : "main-nav"}>
            <div className="mobile-menu-logo">
              <Link to="/">
                <img src={LogoDarkMob} alt="logo" />
              </Link>
              <div className="remove">
                <BsPlus />
              </div>
            </div>
            <ul onClick={showSideBar}>
              <li>
                <Link to="/" className={url === "/" ? " active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={url === "/about" ? " active" : ""}>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={url === "/services" ? " active" : ""}
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={url === "/projects" ? " active" : ""}
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className={url === "/clients" ? " active" : ""}
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/mobile"
                  className={url === "/mobile" ? " active" : ""}
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/electronic"
                  className={url === "/electronic" ? " active" : ""}
                >
                  electronic invoice
                </Link>
              </li>
              <li>
                <Link to="/blog" className={url === "/blog" ? " active" : ""}>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={url === "/contact" ? " active" : ""}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="get-qoute d-flex justify-content-center d-lg-none d-block pt-50">
              <div className="cmn-btn">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <Link to="/contact">Company Profile</Link>
              </div>
              <div className="cmn-btn">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <Link to="/contact">Call Us</Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="nav-right">
          <div className="get-qoute">
            <div className="cmn-btn">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <Link to="/about">Company Profile</Link>
            </div>
            <div className="cmn-btn">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <Link to="/contact">Call Us</Link>
            </div>
          </div>
          <div className="mobile-menu" onClick={() => AddClassSlide()}>
            <div to="" className="cross-btn">
              <span className="cross-top"></span>
              <span className="cross-middle"></span>
              <span className="cross-bottom"></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
