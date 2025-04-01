import { Translation } from "infrastructure/i18n/typing";
import { HomeTranslations } from "./typing";
import { FontWeightType } from "modules/shared/domain/Types";

export const HomeText: Translation<HomeTranslations> = {
  en: {
    title: "WE DARE TO BE",
    animated: ["different", "transforming", "disruptive"],
    note: "We are the Center Of Digital Excellence, disrupting the automotive world.",
    card1Title: "DRIVEN BY INNOVATION",
    card1Subtitle: "WE ARE SEAT CODE",
    card1Paragraph: [{ key: 'digital-innovation', font: FontWeightType.BOLD, text: 'We are the digital innovation hub of SEAT and CUPRA. '}, { key: 'transforming', font: FontWeightType.NORMAL, text: 'Transforming mobility experiences, our dynamic solutions improve lives. We create smart applications and scalable digital products to ensure digital journeys are as intuitive and extraordinary as possible.'}],
    learnMore: 'learn more',
    card2Title: 'OUR SOUL & HOW WE EXCELL',
    card2Subtitle: 'A DIVERSE TEAM OF DIGITAL INNOVATORS',
    card2Paragraph: [{ key: 'start', font: FontWeightType.NORMAL, text: "We started in 2017 as Metropolis Lab in Barcelona with a passionate team. Now, as SEAT CODE, we are over 300 experts based in Barcelona's 22@ innovation district, "}, { key: 'leading', font: FontWeightType.BOLD, text: 'leading digital transformation for SEAT and CUPRA.'}],
    joinUs: 'join us',
    card3Title: 'INNOVATION AT SPEED',
    card3Subtitle: 'TRANSFORMATIVE DIGITAL SOLUTION',
    card3Paragraph: [{ key: 'expertise', font: FontWeightType.NORMAL, text: "Our expertise in SEAT and CUPRA’s needs enables us to deliver results that inspire. "}, { key: 'agility', font: FontWeightType.BOLD, text: 'Through agility, innovation and user-centric design, '}, { key: 'our-digital', font: FontWeightType.NORMAL, text: 'our digital products are transforming the way we move in the automotive industry and beyond.'}],
    explore: 'explore our work'
  },
};
