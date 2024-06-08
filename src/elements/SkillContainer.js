// import React, { useEffect } from 'react';
import { tNoBracket } from '../assets/js/locale.js';
import Link from './Link.js';
import Skill from './Skill.js';

export default function SkillContainer({ skills, links }) {
	return (
		<div className='skillContainer'>
			{links && links.map((link, index) => <Link key={index} name={tNoBracket(link[0])} link={link[1]} />)}

			{skills && skills.map((skill, index) => <Skill key={index} name={skill} />)}
		</div>
	);
}
