

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import * as transEn from "./trans.en.json";
import * as transTr from "./trans.tr.json";

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ["en", "tr"],
    debug: process.env.NODE_ENV === "development",
    resources: {
      en: { translation: transEn },
      tr: { translation: transTr },
    },
    react: {
      transWrapTextNodes: "span",
    },
    // React already escapes
    interpolation: { escapeValue: false },
    // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
    // set returnNull to false (and also in the i18next.d.ts options)
    // returnNull: false,
  });
