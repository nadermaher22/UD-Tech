import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import VideoImg from "../assests/img/breadcrumb-video.jpg";
import axios from "axios";

const ElectronicInvoice = () => {
  const [getInvoice, setGetInvoice] = useState([]);
  const [invoiceImg, setInvoiceImg] = useState([]);
  let temp = [];
  const gg = async () => {
    temp = getInvoice.find((e) => {
      return e.id === 74;
    });
    console.log("ddddddd", temp);
    return temp.photoPath;
  };
  useEffect(() => {
    axios
      .get(
        "http://apiv2.udtech-sa.com/api/WebSite/GetElectronicInvoice?languageId=1"
      )
      .then((res) => {
        setGetInvoice(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                      <h1>ELECTRONIC INVOICE</h1>
                      <span>
                        <a href="/">Home</a>
                        <BsArrowRight className="m-1" />
                        ELECTRONIC INVOICE
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
          <section
            className="why-choose paragraph sec-mar wow animate animate__fadeIn"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="container">
              <div className="row">
                <div className="single-history">
                  {getInvoice.slice(0, 2).map((first) => {
                    return (
                      <div className="col-12 col-md-6" key={first.id}>
                        <div
                          className="about-left py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                          data-wow-duration="1500ms"
                        >
                          <h3>{first.title}</h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: first.description,
                            }}
                          ></p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="single-history">
                  <div className="col-12 col-md-6">
                    {getInvoice.slice(2, 3).map((second) => {
                      return (
                        <div
                          className="about-left py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                          data-wow-duration="1500ms"
                          key={second.id}
                        >
                          <h3>{second.title}</h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: second.description,
                            }}
                          ></p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="col-12 col-md-6">
                    {getInvoice.slice(3, 4).map((third) => {
                      return (
                        <div
                          className="item-img single-item py-2 pe-4 ps-4 wow animate animate__fadeInRight"
                          data-wow-duration="1500ms"
                          key={third.id}
                        >
                          <img
                            className="m-0 border"
                            src={third.photoPath}
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="single-history">
                  {getInvoice.slice(4).map((fourth) => {
                    return (
                      <div className="col-12 col-md-6" key={fourth.id}>
                        <div
                          className="about-left  py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                          data-wow-duration="1500ms"
                        >
                          <h3>{fourth.title}</h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: fourth.description,
                            }}
                          ></p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 
                  <div className="col-12 col-md-6">
                    <div
                      className="about-left  py-2 pe-4 ps-4 wow animate animate__fadeInRight"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <h3>
                        Examples of some of the things that are prohibited in
                        the first phase of the application of electronic
                        invoice:
                      </h3>
                      <p>
                        These are some examples of procedures that are
                        considered to be in violation of the electronic bill
                        system in its first phase.
                      </p>
                      <p>1. Delete invoices</p>
                      <p>2. Issuing an invoice using Excel or Word</p>
                      <p>
                        3. Issuing invoices that do not contain all requirements
                      </p>
                      <p>
                        4. There is no user management feature in the system
                      </p>
                      <p>5. Allowing you more than one billing sequence</p>
                    </div>
                  </div> */}

                {/* <div className="single-history">
                  <div className="col-12 col-md-6">
                    <div
                      className="about-left  py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <h3>
                        What are the requirements for the second stage of the
                        electronic invoice?
                      </h3>
                      <p>
                        Implementation of the second phase will begin in early
                        2023. The requirements of this phase are mostly
                        technical requirements required by companies that
                        provide electronic systems service and are applied in
                        coordination with the Zakat Authority. The requirements
                        for this stage include all the requirements for the
                        first stage, in addition to the following:
                      </p>
                      <p>1. Issuing the invoice in (XML, PDF/A-3)</p>
                      <p>
                        2. Format Tamper prevention features such as (encryption
                        function, digital seal)
                      </p>
                      <p>3. Other technical characteristics (eg UUID)</p>
                      <p>
                        4. Linking and integrating with the systems of the
                        Zakat, Tax and Customs Authority
                      </p>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div
                      className="about-left  py-2 pe-4 ps-4 wow animate animate__fadeInRight"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <h3>
                        Is internet required in the sales machine to connect
                        with the Zakat and Income Authority and comply with the
                        requirements of the second phase of the electronic
                        invoice?
                      </h3>
                      <p>
                        Yes, the availability of the Internet is necessary in
                        order for billing data to be sent to the Zakat and
                        Income Authority, and this is one of the requirements
                        for implementing the second phase of electronic billing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="single-history">
                  <div className=" col-12 col-md-6">
                    <div
                      className="about-left  py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <h3>
                        Does the system have to be linked to the Zakat and
                        Income Authority on 4-12-2021 AD?
                      </h3>
                      <p>
                        According to what was published by the Zakat, Income and
                        Customs Authority, the implementation of the second
                        phase of the electronic bill will start at the beginning
                        of the year 2023 AD.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          <Newsletter />
        </main>
      </div>
    </>
  );
};

export default ElectronicInvoice;
