// import React, { useEffect } from 'react';

export default function Link({ name, link }) {
	return (
		<div className='link' onClick={() => window.open(link, '_blank')}>
			{name}
		</div>
	);
}
