/* eslint-disable import/extensions */
import englishStrings from './en/strings.json';
import spanishStrings from './es/strings.json';

const DEFAULT_LOCALE = 'en';
const DEFAULT_STRINGS = englishStrings;

interface LanguageType {
    locale: string;
    stringId: string;
    strings: any;
}

const languages: Array<LanguageType> = [
    {
        locale: DEFAULT_LOCALE,
        stringId: 'landing.sidebar.english',
        strings: DEFAULT_STRINGS,
    },
    {
        locale: 'es',
        stringId: 'landing.sidebar.spanish',
        strings: spanishStrings,
    },
];

const defaultLanguage = languages.find((language) => language.locale === DEFAULT_LOCALE);

const getLanguageData = (locale: string): LanguageType | undefined =>
    languages.find((language) => language.locale === locale);

export type { LanguageType };
export { DEFAULT_LOCALE, DEFAULT_STRINGS, defaultLanguage, getLanguageData };
export default languages;
