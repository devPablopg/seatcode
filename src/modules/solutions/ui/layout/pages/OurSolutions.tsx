import LocaleService from "infrastructure/i18n/LocaleService";
import Header from "modules/shared/ui/layout/components/Header";
import Summary from "modules/shared/ui/layout/components/Summary";
import { OurSolutionsText } from "modules/solutions/infrastructure/i18n/OurSolutionsText";
import { OurSolutionsTranslations } from "modules/solutions/infrastructure/i18n/typing";
import React from "react";
import WrapperOurSolutions, { WrapperCard, WrapperItem } from "./styles/WrapperOurSolutions";
import Card from "modules/shared/ui/layout/components/Card";
import { WrapperTitle } from "modules/shared/ui/layout/components/Card/styles/WrapperCard";
import Footer from "modules/shared/ui/layout/components/Footer";

const ourSolutionsTranslations: OurSolutionsTranslations = {
  ...OurSolutionsText[LocaleService.getLanguage()],
};

const OurSolutions = () => {
  return (
    <WrapperOurSolutions>
      <Header
        title={ourSolutionsTranslations.title}
        subTitle={ourSolutionsTranslations.subTitle}
      />
      <Summary summary={ourSolutionsTranslations.summary} />
      <WrapperItem>
        <WrapperTitle>{ourSolutionsTranslations.ourPortfolio}</WrapperTitle>
      </WrapperItem>
      <WrapperCard>
      <Card
        title={ourSolutionsTranslations.cardTitle1}
        paragraph={ourSolutionsTranslations.cardParagraph1}
        image={[{ src: "connectivity.webp", alt: "connected-car" }]}
      />
      </WrapperCard>
      <WrapperCard>
      <Card
        isRight
        title={ourSolutionsTranslations.cardTitle2}
        paragraph={ourSolutionsTranslations.cardParagraph2}
        image={[{ src: "tavascan.webp", alt: "new-tavascan" }]}
      />
      </WrapperCard>
      <WrapperCard>
      <Card
        title={ourSolutionsTranslations.cardTitle3}
        paragraph={ourSolutionsTranslations.cardParagraph3}
        image={[{ src: "sales.webp", alt: "car-sales" }]}
      />
      </WrapperCard>
      <WrapperCard>
      <Card
        isRight
        title={ourSolutionsTranslations.cardTitle4}
        paragraph={ourSolutionsTranslations.cardParagraph4}
        image={[{ src: "giravolta.webp", alt: "giravolta-car-sharing" }]}
      />
      </WrapperCard>
      <WrapperCard>
      <Card
        title={ourSolutionsTranslations.cardTitle5}
        paragraph={ourSolutionsTranslations.cardParagraph5}
        image={[{ src: "data.webp", alt: "data-dashboards" }]}
      />
      </WrapperCard>
      <Footer />
    </WrapperOurSolutions>
  );
};

export default OurSolutions;
