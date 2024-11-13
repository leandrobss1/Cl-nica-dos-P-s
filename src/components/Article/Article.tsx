import React from 'react';
import * as S from './styles';
import Foto1 from '../img/fotores1.jpg';
import Foto2 from '../img/fotores2.jpg';

const Articles: React.FC = () => {
	const generalTitle =
		'Tratamento podológico: Saúde e bem-estar para seus pés 👣👨‍⚕️';

	return (
		<>
			<S.GeneralTitle id='article-section'>{generalTitle}</S.GeneralTitle>
			<S.ArticlesContainer>
				<S.ArticleContainer>
					<S.ArticleLeft>
						<S.ArticleTitle>O que é a podologia?</S.ArticleTitle>
						<S.ArticleImage src={Foto1} alt='Tratando a saúde dos pés' />
					</S.ArticleLeft>
					<S.ArticleRight>
						<S.ArticleDescription>
							A podologia é uma área da saúde que se dedica ao estudo,
							diagnóstico, prevenção e tratamento de doenças e alterações que
							afetam os pés. Os podólogos são profissionais habilitados para
							cuidar da saúde dos pés, com conhecimentos específicos para tratar
							problemas como: Unhas encravadas, Micoses, Fissuras, Calos,
							Infecções.
						</S.ArticleDescription>
					</S.ArticleRight>
				</S.ArticleContainer>

				<S.ArticleContainerReverse>
					<S.ArticleLeft>
						<S.ArticleTitle>
							A importância do tratamento com o podólogo
						</S.ArticleTitle>
						<S.ArticleImage src={Foto2} alt='Tratando a saúde dos pés' />
					</S.ArticleLeft>
					<S.ArticleRight>
						<S.ArticleDescription>
							O tratamento dos pés com um podólogo é fundamental para garantir a
							saúde e o bem-estar das extremidades inferiores, prevenindo
							problemas como calosidades, unhas encravadas, micoses, fascite
							plantar e outras condições que podem afetar a mobilidade e a
							qualidade de vida.
						</S.ArticleDescription>
					</S.ArticleRight>
				</S.ArticleContainerReverse>
			</S.ArticlesContainer>
		</>
	);
};

export default Articles;
