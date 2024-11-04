import React from 'react';
import * as S from './styles';
import Foto1 from '../img/Foto1.png';
import Foto2 from '../img/Foto2.png';
import Foto3 from '../img/Foto3.png';

const Galeria: React.FC = () => {
	return (
		<S.GalleryContainer id='results-section'>
			<S.GalleryTitle>
				Confie nos cuidados e transforme a saúde dos seus pés e sinta a
				diferença em cada passo. 🚶‍♂️✨
			</S.GalleryTitle>
			<S.GalleryItem>
				<S.GalleryImage
					src={Foto1}
					alt='Antes e Depois'
					title='Tratamento de Frieira'
				/>
				<S.GalleryLabel>Tratamento de Frieira</S.GalleryLabel>
			</S.GalleryItem>
			<S.GalleryItem>
				<S.GalleryImage
					src={Foto2}
					alt='Antes e Depois'
					title='Tratamento de Unha Encravada'
				/>
				<S.GalleryLabel>Tratamento de Unha Encravada</S.GalleryLabel>
			</S.GalleryItem>
			<S.GalleryItem>
				<S.GalleryImage
					src={Foto3}
					alt='Antes e Depois'
					title='Tratamento de Micose'
				/>
				<S.GalleryLabel>Tratamento de Micose</S.GalleryLabel>
			</S.GalleryItem>
		</S.GalleryContainer>
	);
};

export default Galeria;
