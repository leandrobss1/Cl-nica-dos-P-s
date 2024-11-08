import styled from 'styled-components';

export const StaticMapImage = styled.img`
	width: 50%;
	height: auto;
	border-radius: 1px;
	border: 1px solid #ddd;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.05);
	}
`;
