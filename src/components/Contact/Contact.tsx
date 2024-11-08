import React from 'react';
import * as S from './styles';
import { CiInstagram } from 'react-icons/ci';

const Footer: React.FC = () => {
	return (
		<S.FooterContainer id='contact-section'>
			<S.FooterLinks>
				<S.FooterLink
					href='https://www.instagram.com/mario_podologia/'
					target='_blank'
				>
					<CiInstagram /> mario_podologia
				</S.FooterLink>
			</S.FooterLinks>
			<S.FooterText>
				© 2024 Clínica dos Pés. Todos os direitos reservados.
			</S.FooterText>
		</S.FooterContainer>
	);
};

export default Footer;
