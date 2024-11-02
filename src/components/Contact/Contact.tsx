import React from 'react';
import * as S from './styles';
import { CiInstagram } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';

const Footer: React.FC = () => {
	return (
		<S.FooterContainer id='contact-section'>
			<S.FooterLinks>
				<S.FooterLink href='#!'>
					<CiInstagram />
				</S.FooterLink>
				<S.FooterLink href='#!'>
					<FaXTwitter />
				</S.FooterLink>
				<S.FooterLink href='#!'>
					<FaFacebookF />
				</S.FooterLink>
			</S.FooterLinks>
			<S.FooterText>
				© 2024 Clínica dos Pés. Todos os direitos reservados.
			</S.FooterText>
		</S.FooterContainer>
	);
};

export default Footer;
