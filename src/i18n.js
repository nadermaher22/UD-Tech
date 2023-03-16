import React from "react";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";
import translationEN from "./locale/en.json";
import translationAR from "./locale/ar.json";

i18n
  .use(LanguageDetector)
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
    lng: window.localStorage.i18nextLng,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t("")}</h2>;
}

// append app to dom
const root = createRoot(document.getElementById("root"));
root.render(<App />);
