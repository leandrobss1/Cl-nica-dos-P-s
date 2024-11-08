import styled from 'styled-components';

export const FooterContainer = styled.footer`
	width: 100%;
	background-color: #4f4f4f;
	color: #fff;
	text-align: center;
	padding: 1rem 0;
	bottom: 0;
`;

export const FooterText = styled.p`
	margin: 0;
	font-size: 2rem;
	font-weight: 300;
	text-align: center;
	padding-bottom: 1rem;
`;

export const FooterRight = styled.p`
	margin: 0;
	font-size: 1rem;
	font-weight: 300;
	text-align: center;
	color: black;
`;

export const FooterLinks = styled.div`
	margin: 0.5rem 0;
	padding-top: 1rem;
	text-align: center;
	font-size: 0.2rem;
	width: auto;
	height: auto;

	&::before {
		content: '';
		display: block;
		width: 50%;
		margin: 0 auto;
		padding: 1rem;
		border-top: 2px solid #fff;
	}
`;

export const FooterLink = styled.a`
	display: inline-flex;
	align-items: center;
	color: #fff;
	margin: 0 0.5rem;
	text-decoration: none;
	text-align: center;
	font-size: 1rem;
	font-family: inter, sans-serif;

	svg {
		margin-right: 0.5rem;
		font-size: 1rem;
	}
	&:hover {
		color: #083640;
	}
`;

export const FooterCep = styled.p`
	color: white;
	font-size: 1rem;
	padding-top: 1rem;
`;
