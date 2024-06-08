import { getLocale, setLocale, t } from '../assets/js/locale.js';

/**
 * LangSelect component renders a language selection button.
 *
 * @param {Object} props - The props object containing:
 * @param {string} props.language - The language name.
 * @param {string} props.code - The language code.
 * @return {JSX.Element} The rendered language selection button.
 */
function LangSelect({ language, code }) {
	/**
	 * Handles the language selection button click.
	 * Sets the new locale and reloads the page.
	 */
	const handleLangClick = () => {
		setLocale(code);
		window.location.reload();
	};

	return (
		<div
			className={getLocale() === code ? 'selected' : ''}
			onClick={handleLangClick}
		>
			{language}
		</div>
	);
}

/**
* InitialView component renders the initial view of the website.
*
* This component renders a greeting message with the user's name and a language
* selection button.
*
* @return {JSX.Element} The rendered initial view component.
*/
export default function InitialView() {
	return (
		<div id='greet'>
			<div className='text'>
				<p class='intro'>{t('myNameIs')}</p>
				<p id='name'>{t('gabrielChantayan')}</p>
			</div>

			<div id='langSelect'>
				<LangSelect language='eng' code='en' />
				<LangSelect language='fra' code='fr' />
				<LangSelect language='հայ' code='hy' />
			</div>
		</div>
	);
}
