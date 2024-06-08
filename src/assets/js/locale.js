import resume from '../../resume.json';
import locale from '../locale.json';
import skills from '../skills.json';


const defaultLocale = 'en';

/**
 * Returns the current locale from localStorage, or sets it to the default locale if it is not set
 * @returns {string} The current locale
 */
const getLocale = () => {
	// If the locale is already set in localStorage, return it
	if (localStorage.getItem('locale') !== null) {
		return localStorage.getItem('locale').split('-')[0];
	} else {
		// If the locale is not set, set it to the default locale and return it
		setLocale(defaultLocale);
		return defaultLocale;
	}
};

/**
 * Sets the current locale in localStorage
 * @param {string} locale - The new locale to set
 */
const setLocale = (locale) => {
	// Set the current locale in localStorage
	localStorage.setItem('locale', locale);
};

/**
 * Translates text to the current locale.
 *
 * If the translation is not found, returns the original text wrapped in brackets.
 *
 * @param {string} text - The text to translate.
 * @returns {string} The translated text.
 */
const t = (text) => {
	// Returns the translation of text in the current locale.
	// If the translation is not found, returns the original text wrapped in brackets.

	// Get the translation of the text in the current locale
	const localeText = locale[getLocale()][text];

	// If the translation is not found, return the original text wrapped in brackets
	return localeText || `[[${text}]]`;
};

/**
 * Translates text to the current locale.
 *
 * If the translation is not found, returns the original text wrapped in brackets.
 *
 * @param {string} text - The text to translate.
 * @returns {string} The translated text.
 */
const skillT = (text) => {
	// Returns the translation of the text in the current locale.
	// If the translation is not found, returns the original text wrapped in brackets.

	// Get the translation of the text in the current locale
	const localeText = skills[text][getLocale()];

	// If the translation is not found, try to get the English translation
	// If that is not found, return the original text
	return localeText || skills[text]['en'] || `${text}`;
};

/**
 * Translates job text to the current locale
 * If the translation is not found, returns the original text wrapped in brackets
 * @param {string} text - The job text to translate
 * @returns {string} The translated job text
 */
const jobT = (text) => {
	// Returns the translation of job text in the current locale.
	// If the translation is not found, returns the original text wrapped in brackets.

	// Get the translation of the job text in the current locale
	const localeText = resume[text][getLocale()];

	// If the translation is not found, return the original text wrapped in brackets
	return localeText || `${text}`;
};

/**
 * Translates text to the current locale without wrapping it in brackets.
 *
 * If the translation is not found, returns the original text.
 *
 * @param {string} text - The text to translate.
 * @returns {string} The translated text.
 */
const tNoBracket = (text) => {
	// Returns the translation of the text in the current locale.
	// If the translation is not found, returns the original text.

	// Get the translation of the text in the current locale
	const localeText = locale[getLocale()][text];

	// If the translation is not found, return the original text
	return localeText || text;
};

export { t, tNoBracket, defaultLocale, getLocale, setLocale, skillT, jobT };
