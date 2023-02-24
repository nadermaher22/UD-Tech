import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import VideoImg from "../assests/img/breadcrumb-video.jpg";

const ElectronicInvoice = () => {
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
                  <div className="col-12 col-md-6">
                    <div
                      className="about-left py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <h3>What is an electronic invoice?</h3>
                      <p>
                        An electronic invoice is a tax invoice that is issued
                        electronically through an electronic means, and is
                        issued by each taxpayer subject to VAT. A handwritten or
                        scanned invoice is not considered an electronic bill.
                        Our Odoo system complies with the technical requirements
                        of the electronic invoice that have been published so
                        far.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div
                      className="about-left py-2 pe-4 ps-4 wow animate animate__fadeInRight"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <h3>
                        Does Our Odoo System support electronic invoice
                        requirements?
                      </h3>
                      <p>
                        Our Odoo ERP System Support the electronic invoice
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-history">
                  <div className="col-12 col-md-6">
                    <div
                      className="about-left py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <h3>
                        What are the requirements for the first stage of the
                        electronic invoice?
                      </h3>
                      <p>1.Stop issuing manual bills</p>
                      <p>2. Print the QR-Code for bills.</p>
                      <p>
                        3. Add the buyer's tax number if it is an organization
                        and not an individual.
                      </p>
                    </div>
                    <div
                      className="about-left py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <h3>
                        What should the facility do to comply with the
                        requirements of the electronic invoice?
                      </h3>
                      <p>
                        An electronic system compatible with e-invoice
                        requirements is required. Our Odoo system is one of the
                        systems that are compatible with the requirements of the
                        electronic bill. With regard to the technical
                        requirements for the second stage that were published by
                        the Zakat, Income and Customs Authority, the greatest
                        burden falls on the system providers in implementing
                        them. Based on the technical requirements that have been
                        published on the website of the Zakat, Income and
                        Customs Authority, our company has started preparing for
                        the technical requirements for the second phase of the
                        application of the electronic invoice.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div
                      className="item-img single-item py-2 pe-4 ps-4 wow animate animate__fadeInRight"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <img
                        className="m-0 border"
                        src="http://udtech-sa.com/assets/inv.e67c71d2.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="single-history">
                  <div className="col-12 col-md-6">
                    <div
                      className="about-left  py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <h3>
                        Does the system print the QR-Code according to the
                        requirements of the electronic invoice?
                      </h3>
                      <p>
                        This feature has been added to our Odoo system to comply
                        with the requirements of the first stage of the
                        Tax-invoice. The system prints the code as shown in the
                        image. The code contains the following data as per the
                        requirements of the first stage:
                      </p>
                      <p>1. The name of the Organization.</p>
                      <p>2. The Organization tax number</p>
                      <p>3. The date and time of the invoice</p>
                      <p>4. Total bill</p>
                      <p>5. Total tax</p>
                    </div>
                  </div>

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
                  </div>
                </div>

                <div className="single-history">
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

export default ElectronicInvoice;
