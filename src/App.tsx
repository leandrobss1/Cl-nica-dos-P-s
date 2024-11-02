import React, { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Services } from './components/Services/Services';
import { Contact } from './components/Contact/Contact';
import Resultados from './components/Resultados/Resultados';
import ScrollToTop from './components/Scroll/Scroll';

function App() {
	const [currentPage, setCurrentPage] = useState('home');

	const switchPage = (page: string) => {
		setCurrentPage(page);
	};

	return (
		<>
			<Header switchPage={switchPage} />
			{currentPage === 'home' && (
				<>
					<Main />
					<Services />
					<Contact />
				</>
			)}
			{currentPage === 'resultados' && <Resultados />}
			<GlobalStyles />
			<ScrollToTop />
		</>
	);
}

export default App;
