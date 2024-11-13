import React, { useState } from 'react';
import * as S from './styles';
import Logo from '../img/logo.png';

export const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
			});
		}
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<S.StyledHeader>
			<S.Wrapper id='home-section'>
				<S.HeaderTitle>
					<S.ImgLogo src={Logo} alt='Logo-Clinica' title='Logo da Clínica' />
					Sáude dos Pés
				</S.HeaderTitle>

				<S.MenuIcon onClick={toggleMenu}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='30'
						viewBox='0 0 24 24'
					>
						<path
							d='M3 12h18M3 6h18M3 18h18'
							stroke='black'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</S.MenuIcon>

				<S.ButtonsWrapper isMenuOpen={isMenuOpen}>
					<S.HomeButton onClick={() => scrollToSection('home-section')}>
						INÍCIO
					</S.HomeButton>
					<S.ServicesButton onClick={() => scrollToSection('services-section')}>
						SERVIÇOS
					</S.ServicesButton>
					<S.ArticleButton onClick={() => scrollToSection('article-section')}>
						TRATAMENTO
					</S.ArticleButton>
					<S.ResultsButton onClick={() => scrollToSection('results-section')}>
						RESULTADOS
					</S.ResultsButton>
					<S.ContactButton onClick={() => scrollToSection('contact-section')}>
						CONTATO
					</S.ContactButton>
				</S.ButtonsWrapper>
			</S.Wrapper>
		</S.StyledHeader>
	);
};
