// import React, { useEffect } from 'react';
import { t } from '../assets/js/locale.js';
import Job from '../elements/Job.js';
import resume from '../resume.json';

/**
 * The Experience component renders a list of job listings.
 *
 * @returns {JSX.Element} The rendered Experience component.
 */
export default function Experience() {
	// Render a div element with the id 'experience'
	return (
		<div id='experience'>
			{/* Render an h1 element with the text 'Experience' in the current locale */}
			<h1 className='title'>{t('experience')}</h1>

			{/* Render a list of job listings */}
			{resume.map((job, index) => (
				<Job
					// Assign a unique key to each job listing
					key={index}
					// Pass the title, company, blurb, bullets, and skills to the Job component
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
