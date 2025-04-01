import React from "react";
import WrapperContactInfo, {
  WrapperEmail,
  WrapperInfo,
  WrapperLink,
  WrapperSocial,
  WrapperTitle,
} from "./styles/WrapperContactInfo";
import { ContactTranslations } from "modules/shared/infrastructure/i18n/typing";
import LocaleService from "infrastructure/i18n/LocaleService";
import { ContactText } from "modules/shared/infrastructure/i18n/ContactText";
import InstagramIcon from "assets/img/icons/instagram.svg?react";
import XIcon from "assets/img/icons/twitter.svg?react";
import LinkedinIcon from "assets/img/icons/linkedin.svg?react";

const contactTranslations: ContactTranslations = {
  ...ContactText[LocaleService.getLanguage()],
};

const ContactInfo = () => {
  return (
    <WrapperContactInfo>
      <WrapperTitle>{contactTranslations.contactUs}</WrapperTitle>
      <WrapperInfo>
        <p>{contactTranslations.theGarage}</p>
        <p>{contactTranslations.address}</p>
        <p>{contactTranslations.zipCodeCity}</p>
      </WrapperInfo>
      <WrapperEmail href="mailto:contact@code.seat">
        contact@code.seat
      </WrapperEmail>
      <WrapperSocial>
        <WrapperLink
          aria-label="instagram"
          href="https://www.instagram.com/seat_code"
          target="_blank"
        ><InstagramIcon /></WrapperLink>
        <WrapperLink
          aria-label="x"
          href="https://twitter.com/seat_code?lang=es"
          target="_blank"
        ><XIcon /></WrapperLink>
        <WrapperLink
          aria-label="linkedin"
          href="https://es.linkedin.com/company/seatcode"
          target="_blank"
        ><LinkedinIcon /></WrapperLink>
      </WrapperSocial>
    </WrapperContactInfo>
  );
};

export default ContactInfo;
