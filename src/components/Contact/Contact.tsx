import React from 'react';
import * as S from './styles';
import { CiInstagram } from 'react-icons/ci';
import LocationLink from '../LocationLink/LocationLink';

const Footer: React.FC = () => {
	return (
		<S.FooterContainer id='contact-section'>
			<S.FooterText>Faça-nos uma visita 🫰🏻✨</S.FooterText>
			<LocationLink />
			<S.FooterCep>
				R. Santa Maria, Qd 216, cj M. casa 13 - Brasília/DF - CEP: 72546513
			</S.FooterCep>
			<S.FooterLinks>
				<S.FooterLink
					href='https://www.instagram.com/mario_podologia/'
					target='_blank'
				>
					<CiInstagram /> mario_podologia
				</S.FooterLink>
			</S.FooterLinks>
			<S.FooterRight>
				© 2024 Clínica dos Pés. Todos os direitos reservados.
			</S.FooterRight>
		</S.FooterContainer>
	);
};

export default Footer;
