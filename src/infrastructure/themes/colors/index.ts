import { ThemeColors } from "./typing";

export const getRGBAFormat =
  (red: number, green: number, blue: number) =>
  (alpha = 1): string => {
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  };

export const commonColors: ThemeColors = {
  primaryGreen: {
    hexa: "#a7f9ab",
    rgb: getRGBAFormat(167, 249, 171)(),
    rgba: getRGBAFormat(167, 249, 171),
  },
  darkGray: {
    hexa: "#1c1c1c",
    rgb: getRGBAFormat(28, 28, 28)(1),
    rgba: getRGBAFormat(28, 28, 28),
  },
  white: {
    hexa: '#ffffff',
    rgb: getRGBAFormat(255, 255, 255)(),
    rgba: getRGBAFormat(255, 255, 255)
  },
  redAlert: {
    hexa: '#FF0000',
    rgb: getRGBAFormat(255, 0, 0)(),
    rgba: getRGBAFormat(255, 0, 0)
  },
};
