import { Translation } from "infrastructure/i18n/typing";
import { AboutTranslations } from "./typing";
import { FontWeightType } from "modules/shared/domain/Types";

export const AboutText: Translation<AboutTranslations> = {
  en: {
    title: "ABOUT US",
    subTitle: "Our story",
    summary: [
      "We started our journey in 2017 as Metropolis:Lab, a small innovation hub in Barcelona with big ambitions.",
      "Today, we’re a digital powerhouse, home to over 280 experts leading the charge in digital transformation for SEAT and CUPRA. We are committed to building digital solutions that improve efficiency for users and businesses alike.",
    ],
    cardTitle: "OUR VALUES",
    cardParagraph: [
      { key: "At-SC", font: FontWeightType.NORMAL, text: "At SEAT CODE, " },
      {
        key: "believe",
        font: FontWeightType.BOLD,
        text: "we believe our strength lies in people and technology. ",
      },
      {
        key: "radical",
        font: FontWeightType.NORMAL,
        text: "We believe in radical transparency, honesty and passion for our work.",
      },
      { key: 'INTRO-radical' },
      {
        key: "our-team",
        font: FontWeightType.BOLD,
        text: "Our team comes first. ",
      },
      {
        key: "mistakes",
        font: FontWeightType.NORMAL,
        text: "Mistakes are seen as opportunities to grow. Trust, autonomy and continuous feedback fuel our success.",
      },
      { key: 'INTRO-mistakes'},
      {
        key: "being-open",
        font: FontWeightType.NORMAL,
        text: "We believe in being open so that different perspectives can thrive. We know that innovation flourishes when people have the space to contribute and together we transform the digital experience.",
      },
      { key: 'INTRO-being-open' },
      {
        key: "strive",
        font: FontWeightType.NORMAL,
        text: "We strive for excellence and impact, ensuring that everything we create delivers real value. We measure success not just in performance but in how we grow together celebrating achievements as one team.",
      },
    ],
    portfolio: "Portfolio",
    portfolio1Title: "CUPRA Digital Business",
    portfolio1Paragraph:
      "SEAT CODE takes the driver's seat in digital product development, to bring CUPRA's Digital Strategy to life with an outstanding user experience.",
    portfolio2Title: "Sales, Aftersales, Marketing & Car",
    portfolio2Paragraph:
      "We are responsible for turbocharging the transformation of commercial activities through digital products prioritized by SEAT, S.A. Also improving InCar experiences.",
    portfolio3Title: "SEAT CODE Products",
    portfolio3Paragraph:
      "We handle our own product portfolio, meeting SEAT, S.A. and Volkswagen brands needs and scaling as SaaS. A perfect example is our great Mobility Platform, Giravolta!",
    portfolio4Title: "Innovation & Venture Clienting",
    portfolio4Paragraph:
      "Combination of in-house capabilities & start-ups to showcase ideas with the most potential by opening our ecosystem to the external solutions & talent.",
    explore: "explore our work",
    news: "NEWS",
    linkedin: "LINKEDIN",
    morePosts: "MORE POSTS",
  },
};
