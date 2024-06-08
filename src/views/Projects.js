import { t } from '../assets/js/locale.js';
import Project from '../elements/Project.js';
import projects from '../projects.json';

/**
 * Renders the Projects view component.
 *
 * @return {JSX.Element} The rendered Projects view.
 */
export default function Projects() {
	return (
		<div id='projects'>
			{/* Heading element for the Projects section */}
			<h1 className='title'>{t('projects')}</h1>

			{/* Map over each project and render a Project component */}
			{projects.map((project, index) => (
				<Project
					key={index}
					name={project['name']} // Project name
					date={project['dates']} // Project dates
					description={project['description']} // Project description
					technologies={project['technologies']} // Project technologies
					links={project['links']} // Project links
				/>
			))}
		</div>
	);
}
