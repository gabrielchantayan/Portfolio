// import React, { useEffect } from 'react';
import { getLocale } from '../assets/js/locale.js';
import SkillContainer from './SkillContainer.js';

export default function Job({ title, company, blurb, bullets, skills }) {
	let locale = getLocale();

	return (
		<div className='job'>
			<h1>{title[locale]}</h1>
			<h2>{company[locale]}</h2>
			{blurb && <p>{blurb[locale] || blurb['en']}</p>}

			<ul>
				{bullets &&
					(bullets.hasOwnProperty(locale) ? bullets[locale] : bullets['en']).map((bullet, index) => (
						<li>{bullet}</li>
					))}
			</ul>

			{skills && <SkillContainer skills={skills} />}
		</div>
	);
}
