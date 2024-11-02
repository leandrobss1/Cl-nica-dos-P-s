import React from 'react';
import * as S from './styles';

type WhatsAppButtonProps = {
	phoneNumber: string;
	message: string;
};

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
	phoneNumber,
	message,
}) => {
	const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
		message
	)}`;

	return (
		<S.Button href={whatsappLink} target='_blank' rel='noopener noreferrer'>
			<i className='fab fa-whatsapp'></i>
		</S.Button>
	);
};

export default WhatsAppButton;
