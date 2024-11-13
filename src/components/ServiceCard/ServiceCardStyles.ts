import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 40rem;
	padding-top: 1rem;
	background-color: white;

	@media (max-width: 991px) {
		height: auto;
	}

	@media (max-width: 600px) {
		height: auto;
	}
`;

export const CardsWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;

	@media (max-width: 991px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	@media (max-width: 600px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
`;

export const CardsTitle = styled.h1`
	text-align: center;
	margin-bottom: 1rem;
	font-weight: 300;

	@media (max-width: 991px) {
		font-size: 1.5rem;
	}

	@media (max-width: 600px) {
		font-size: 1.3rem;
	}
`;

export const Card = styled.div`
	width: 300px;
	height: 400px;
	border: 1px solid #ccc;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s;
	margin: 2rem;

	&:hover {
		transform: scale(1.05);
	}

	@media (max-width: 991px) {
		width: 45%;
		height: auto;
	}

	@media (max-width: 600px) {
		width: 90%;
		height: auto;
		margin: 1rem;
	}
`;

export const CardImage = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;

	@media (max-width: 991px) {
		height: 150px;
	}

	@media (max-width: 600px) {
		height: 130px;
	}
`;

export const CardContent = styled.div`
	padding: 16px;
	height: calc(100% - 200px);
	box-sizing: border-box;

	@media (max-width: 991px) {
		height: auto;
	}

	@media (max-width: 600px) {
		height: auto;
	}
`;

export const CardTitle = styled.h2`
	font-size: 1.5em;
	margin-bottom: 1rem;
	text-align: center;

	@media (max-width: 991px) {
		font-size: 1.2em;
	}

	@media (max-width: 600px) {
		font-size: 1.1em;
	}
`;

export const CardParagraph = styled.p`
	font-size: 1em;
	text-align: center;
	color: #555;

	@media (max-width: 991px) {
		font-size: 0.9em;
	}

	@media (max-width: 600px) {
		font-size: 0.8em;
	}
`;
