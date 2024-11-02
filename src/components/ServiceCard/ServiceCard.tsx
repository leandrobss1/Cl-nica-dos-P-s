import React from 'react';
import * as S from './ServiceCardStyles';

type ServiceCardProps = {
	image: string;
	title: string;
	paragraph: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
	image,
	title,
	paragraph,
}) => {
	return (
		<S.Card>
			<S.CardImage src={image} alt={title} />
			<S.CardContent>
				<S.CardTitle>{title}</S.CardTitle>
				<S.CardParagraph>{paragraph}</S.CardParagraph>
			</S.CardContent>
		</S.Card>
	);
};

export default ServiceCard;
