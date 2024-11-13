import styled from 'styled-components';

export const GeneralTitle = styled.h1`
	text-align: center;
	margin-bottom: 3rem;
	font-weight: 300;
	padding-top: 1rem;
`;

export const ArticlesContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ArticleContainer = styled.article`
	display: flex;
	flex-direction: row;
	align-items: center;
	border: 1px solid #ddd;
	border-radius: 8px;
	padding: 16px;
	max-width: 1271.7px;
	margin: 16px auto;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	perspective: 1000px;
	background-color: white;
`;

export const ArticleLeft = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 16px;
`;

export const ArticleTitle = styled.h2`
	font-size: 1.5rem;
	margin: 0.5rem 0;
	text-align: center;
	color: #083640;
`;

export const ArticleImage = styled.img`
	width: 100%;
	height: 221.7px;
	object-fit: cover;
	border-radius: 8px;
	margin-bottom: 0.5rem;
	transition: transform 0.5s ease-in-out;

	&:hover {
		transform: rotateY(180deg);
	}
`;

export const ArticleRight = styled.div`
	flex: 2;
`;

export const ArticleDescription = styled.p`
	font-size: 1.5rem;
	line-height: 1.5;
	text-align: center;
	margin: 1rem;
	font-weight: 300;

	@media (max-width: 991px) {
		font-size: 1.2rem;
	}

	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;

export const ArticleContainerReverse = styled(ArticleContainer)`
	flex-direction: row-reverse;
`;
