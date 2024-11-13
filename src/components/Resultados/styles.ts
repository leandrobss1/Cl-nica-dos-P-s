import styled from 'styled-components';

export const GalleryContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: auto;
	margin-top: 2rem;
	padding: 1rem;

	@media (max-width: 991px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const GalleryTitle = styled.h1`
	text-align: center;
	font-weight: 300;
	padding: 0.1rem;
	font-size: 1.8rem;

	@media (max-width: 991px) {
		font-size: 1.5rem;
	}
`;

export const GalleryItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem;

	@media (max-width: 991px) {
		margin: 0.5rem;
	}
`;

export const GalleryImage = styled.img`
	width: 370px;
	height: 390px;
	object-fit: cover;
	margin-bottom: 0.5rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border: 1px solid #ccc;

	@media (max-width: 991px) {
		width: 400px;
		height: 400px;
	}

	@media (max-width: 600px) {
		width: 250px;
		height: 250px;
	}
`;
