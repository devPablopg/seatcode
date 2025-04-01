import { Translation } from "infrastructure/i18n/typing";
import { NotFoundTranslations } from "./typing";

export const NotFoundText: Translation<NotFoundTranslations> = {
  en: {
    messageFirstPart: "Sorry! we couldn't find",
    messageSecondPart: "what you are looking for",
    messageThirdPart: "Looks that this page doesn't exist",
    backHome: "take me back home"
  }
};
