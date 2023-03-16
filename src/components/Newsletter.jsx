import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Newsletter = () => {
  const [t, i18n] = useTranslation();

  return (
    <>
      <section className="subscribe-newsletter sec-mar-top">
        <div className="container">
          <div className="news-letter-content">
            <div className="row align-items-center">
              <div
                className="col-lg-6 wow animate__animated animate__fadeInLeft"
                data-wow-duration="1500ms"
              >
                <div className="subscribe-cnt">
                  <span>{t("contact_page_get_in_touch")}</span>
                  <h3>{t("newsletter_subscribe")}</h3>
                  <strong>{t("newsletter_subscribe2")}</strong>
                </div>
              </div>
              <div
                className="col-lg-6 wow animate__animated animate__fadeInRight"
                data-wow-duration="1500ms"
              >
                <div className="subscribe-form">
                  <form action="/" method="post">
                    <input
                      type="email"
                      name="email"
                      placeholder={t("contact_page_email")}
                    />
                    <input type="submit" value={t("newsletter_connect")} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
