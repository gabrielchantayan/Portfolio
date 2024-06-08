// import React, { useEffect } from 'react';
import { t } from '../assets/js/locale.js';
import Project from '../elements/Project.js';
import projects from '../projects.json';

export default function Projects() {
	return (
		<div id='projects'>
			<h1 className='title'>{t('projects')}</h1>

			{projects.map((project, index) => (
				<Project
					key={index}
					name={project['name']}
					date={project['dates']}
					description={project['description']}
					technologies={project['technologies']}
					links={project['links']}
				/>
			))}
		</div>
	);
}
