export const DEFAULT_LANGUAGE = 'en';
export const AVAILABLE_LANGUAGES = ['en'];

class LocaleService {
  getLanguage(): string {
    return DEFAULT_LANGUAGE;
  }

  setLanguage(lang: string) {
    localStorage.setItem('Language', lang);
  }
  getAvailableLanguages = () => {
    return AVAILABLE_LANGUAGES;
  };
}

export { LocaleService };
export default new LocaleService();
