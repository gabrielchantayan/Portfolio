// import React, { useEffect } from 'react';
import { skillT } from '../assets/js/locale.js';

/**
 * Skill component renders a skill name.
 *
 * @param {Object} props - The props object containing:
 * @param {string} props.name - The skill name in different languages.
 * @return {JSX.Element} The rendered skill component.
 */
export default function Skill({ name }) {
	/**
	 * Renders a skill name with the correct translation.
	 *
	 * @return {JSX.Element} The rendered skill component.
	 */
	return <div className='skill'> {skillT(name)}</div>;
}
