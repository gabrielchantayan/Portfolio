import { getLocale, t } from '../assets/js/locale.js';
import SkillContainer from './SkillContainer.js';

/**
 * Project component renders a project listing with name, description, date, technologies, and links.
 *
 * @param {Object} props - The props object containing:
 * @param {Object} props.name - The project name in different languages.
 * @param {Object} props.description - The project description in different languages.
 * @param {Array} props.date - The project start and end dates.
 * @param {Array} props.technologies - The project technologies.
 * @param {Array} props.links - The project links.
 * @return {JSX.Element} The rendered project component.
 */
export default function Project({ name, description, date, technologies, links }) {
	let locale = getLocale();

	/**
	 * Formats the date into an h2 element.
	 *
	 * @param {Array} date - The start and end dates of the project.
	 * @return {JSX.Element} The formatted date as an h2 element.
	 */
	const formatDate = (date) => {
		if (date.length === 2) {
			let d = date[1] == 'current' ? t('current') : date[1];
			return (
				<h2>
					{date[0]}
					{t('to')}
					{d}
				</h2>
			);
		} else {
			return <h2>{date[0]}</h2>;
		}
	};

	return (
		<div className='project'>
			<h1>{name[locale] || name['en']}</h1>
			{date && formatDate(date)}
			<p>{(description[locale] || description['en']).replace('\n', '\n')}</p>
			<SkillContainer skills={technologies} links={links} />
		</div>
	);
}
