import React, { useEffect, useState } from "react";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
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
                      <h1>FAQ</h1>
                      <span>
                        <a href="/">Home</a>
                        <BsArrowRight className="m-1" />
                        FAQ
                      </span>
                      {/* <div className="breadcrumb-video">
                        <img src={VideoImg} alt="" />
                        <div className="video-inner">
                          <a
                            className="video-popup"
                            href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                          >
                            <FaPlay />
                          </a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="faqs-area sec-mar-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="sidebar-tab">
                    <div className="tabs">
                      <a href="/" className="tab-link active">
                        Progress
                      </a>
                      <a href="/" className="tab-link">
                        Payment
                      </a>
                      <a href="/" className="tab-link">
                        Support
                      </a>
                    </div>
                  </div>
                  <div className="sidebar-tab">
                    <div className="questions-form">
                      <h4>HAVE QUESTION?</h4>
                      <form action="#" method="post">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name :"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email :"
                        />
                        <input
                          type="text"
                          name="number"
                          placeholder="Phone Number :"
                        />
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject :"
                        />
                        <textarea
                          name="message"
                          cols="30"
                          rows="10"
                          placeholder="Write Message :"
                        ></textarea>
                        <input type="submit" value="send now" />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="faqs-tabs">
                    <div className="faqs" id="progress-tab">
                      <h4>Progress</h4>
                      <Accordion
                        className="accordion"
                        id="accordionOne"
                        defaultActiveKey="0"
                        alwaysOpen
                        flush
                      >
                        <Accordion.Item eventKey="0" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              01. Curious about how to build your own UX
                              strategy? Here are.
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              02. Where Could a Career in UX Take You? Agency
                              vs. In-House vs?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              03. What Is a Problem Statement in UX? (And How To
                              Write One)?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              04. There are several techniques UX designers
                              employ to arrive at a?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              06. Why is this important? Why will users benefit
                              from solving this?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              05. What are the obstacles users are facing? What
                              are they trying to?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    <div className="faqs" id="payment-tab">
                      <h4>Payment</h4>
                      <Accordion
                        className="accordion"
                        id="accordionOne"
                        defaultActiveKey="0"
                        flush
                      >
                        <Accordion.Item eventKey="0" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              01. Curious about how to build your own UX
                              strategy? Here are.
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              02. Where Could a Career in UX Take You? Agency
                              vs. In-House vs?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              03. What Is a Problem Statement in UX? (And How To
                              Write One)?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              04. There are several techniques UX designers
                              employ to arrive at a?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              06. Why is this important? Why will users benefit
                              from solving this?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              05. What are the obstacles users are facing? What
                              are they trying to?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    <div className="faqs" id="support-tab">
                      <h4>Support</h4>
                      <Accordion
                        className="accordion"
                        id="accordionOne"
                        defaultActiveKey="0"
                        flush
                      >
                        <Accordion.Item eventKey="0" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              01. Curious about how to build your own UX
                              strategy? Here are.
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              02. Where Could a Career in UX Take You? Agency
                              vs. In-House vs?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              03. What Is a Problem Statement in UX? (And How To
                              Write One)?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              04. There are several techniques UX designers
                              employ to arrive at a?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              06. Why is this important? Why will users benefit
                              from solving this?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className="accordion-item">
                          <span className="accordion-header" id="heading1">
                            <Accordion.Header
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              05. What are the obstacles users are facing? What
                              are they trying to?
                            </Accordion.Header>
                          </span>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample"
                          >
                            <Accordion.Body className="accordion-body">
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integer purus
                              odiopl himenaeos. Praesent nec neque at dolor
                              venenatis consectetur eu quis ex. the Donec
                              lacinia andal placerat felis non aliquam.Mauris
                              nec justo vitae ante auctor tol euismod sit amet
                              non ipsum. sovo Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </Accordion.Body>
                          </div>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Newsletter />
        </main>
      </div>
    </>
  );
};

export default Faq;
