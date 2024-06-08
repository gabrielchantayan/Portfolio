// import React, { useEffect } from 'react';
import { tNoBracket } from '../assets/js/locale.js';
import Link from './Link.js';
import Skill from './Skill.js';

/**
 * SkillContainer component renders a list of skills and links.
 *
 * @param {Object} props - The props object containing:
 * @param {Array} props.skills - The skill list.
 * @param {Array} props.links - The link list.
 * @return {JSX.Element} The rendered skill container.
 */
export default function SkillContainer({ skills, links }) {
	return (
		<div className='skillContainer'>
			{/* Render links */}
			{links && links.map((link, index) => <Link key={index} name={tNoBracket(link[0])} link={link[1]} />)}

			{/* Render skills */}
			{skills && skills.map((skill, index) => <Skill key={index} name={skill} />)}
		</div>
	);
}
