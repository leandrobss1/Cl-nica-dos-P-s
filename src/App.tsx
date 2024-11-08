import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import ScrollToTop from './components/Scroll/Scroll';
import Services from './components/ServiceCard/Service';
import Contact from './components/Contact/Contact';
import WhatsAppButton from './components/WhatsappButton/WhatsappButton';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Galeria from './components/Resultados/Resultados';
import Article from './components/Article/Article';

function App() {
	return (
		<>
			<Header />
			<Main />
			<Services />
			<Article />
			<Galeria />

			<Contact />

			<GlobalStyles />

			<WhatsAppButton
				phoneNumber='5561995394260'
				message='Olá! Gostaria de saber mais sobre seus serviços de podologia!'
			/>
			<ScrollToTop />
		</>
	);
}

export default App;
