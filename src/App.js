import './assets/styles/main.css';
import Contact from './views/Contact';
import Experience from './views/Experience';
import InitialView from './views/InitialView';
import Projects from './views/Projects';

function App() {
	if (localStorage.getItem('locale') === null) {
		const locale = navigator.language;
		if (locale.split('-')[0] !== 'hy' || locale.split('-')[0] !== 'fr-FR') {
			// Set localstorage locale to english
			localStorage.setItem('locale', 'en');
		} else {
			// Set localstorage locale to locale
			localStorage.setItem('locale', locale.split('-')[0]);
		}
	}

	return (
		<div className='App'>
			<InitialView />
			{/* <Navbar /> */}
			<Experience />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
