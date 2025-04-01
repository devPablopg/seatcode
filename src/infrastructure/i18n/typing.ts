export interface Translation<TranslationProps> {
  en: TranslationProps;
  [key: string]: TranslationProps;
}
