import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoDark from "../assests/img/logo.svg";

const Navbar = () => {
  // navbar scroll
  const [onScroll, setOnScroll] = useState(false);
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
  return (
    <div>
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
          <nav className="main-nav">
            <div className="mobile-menu-logo">
              <Link to="index.html">
                <img src={LogoDark} alt="logo" />
              </Link>
              <div className="remove">
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>
            <ul>
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
          <div className="mobile-menu">
            {/* <Link to="javascript:void(0)" className="cross-btn"> */}
            <span className="cross-top"></span>
            <span className="cross-middle"></span>
            <span className="cross-bottom"></span>
            {/* </Link> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
