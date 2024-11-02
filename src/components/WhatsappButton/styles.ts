import styled from 'styled-components';

export const Button = styled.a`
	position: fixed;
	bottom: 5.6rem;
	right: 2rem;
	width: 2rem;
	height: 2rem;
	background-color: green;
	color: white;
	border: none;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 1000;
	margin: 0;
	text-decoration: none;
	padding: 1.5rem;

	i {
		font-size: 35px;
		margin: 0;
		border-radius: 100%;
	}
`;
