import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8rem;
	padding: 1.25rem;
	margin-bottom: 1rem;
`;

export const MainArticle = styled.article`
	max-width: 40%;
	padding: 2rem;
	text-align: center;
	border-right: 2px solid #083640;
`;

export const MainTitle = styled.h1`
	font-size: 2.3rem;
	margin-bottom: 2rem;
`;

export const MainParagraph = styled.p`
	font-size: 18px;
	font-weight: 400;
	color: #083640;
`;

export const MainImage = styled.img`
	max-width: 35%;
	height: auto;
	border-radius: 2px;
`;
