export interface ThemeColor {
  hexa: string;
  rgb: string;
  rgba: (alpha: number) => string;
  shadowAlternative?: (alpha: number) => string;
}

export interface ThemeColors {
    primaryGreen: ThemeColor;
    darkGray: ThemeColor;
    white: ThemeColor;
    redAlert: ThemeColor;
}