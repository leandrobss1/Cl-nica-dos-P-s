import React from 'react';
import * as S from './styles';
import Logo from '../img/logo.png';

export const Header: React.FC = () => {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
			});
		}
	};

	return (
		<S.StyledHeader>
			<S.Wrapper id='home-section'>
				<S.HeaderTitle>
					<S.ImgLogo src={Logo} alt='Logo-Clinica' title='Logo da Clínica' />
					Clínica dos Pés
				</S.HeaderTitle>

				<S.ButtonsWrapper>
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
