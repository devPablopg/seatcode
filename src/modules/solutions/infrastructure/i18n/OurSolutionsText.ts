import { Translation } from "infrastructure/i18n/typing";
import { OurSolutionsTranslations } from "./typing";
import { FontWeightType } from "modules/shared/domain/Types";

export const OurSolutionsText: Translation<OurSolutionsTranslations> = {
  en: {
    title: "OUR SOLUTIONS",
    subTitle: "What are we working on?",
    summary: [
      "At SEAT CODE, we’re always moving forward. As the digital hub for CUPRA and SEAT, we create solutions that transform user experiences, optimise operations and accelerate innovation. Our End-to-End approach ensures agile development of the highest-quality digital solutions and fast delivery times.",
      "As the Volkswagen Group’s go-to coders, our digital products are fully scalable and user centric. Our goal is to keep transforming the status quo.",
      "See how we’re shaping the future of mobility.",
    ],
    ourPortfolio: "explore our portfolio",
    cardTitle1: "MYCUPRA & MYSEAT APP",
    cardParagraph1: [
      {
        key: "The-My",
        font: FontWeightType.BOLD,
        text: "The My CUPRA App and My SEAT App centralise all connected car services into one platform. ",
      },
      {
        key: "They-serve",
        font: FontWeightType.NORMAL,
        text: "They serve as the main communication channel between users and the brand, offering easy access to services, vehicle data and updates. Fully compatible with Android and iOS, they provide a smooth, intuitive interface.",
      },
      { key: 'INTRO-they-serve'},
      {
        key: "Hight-performance",
        font: FontWeightType.BOLD,
        text: "High performance · Charging Management · Car Connectivity",
      },
    ],
    cardTitle2: "SEAT & CUPRA WEBSITES",
    cardParagraph2: [
      {
        key: "This-project",
        font: FontWeightType.BOLD,
        text: "This project enhances the car buying journey by providing personalized, easy access to brand and vehicle information.",
      },
      {
        key: "Users-can",
        font: FontWeightType.NORMAL,
        text: "Users can explore offers, book services, and access financing details seamlessly. With clear pricing and intuitive tools, it empowers informed decisions and smooth engagement with the brand.",
      },
      { key: 'INTRO-this-project'},
      {
        key: "information-personalization",
        font: FontWeightType.BOLD,
        text: "Information · Personalization · Engagement",
      },
    ],
    cardTitle3: "CAR SALES",
    cardParagraph3: [
      {
        key: "These-projects",
        font: FontWeightType.NORMAL,
        text: "These projects optimize the car buying experience by offering an engaging configurator, real-time stock alternatives, and flexible financing options. A centralized back office streamlines access to commercial data, enabling dealers to maximize lead conversion and ensure fast, efficient vehicle delivery.",
      },
      { key: 'INTRO-these-projects'},
      {
        key: "configuration",
        font: FontWeightType.BOLD,
        text: "Configuration · Financing · Conversion",
      },
    ],
    cardTitle4: "GIRAVOLTA",
    cardParagraph4: [
      {
        key: "Giravolta",
        font: FontWeightType.BOLD,
        text: "Giravolta is a SaaS solution for mobility operators, ",
      },
      {
        key: "enabling",
        font: FontWeightType.NORMAL,
        text: "enabling seamless management of shared, rental and corporate fleets across multiple vehicle types. With real-time data, digital keys and a white-label app, it optimises fleet operations. Its intuitive backoffice streamlines bookings, payments, and analytics. Trusted by 500,000+ users in 7 countries, Giravolta is shaping the future of smart mobility.",
      },
      { key: 'INTRO-gira'},
      {
        key: "Smart-mobility",
        font: FontWeightType.BOLD,
        text: "Smart Mobility · Booking Management · Carsharing Optimization",
      },
    ],
    cardTitle5: "AI & DATA ",
    cardParagraph5: [
      {
        key: "We-specialise",
        font: FontWeightType.NORMAL,
        text: "We specialise in data-driven innovation, using AI, analytics and machine learning to transform decision-making. Our solutions predict trends, optimise processes and enhance efficiency in areas like customer loyalty, pricing and after-sales services. With self-service tools, users can explore data and monitor KPIs effortlessly. ",
      },
      {
        key: "By-leveraging",
        font: FontWeightType.BOLD,
        text: "By leveraging data, we help businesses unlock growth and drive smarter operations.",
      },
      { key: 'INTRO-specialise'},
      {
        key: "Optimization",
        font: FontWeightType.BOLD,
        text: "Optimization · Data-driven decisions · Tracking",
      },
    ],
  },
};
