import React from "react";
import Header from "modules/shared/ui/layout/components/Header";
import LocaleService from "infrastructure/i18n/LocaleService";
import { HomeText } from "modules/home/infrastructure/i18n/HomeText";
import { HomeTranslations } from "modules/home/infrastructure/i18n/typing";
import Card from "modules/shared/ui/layout/components/Card";
import VideoSection from "modules/shared/ui/layout/components/VideoSection";
import Contact from "../containers/Contact";
import Footer from "modules/shared/ui/layout/components/Footer";
import { Routes } from "infrastructure/routes/routes";

const homeTranslations: HomeTranslations = {
  ...HomeText[LocaleService.getLanguage()],
};

const Home = () => {
  return (
    <>
      <Header
        title={homeTranslations.title}
        animated={homeTranslations.animated}
        note={homeTranslations.note}
      />
      <Card
        title={homeTranslations.card1Title}
        subtitle={homeTranslations.card1Subtitle}
        paragraph={homeTranslations.card1Paragraph}
        link={{ to: Routes.ABOUT, text: homeTranslations.learnMore }}
        image={[
          { src: "inside.webp", alt: "inside-office" },
          { src: "outside.webp", alt: "outside-office" },
        ]}
      />
      <Card
        isRight
        title={homeTranslations.card2Title}
        subtitle={homeTranslations.card2Subtitle}
        paragraph={homeTranslations.card2Paragraph}
        link={{ to: Routes.WORKWITHUS, text: homeTranslations.joinUs }}
        image={[{ src: "our-team.webp", alt: "team-working" }]}
      />
      <Card
        title={homeTranslations.card3Title}
        subtitle={homeTranslations.card3Subtitle}
        paragraph={homeTranslations.card3Paragraph}
        link={{ to: Routes.OURSOLUTIONS, text: homeTranslations.explore }}
        image={[{ src: "portfolio-1.webp", alt: "portfolio-1" }]}
      />
      <VideoSection />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
