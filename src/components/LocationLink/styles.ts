import styled from 'styled-components';

export const StaticMapImage = styled.img`
	width: 50%;
	height: auto;
	border-radius: 1px;
	border: 1px solid #ddd;
	transition: transform 0.3s ease;

	@media (max-width: 991px) {
		width: 70%;
	}

	@media (max-width: 600px) {
		width: 100%;
	}

	&:hover {
		transform: scale(1.05);
	}
`;
