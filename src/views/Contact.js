import { t } from '../assets/js/locale.js';
import SkillContainer from '../elements/SkillContainer.js';
import me from '../assets/img/me.jpg';

/**
 * Contact view component.
 *
 * This component renders the contact view of the website. It displays information
 * about the user, including their picture, a brief description, and various links
 * to their social media profiles and resume.
 *
 * @returns {JSX.Element} - The contact view component.
 */
export default function Contact() {
	// Calculate the current duolingo streak in days
	let streak = Math.floor((Date.now() - 1573534800000) / 1000 / 60 / 60 / 24);

	return (
		<div id='contact'>
			<h1 className='title'>{t('about')}</h1>

			{/* Display picture and description */}
			<div className='imgFloat'>
				<img className='picOfMe' src={me} alt='Logo' />
				<p>
					{/* Display description with duolingo streak */}
					{t('aboutMeSection')}&nbsp;
					<a href='https://www.duolingo.com/profile/Gulaggoon'>
						{t('duolingoStreak').replace('{{STREAK}}', streak)}
					</a>
				</p>
			</div>

			<h1 className='title'>{t('links')}</h1>
			<SkillContainer
				/* Display links to various social media profiles and resume */
				links={[
					['resumeEnglish', 'https://gabrielchantayan.com/Gabriel-Chantayan-Resume-English.pdf'],
					['email', 'mailto:me@gabrielchantayan.com'],
					['LinkedIn', 'https://www.linkedin.com/in/gabrielchantayan/'],
					['GitHub', 'https://github.com/gabrielchantayan'],
				]}
			/>
		</div>
	);
}
