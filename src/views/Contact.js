// import React, { useEffect } from 'react';
import { t } from '../assets/js/locale.js';
import SkillContainer from '../elements/SkillContainer.js';
import me from '../assets/img/me.jpg';

export default function Contact() {
	let streak = Math.floor((Date.now() - 1573534800000) / 1000 / 60 / 60 / 24);

	return (
		<div id='contact'>
			<h1 className='title'>{t('about')}</h1>
			<div className='imgFloat'>
				<img className="picOfMe" src={me} alt='Logo' />
				<p>
					{t('aboutMeSection')}&nbsp;
					<a href='https://www.duolingo.com/profile/Gulaggoon'>
						{t('duolingoStreak').replace('{{STREAK}}', streak)}
					</a>
				</p>
			</div>

			<h1 className='title'>{t('links')}</h1>
			<SkillContainer
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
