import resume from '../../resume.json';
import locale from '../locale.json';
import skills from '../skills.json';
// import { getCookie } from './utils';

const defaultLocale = 'en';

const getLocale = () => {
	if (localStorage.getItem('locale') !== null) {
		return localStorage.getItem('locale').split('-')[0];
	} else {
		setLocale(defaultLocale);
		return defaultLocale;
	}
};

const setLocale = (locale) => {
	localStorage.setItem('locale', locale);
};

/**
 * Translates text to the current locale
 * If the translation is not found, returns the original text wrapped in brackets
 * @param {string} text - The text to translate
 * @returns {string} The translated text
 */
const t = (text) => {
	// Returns the translation of text in the current locale, or the original text wrapped in brackets if not found
	const localeText = locale[getLocale()][text];

	return localeText || `[[${text}]]`;
};

/**
 * Translates text to the current locale
 * If the translation is not found, returns the original text wrapped in brackets
 * @param {string} text - The text to translate
 * @returns {string} The translated text
 */
const skillT = (text) => {
	// Returns the translation of text in the current locale, or the original text wrapped in brackets if not found
	const localeText = skills[text][getLocale()];

	return localeText || skills[text]['en'] || `${text}`;
};

/**
 * Translates text to the current locale
 * If the translation is not found, returns the original text wrapped in brackets
 * @param {string} text - The text to translate
 * @returns {string} The translated text
 */
const jobT = (text) => {
	// Returns the translation of text in the current locale, or the original text wrapped in brackets if not found
	const localeText = resume[text][getLocale()];

	return localeText || `${text}`;
};

/**
 * Translates text to the current locale without wrapping it in brackets
 * If the translation is not found, returns the original text
 * @param {string} text - The text to translate
 * @returns {string} The translated text
 */
const tNoBracket = (text) => {
	// Returns the translation of text in the current locale, or the original text wrapped in brackets if not found
	const localeText = locale[getLocale()][text];

	return localeText || text;
};

export { t, tNoBracket, defaultLocale, getLocale, setLocale, skillT, jobT };
