import React from 'react';
import * as S from './ServiceCardStyles';
import ServiceCard from './ServiceCard';
import Foto1 from '../img/foto-pe-1.png';
import Foto2 from '../img/foto-pe-2.png';
import Foto3 from '../img/foto-pe-3.png';

const Services: React.FC = () => {
	return (
		<S.CardContainer id='services-section'>
			<S.CardsTitle>
				Nosso serviço de podologia transforma a saúde dos seus pés,
				proporcionando mais conforto e bem-estar. 🚀
			</S.CardsTitle>
			<S.CardsWrapper>
				<ServiceCard
					image={Foto2}
					title='Podologia Preventiva'
					paragraph='Este serviço foca na prevenção de problemas nos pés, como unhas encravadas, frieiras, micoses e calos.'
				/>
				<ServiceCard
					image={Foto3}
					title='Podologia Geriátrica'
					paragraph='Esse serviço foca para o cuidado dos pés de idosos. além de realizar higienização dos pés, corte correto das unhas.'
				/>
				<ServiceCard
					image={Foto1}
					title='Podologia Esportiva'
					paragraph='Focado em atletas, este serviço visa manter os pés saudáveis para melhor desempenho e aliviar atritos nos pés, avalia lesões.'
				/>
			</S.CardsWrapper>
		</S.CardContainer>
	);
};

export default Services;
