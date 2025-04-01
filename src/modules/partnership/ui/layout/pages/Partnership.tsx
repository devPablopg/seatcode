import React from "react";
import WrapperPartnership from "./styles/WrapperPartnership";
import LocaleService from "infrastructure/i18n/LocaleService";
import { PartnershipTranslations } from "modules/partnership/infrastructure/i18n/typing";
import { PartnershipText } from "modules/partnership/infrastructure/i18n/PartnershipText";
import Header from "modules/shared/ui/layout/components/Header";
import Summary from "modules/shared/ui/layout/components/Summary";
import Footer from "modules/shared/ui/layout/components/Footer";
import PartnerCard from "../components/PartnerCard";

const partnershipTranslations: PartnershipTranslations = {
  ...PartnershipText[LocaleService.getLanguage()],
};

const Partnership = () => {
  return (
    <>
      <Header
        title={partnershipTranslations.title}
        subTitle={partnershipTranslations.subTitle}
      />
      <Summary summary={partnershipTranslations.summary} />
      <WrapperPartnership>
        <PartnerCard
          title={partnershipTranslations.cardTitle1}
          paragraph={partnershipTranslations.cardParagraph1}
          image={{ src: "la-salle.svg", alt: "la-salle-url" }} />
        <PartnerCard
          title={partnershipTranslations.cardTitle2}
          paragraph={partnershipTranslations.cardParagraph2}
          image={{ src: "tech-bcn.svg", alt: "tech-bcn" }} />
        <PartnerCard
          title={partnershipTranslations.cardTitle3}
          paragraph={partnershipTranslations.cardParagraph3}
          image={{ src: "network-bcn.svg", alt: "22@-network-bcn" }} />
        <PartnerCard
          title={partnershipTranslations.cardTitle4}
          paragraph={partnershipTranslations.cardParagraph4}
          image={{ src: "mwb.svg", alt: "mobile-world-capital" }} />
      </WrapperPartnership>
      <Footer />
    </>
  );
};

export default Partnership;
