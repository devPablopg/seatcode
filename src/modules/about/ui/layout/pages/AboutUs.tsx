import React from "react";
import LocaleService from "infrastructure/i18n/LocaleService";
import { AboutText } from "modules/about/infrastructure/i18n/AboutText";
import { AboutTranslations } from "modules/about/infrastructure/i18n/typing";
import Header from "modules/shared/ui/layout/components/Header";
import Summary from "modules/shared/ui/layout/components/Summary";
import Card from "modules/shared/ui/layout/components/Card";
import {
  WrapperCard,
  WrapperItem,
  WrapperLinkedin,
  WrapperPortfolioBg,
  WrapperPortfolioCard,
  WrapperPortfolioContainer,
  WrapperPortfolioTitle,
} from "./styles/WrapperAbout";
import { Routes } from "infrastructure/routes/routes";
import Footer from "modules/shared/ui/layout/components/Footer";
import { StyledLink } from "modules/shared/ui/layout/elements/Link/styles/WrapperLink";
import { WrapperTitle } from "modules/shared/ui/layout/components/Card/styles/WrapperCard";

const aboutTranslations: AboutTranslations = {
  ...AboutText[LocaleService.getLanguage()],
};

const AboutUs = () => {
  return (
    <>
      <Header
        title={aboutTranslations.title}
        subTitle={aboutTranslations.subTitle}
      />
      <Summary summary={aboutTranslations.summary} />
      <WrapperCard>
        <Card
          title={aboutTranslations.cardTitle}
          paragraph={aboutTranslations.cardParagraph}
          image={[{ src: "placeholder.webp", alt: "portfolio-1" }]}
        />
      </WrapperCard>
      <WrapperPortfolioBg>
        <img
          src="portfolio-opacidad.webp"
          alt="seat-code-terrace"
        />
        <WrapperPortfolioTitle>
          {aboutTranslations.portfolio}
        </WrapperPortfolioTitle>
      </WrapperPortfolioBg>
      <WrapperPortfolioContainer>
        <WrapperPortfolioCard $delay={0}>
          <img
            src="portfolio-1.webp"
            alt="portfolio-1"
            loading="lazy"
          />
          <p>{aboutTranslations.portfolio1Title}</p>
          <p>{aboutTranslations.portfolio1Paragraph}</p>
        </WrapperPortfolioCard>
        <WrapperPortfolioCard $delay={0.2}>
          <img
            src="portfolio-3.webp"
            alt="portfolio-3"
            loading="lazy"
          />
          <p>{aboutTranslations.portfolio2Title}</p>
          <p>{aboutTranslations.portfolio2Paragraph}</p>
        </WrapperPortfolioCard>
        <WrapperPortfolioCard $delay={0.1}>
          <img
            src="portfolio-2.webp"
            alt="portfolio-2"
            loading="lazy"
          />
          <p>{aboutTranslations.portfolio3Title}</p>
          <p>{aboutTranslations.portfolio3Paragraph}</p>
        </WrapperPortfolioCard>
        <WrapperPortfolioCard $delay={0.3}>
          <img
            src="portfolio-4.webp"
            alt="portfolio-4"
            loading="lazy"
          />
          <p>{aboutTranslations.portfolio4Title}</p>
          <p>{aboutTranslations.portfolio4Paragraph}</p>
        </WrapperPortfolioCard>
      </WrapperPortfolioContainer>
      <WrapperItem>
        <StyledLink href={Routes.OURSOLUTIONS}>
          {aboutTranslations.explore}
        </StyledLink>
      </WrapperItem>
      <WrapperItem>
        <WrapperTitle>{aboutTranslations.news}</WrapperTitle>
      </WrapperItem>
      <WrapperLinkedin>
        <div className="sk-ww-linkedin-page-post" data-embed-id="25523041"></div>
        <script
          src="https://widgets.sociablekit.com/linkedin-page-posts/widget.js"
          defer
        ></script>
      </WrapperLinkedin>
      <WrapperItem>
        <StyledLink href={Routes.CODE_LINKEDIN} target="_blank">
          {aboutTranslations.morePosts}
        </StyledLink>
      </WrapperItem>
      <Footer />
    </>
  );
};

export default AboutUs;
