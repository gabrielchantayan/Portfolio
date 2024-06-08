// import React, { useEffect } from 'react';
import { getLocale } from '../assets/js/locale.js';
import SkillContainer from './SkillContainer.js';

/**
 * Job component renders a job listing with title, company, blurb, bullets, and skills.
 *
 * @param {Object} props - The props object containing:
 * @param {Object} props.title - The job title in different languages.
 * @param {Object} props.company - The job company in different languages.
 * @param {Object} props.blurb - The job blurb in different languages.
 * @param {Object} props.bullets - The job bullets in different languages.
 * @param {Array} props.skills - The job skills.
 * @return {JSX.Element} The rendered job component.
 */
export default function Job({ title, company, blurb, bullets, skills }) {
	// Get the locale from the locale module
	let locale = getLocale();

	return (
		<div className='job'>
			{/* Render job title */}
			<h1>{title[locale]}</h1>
			{/* Render job company */}
			<h2>{company[locale]}</h2>
			{/* Render job blurb */}
			{blurb && (
				<p>
					{/* If there is a blurb in the current locale, render it. Otherwise, render the English version. */}
					{blurb[locale] || blurb['en']}
				</p>
			)}

			<ul>
				{/* Render job bullets */}
				{bullets &&
					(bullets.hasOwnProperty(locale) ? bullets[locale] : bullets['en']).map((bullet, index) => (
						<li key={index}>{bullet}</li>
					))}
			</ul>

			{/* Render job skills */}
			{skills && <SkillContainer skills={skills} />}
		</div>
	);
}
