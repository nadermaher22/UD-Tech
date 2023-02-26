import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation } from "react-router-dom";
import LogoDark from "../assests/img/logo.svg";

function NabBarModified() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <Navbar expand="lg" className="modifiedNavBar">
      <Container fluid className="modifiedNavBar">
        <Navbar.Brand href="#home">
          <div className="site-logo">
            <div className="logo">
              <img src={LogoDark} alt="sd" />
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={url === "/" ? " active" : ""}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" className={url === "/" ? " active" : ""}>
              About Us
            </Nav.Link>
            <Nav.Link href="/services" className={url === "/" ? " active" : ""}>
              Service
            </Nav.Link>
            <Nav.Link href="projects/" className={url === "/" ? " active" : ""}>
              Project
            </Nav.Link>
            <Nav.Link href="/clients" className={url === "/" ? " active" : ""}>
              Clients
            </Nav.Link>
            <Nav.Link href="/mobile" className={url === "/" ? " active" : ""}>
              Mobile Apps
            </Nav.Link>
            <Nav.Link
              href="/electronic"
              className={url === "/" ? " active" : ""}
            >
              electronic invoice
            </Nav.Link>
            <Nav.Link href="/blog" className={url === "/" ? " active" : ""}>
              Blog
            </Nav.Link>
            <Nav.Link href="/contact" className={url === "/" ? " active" : ""}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NabBarModified;
