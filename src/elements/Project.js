// import React, { useEffect } from 'react';
import { getLocale, t, tNoBracket } from '../assets/js/locale.js';
import SkillContainer from './SkillContainer.js';

export default function Project({ name, description, date, technologies, links }) {
	let locale = getLocale();


    const formatDate = (date) => {
        if (date.length === 2) {

            let d = (date[1] == 'current') ? t('current') : date[1];

            return (
				<h2>
					{date[0]}{t('to')}{d}
				</h2>
			);
        } else {
           <h2>{date[0]}</h2>;
        }
    }


	return (
		<div className='project'>
			<h1>{name[locale] || name['en']}</h1>
			{date && formatDate(date)}
			<p>{(description[locale] || description['en']).replace('\n', '\n')}</p>
			<SkillContainer skills={technologies} links={links} />
		</div>
	);
}
