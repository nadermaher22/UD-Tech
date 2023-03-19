import React from "react";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";
import translationEN from "./locale/en.json";
import translationAR from "./locale/ar.json";

const options = {
  // order and from where user language should be detected
  order: [
    "querystring",
    "localStorage",
    "path",
    "cookie",
    "sessionStorage",
    "navigator",
    "subdomain",
  ],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: "/", sameSite: "strict" },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ar: {
        translation: translationAR,
      },
    },

    fallbackLng: "en",
    detection: options,

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t("")}</h2>;
}

// append app to dom
const root = createRoot(document.getElementById("root"));
root.render(<App />);
