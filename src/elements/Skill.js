// import React, { useEffect } from 'react';
import { getLangCode, locale, skillT, t } from '../assets/js/locale.js';

export default function Skill({ name }) {
	return <div className='skill'> {skillT(name)}</div>;
}
