import styled from 'styled-components';

export const StyledHeader = styled.header`
	background: white;
`;

export const ImgLogo = styled.img`
	border: 1px solid black;
	border-radius: 100%;
	width: 50px;
	height: 50px;
	object-fit: contain;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1240px;
	margin: 0 auto;
	padding: 0 2rem;
	height: 80px;
`;

export const HeaderTitle = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	color: black;
	font-size: 1.6rem;
	font-weight: 400;

	img {
		margin-right: 10px;
	}
`;

export const ButtonsWrapper = styled.div<{ isMenuOpen: boolean }>`
	display: flex;
	gap: 0.1rem;

	@media (max-width: 830px) {
		display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')};
		flex-direction: column;
		width: 16%;
		position: absolute;
		top: 80px;
		right: 0px;
		background-color: white;
		padding: 1rem 0;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	@media (max-width: 420px) {
		display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')};
		flex-direction: column;
		width: 25%;
		position: absolute;
		top: 80px;
		right: 0px;
		background-color: white;
		padding: 1rem 0;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}
`;

export const HomeButton = styled.button`
	border: none;
	height: 30px;
	padding: 0 1rem;
	color: black;
	cursor: pointer;

	display: flex;
	align-items: center;
	gap: 0.2rem;

	&:hover {
		color: gray;
		transition: 0.2s;
	}

	@media (max-width: 830px) {
		width: 100%;
		text-align: center;
		padding: 1rem;
	}
`;

export const ServicesButton = styled.button`
	border: none;
	height: 30px;
	padding: 0 1rem;
	color: black;
	cursor: pointer;

	display: flex;
	align-items: center;
	gap: 0.2rem;

	&:hover {
		color: gray;
		transition: 0.2s;
	}

	@media (max-width: 830px) {
		width: 100%;
		text-align: center;
		padding: 1rem;
	}
`;

export const ContactButton = styled.button`
	border: none;
	height: 30px;
	padding: 0 1rem;
	color: black;
	cursor: pointer;

	display: flex;
	align-items: center;
	gap: 0.2rem;

	&:hover {
		color: gray;
		transition: 0.2s;
	}

	@media (max-width: 830px) {
		width: 100%;
		text-align: center;
		padding: 1rem;
	}
`;

export const ResultsButton = styled.button`
	border: none;
	height: 30px;
	padding: 0 1rem;
	color: black;
	cursor: pointer;

	display: flex;
	align-items: center;
	gap: 0.2rem;

	&:hover {
		color: gray;
		transition: 0.2s;
	}

	@media (max-width: 830px) {
		width: 100%;
		text-align: center;
		padding: 1rem;
	}
`;

export const ArticleButton = styled.button`
	border: none;
	height: 30px;
	padding: 0 1rem;
	color: black;
	cursor: pointer;

	display: flex;
	align-items: center;
	gap: 0.2rem;

	&:hover {
		color: gray;
		transition: 0.2s;
	}

	@media (max-width: 830px) {
		width: 100%;
		text-align: center;
		padding: 1rem;
	}
`;

export const MenuIcon = styled.div`
	display: none;
	cursor: pointer;

	@media (max-width: 830px) {
		display: block;
	}
`;
