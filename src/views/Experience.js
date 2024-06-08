// import React, { useEffect } from 'react';
import { getLangCode, getLocale, t } from '../assets/js/locale.js';
import Job from '../elements/Job.js';
import resume from '../resume.json';

export default function Experience() {

	let locale = 'en';

	return (
		<div id='experience'>

			<h1 className="title">{t('experience')}</h1>

			{resume.map((job, index) => (
				<Job
					key={index}
					title={job['title']}
					company={job['company']}
					blurb={job['blurb'] || undefined}
					bullets={job.bullets || undefined}
					skills={job['skills']}
				/>
			))}
		</div>
	);
}
