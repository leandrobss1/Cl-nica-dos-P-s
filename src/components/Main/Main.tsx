import React from 'react';
import * as S from './styles';
import Mario from '../img/mario.jpg';

export const Main: React.FC = () => {
	return (
		<S.MainContainer>
			<S.MainArticle>
				<S.MainTitle>
					Clínica de Podologia Eficiência e Cuidado com Seus Pés
				</S.MainTitle>
				<S.MainParagraph>
					Olá, sou Mário Gomes, formado em podologia e apaixonado por cuidar da
					saúde dos seus pés. Com anos de experiência, ofereço tratamentos
					eficazes e personalizados para garantir o seu bem-estar e conforto.
				</S.MainParagraph>
			</S.MainArticle>
			<S.MainImage src={Mario} alt='Mário Podólogo' title='Mário Podólogo' />
		</S.MainContainer>
	);
};
