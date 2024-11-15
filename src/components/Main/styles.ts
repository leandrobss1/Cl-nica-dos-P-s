import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8rem;
	padding: 1.25rem;
	margin-bottom: 1rem;
	flex-wrap: wrap;

	@media (max-width: 991px) {
		flex-direction: column;
		gap: 1rem;
	}
`;

export const MainArticle = styled.article`
	max-width: 40%;
	padding: 2rem;
	text-align: center;
	border-right: 2px solid #083640;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 991px) {
		max-width: 80%;
		border-right: none;
		order: 1;
	}

	@media (max-width: 600px) {
		max-width: 100%;
		border-right: none;
	}
`;

export const MainTitle = styled.h1`
	font-size: 2.3rem;
	margin-bottom: 1rem;

	@media (max-width: 991px) {
		font-size: 1.8rem;
	}

	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
`;

export const MainParagraph = styled.p`
	font-size: 18px;
	font-weight: 400;
	color: #083640;
	margin-top: 1rem;

	@media (max-width: 991px) {
		font-size: 16px;
	}

	@media (max-width: 600px) {
		font-size: 14px;
	}
`;

export const MainImage = styled.img`
	max-width: 35%;
	height: auto;
	border-radius: 2px;
	margin-bottom: 2rem;

	@media (max-width: 991px) {
		max-width: 50%;
		order: 2;
	}

	@media (max-width: 600px) {
		max-width: 90%;
	}
`;
