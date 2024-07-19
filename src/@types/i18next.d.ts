
import "i18next";
import * as translation from "../i18n/trans.en.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: typeof translation;
    };
  }
}
