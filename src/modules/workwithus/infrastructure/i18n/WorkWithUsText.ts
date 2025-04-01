import { Translation } from "infrastructure/i18n/typing";
import { WorkWithUsTranslations } from "./typing";
import { FontWeightType } from "modules/shared/domain/Types";

export const WorkWithUsText: Translation<WorkWithUsTranslations> = {
  en: {
    title: "WORK WITH US",
    subTitle: "Careers",
    summary: [
      "At SEAT CODE, we revolutionise how you experience mobility & technology. Join a team that dares to do things differently.",
    ],
    cardTitle: "OUR CULTURE",
    cardParagraph: [
      { key: "At-SC", font: FontWeightType.NORMAL, text: "At SEAT CODE, " },
      {
        key: "we-cultivate",
        font: FontWeightType.BOLD,
        text: "we cultivate a culture of creativity, bold thinking and share a passion for digital transformation. ",
      },
      { key: "with-a-team", font: FontWeightType.NORMAL, text: "With a team of talent from over 20 nationalities, we bring diverse perspectives together to create solutions that push boundaries. " },
      { key: 'INTRO-with'},
      { key: "At-Seat", font: FontWeightType.NORMAL, text: "At SEAT CODE, every voice matters, every challenge is an opportunity and every success is shared. " },
      {
        key: "collaboration-is",
        font: FontWeightType.BOLD,
        text: "Collaboration is at the heart of everything we do. ",
      },
      { key: "personal-growth", font: FontWeightType.NORMAL, text: "Personal growth, feedback and mutual support drive us forward. " },
      { key: 'INTRO-personal'},
      {
        key: "ready-to",
        font: FontWeightType.BOLD,
        text: "Ready to move differently? Let’s build the future together.",
      },
    ],
    projectsNumber: "100+",
    projectsLiteral: "Successful Projects",
    nationalitiesNumber: "20+",
    nationalitiesLiteral: "Different Nationalities",
    expertsNumber: "280+",
    expertsLiteral: "Experts",
    ourPerks: "some of our perks",
    competitiveSalary: "Competitive salary",
    dailySnacks: "Daily snacks",
    culture: "Learning & Development Culture",
    gearsNeeds: "Best gear for your needs",
    flexibleWorking: "Flexible working hours",
    closeBeach: "Super close to the beach",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourPhone: "Your Phone",
    howDidYouFindUs: "How did you find us?",
    selectOne: "Select one",
    internet: "Internet",
    socialNetworks: "Social Networks",
    other: "Other",
    yourOrganization: "Your organization",
    yourMessage: "Your Message",
    mailError: "The contact email is not valid",
    send: "send",
  },
};
