// import React, { useEffect } from 'react';
import { getLocale, setLocale, t } from '../assets/js/locale.js';

function LangSelect({ language, code }) {
	const handleLangClick = () => {
		setLocale(code);
		window.location.reload();
	};

	return (
		<div className={getLocale() === code ? 'selected' : ''} onClick={handleLangClick}>
			{language}
		</div>
	);
}

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
