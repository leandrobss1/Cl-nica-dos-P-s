import styled from 'styled-components';

export const GalleryContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	margin-top: 2rem;
`;

export const GalleryTitle = styled.h1`
	text-align: center;
	font-weight: 300;
	padding: 0.4rem;
`;

export const GalleryItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem;
`;

export const GalleryImage = styled.img`
	width: 370px;
	height: 390px;
	object-fit: cover;
	margin-bottom: 0.5rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border: 1px solid #ccc;
`;
