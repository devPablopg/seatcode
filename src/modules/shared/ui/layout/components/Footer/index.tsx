import LocaleService from "infrastructure/i18n/LocaleService";
import FooterContainer, { FooterLink } from "./styles/WrapperFooter";
import { FooterText } from "modules/shared/infrastructure/i18n/FooterText";
import { FooterTranslations } from "modules/shared/infrastructure/i18n/typing";
import { Routes } from "infrastructure/routes/routes";

const footerTranslations: FooterTranslations = {
  ...FooterText[LocaleService.getLanguage()],
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink href={Routes.TERMS_OF_USE}>{footerTranslations.terms}</FooterLink>
      <FooterLink href={Routes.PRIVACY_POLICY}>
        {footerTranslations.privacy}
      </FooterLink>
      <FooterLink href={Routes.INTEGRITY}>
        {footerTranslations.integrity}
      </FooterLink>
      <FooterLink
        href={Routes.ENVIRONMENTAL_POLICY}
        target="_blank"
      >
        {footerTranslations.environment}
      </FooterLink>
      <FooterLink href={Routes.WHISTLEBLOWER}>
        {footerTranslations.whistleblower}
      </FooterLink>
    </FooterContainer>
  );
};

export default Footer;
