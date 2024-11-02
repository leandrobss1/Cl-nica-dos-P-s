import React from 'react';
import * as S from './styles';
import Logo from '../img/logo.png';

type HeaderProps = {
	switchPage: (page: string) => void;
};

export const Header: React.FC<HeaderProps> = ({ switchPage }) => {
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
			<S.Wrapper>
				<S.HeaderTitle id='home-section'>
					<S.ImgLogo src={Logo} alt='Logo-Clinica' title='Logo da Clínica' />
					Clínica dos Pés
				</S.HeaderTitle>

				<S.ButtonsWrapper>
					<S.HomeButton onClick={() => switchPage('home')}>INÍCIO</S.HomeButton>
					<S.ServicesButton onClick={() => scrollToSection('services-section')}>
						SERVIÇOS
					</S.ServicesButton>
					<S.ContactButton onClick={() => scrollToSection('contact-section')}>
						CONTATO
					</S.ContactButton>
					<S.ResultsButton onClick={() => switchPage('resultados')}>
						RESULTADOS
					</S.ResultsButton>
				</S.ButtonsWrapper>
			</S.Wrapper>
		</S.StyledHeader>
	);
};
