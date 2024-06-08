/**
 * Link component renders a clickable link with the given name.
 * When clicked, it opens the link in a new tab.
 *
 * @param {Object} props - The props object containing:
 * @param {string} props.name - The text to display as the link.
 * @param {string} props.link - The URL to open when the link is clicked.
 * @return {JSX.Element} The rendered link component.
 */
export default function Link({ name, link }) {
	// Render a clickable div with the link name.
	// When clicked, it opens the link in a new tab.
	return (
		<div className='link' onClick={() => window.open(link, '_blank')}>
			{/* Display the link name */}
			{name}
		</div>
	);
}
