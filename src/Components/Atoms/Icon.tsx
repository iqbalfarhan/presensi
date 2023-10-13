import React, { FC } from 'react';
import { IconInterface } from '@interfaces/AtomInterface';
import { Octicons } from '@expo/vector-icons';
import { COLORS } from '@constants/ColorConstant';

const Icon: FC<IconInterface> = (props) => {
	const { name, size, color, onPress } = props;
	return (
		<Octicons
			name={name}
			size={size ?? 24}
			color={color ? COLORS[color] : COLORS.black}
			onPress={onPress}
		/>
	);
};

export default Icon;
