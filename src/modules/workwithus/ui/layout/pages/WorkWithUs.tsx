import LocaleService from "infrastructure/i18n/LocaleService";
import Header from "modules/shared/ui/layout/components/Header";
import Summary from "modules/shared/ui/layout/components/Summary";
import { WorkWithUsTranslations } from "modules/workwithus/infrastructure/i18n/typing";
import { WorkWithUsText } from "modules/workwithus/infrastructure/i18n/WorkWithUsText";
import React from "react";
import {
  WrapperAchievement,
  WrapperCard,
  WrapperHighlights,
  WrapperItemPerk,
  WrapperNumber,
  WrapperPerks,
  WrapperCenteredTitle,
  WrapperPoint,
} from "./styles/WrapperWorkWithUs";
import Card from "modules/shared/ui/layout/components/Card";
import Footer from "modules/shared/ui/layout/components/Footer";
import WorkWithUsForm from "../components/Form";
import MoneyIcon from "assets/img/icons/save-money.svg?react";
import AppleIcon from "assets/img/icons/apple.svg?react";
import BookIcon from "assets/img/icons/book.svg?react";
import ScreenIcon from "assets/img/icons/screen.svg?react";
import ClockIcon from "assets/img/icons/time.svg?react";
import UmbrellaIcon from "assets/img/icons/umbrella.svg?react";

const workWithUsTranslations: WorkWithUsTranslations = {
  ...WorkWithUsText[LocaleService.getLanguage()],
};

const WorkWithUs = () => {
  return (
    <>
      <Header
        title={workWithUsTranslations.title}
        subTitle={workWithUsTranslations.subTitle}
      />
      <Summary summary={workWithUsTranslations.summary} />
      <WrapperHighlights>
        <WrapperPoint>
          <WrapperNumber>{workWithUsTranslations.projectsNumber}</WrapperNumber>
          <WrapperAchievement>
            {workWithUsTranslations.projectsLiteral}
          </WrapperAchievement>
        </WrapperPoint>
        <WrapperPoint>
          <WrapperNumber>
            {workWithUsTranslations.nationalitiesNumber}
          </WrapperNumber>
          <WrapperAchievement>
            {workWithUsTranslations.nationalitiesLiteral}
          </WrapperAchievement>
        </WrapperPoint>
        <WrapperPoint>
          <WrapperNumber>{workWithUsTranslations.expertsNumber}</WrapperNumber>
          <WrapperAchievement>
            {workWithUsTranslations.expertsLiteral}
          </WrapperAchievement>
        </WrapperPoint>
      </WrapperHighlights>
      <WrapperCard>
        <Card
          isRight
          title={workWithUsTranslations.cardTitle}
          paragraph={workWithUsTranslations.cardParagraph}
          image={[{ src: "culture.webp", alt: "team-working" }]}
        />
      </WrapperCard>
      <WrapperCenteredTitle>{workWithUsTranslations.ourPerks}</WrapperCenteredTitle>
      <WrapperPerks>
        <WrapperItemPerk>
          <MoneyIcon />
          <p>{workWithUsTranslations.competitiveSalary}</p>
        </WrapperItemPerk>
        <WrapperItemPerk>
          <AppleIcon />
          <p>{workWithUsTranslations.dailySnacks}</p>
        </WrapperItemPerk>
        <WrapperItemPerk>
          <BookIcon />
          <p>{workWithUsTranslations.culture}</p>
        </WrapperItemPerk>
        <WrapperItemPerk>
          <ScreenIcon />
          <p>{workWithUsTranslations.gearsNeeds}</p>
        </WrapperItemPerk>
        <WrapperItemPerk>
          <ClockIcon />
          <p>{workWithUsTranslations.flexibleWorking}</p>
        </WrapperItemPerk>
        <WrapperItemPerk>
          <UmbrellaIcon />
          <p>{workWithUsTranslations.closeBeach}</p>
        </WrapperItemPerk>
      </WrapperPerks>
      <WrapperCenteredTitle>{workWithUsTranslations.title}</WrapperCenteredTitle>
      <WorkWithUsForm />
      <Footer />
    </>
  );
};

export default WorkWithUs;
