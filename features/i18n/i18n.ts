import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/locales/en.json";
import ua from "@/locales/ua.json";

const browserLang = navigator.language || navigator.languages?.[0] || "en";
const initialLang =
  browserLang.startsWith("ua") || browserLang.startsWith("uk") ? "ua" : "en";

const savedLang = localStorage.getItem("lang");
const lng = savedLang || initialLang;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ua: { translation: ua },
  },
  lng,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  detection: { order: ["localStorage", "navigator"], caches: ["localStorage"] },
});

export default i18n;
