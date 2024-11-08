import React from 'react';
import * as S from './styles';
import Localizacao from '../img/localizacao.png';

const LocationLink: React.FC = () => {
	const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=-16.00654,-47.993737`;
	return (
		<a href={googleMapsUrl} target='_blank' rel='noopener noreferrer'>
			<S.StaticMapImage src={Localizacao} alt='Localização no Google Maps' />
		</a>
	);
};

export default LocationLink;
