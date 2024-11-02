import styled from 'styled-components';

export const FooterContainer = styled.footer`
	width: 100%;
	background-color: #333;
	color: #fff;
	text-align: center;
	padding: 1rem 0;
	bottom: 0;
`;

export const FooterText = styled.p`
	margin: 0;
	font-size: 1rem;
`;

export const FooterLinks = styled.div`
	margin: 0.5rem 0;
	padding-top: 1rem;

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
	color: #fff;
	margin: 0 0.5rem;
	text-decoration: none;

	&:hover {
		color: #7ab2d3;
	}
`;
