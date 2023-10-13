import { ViewStyle, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { ButtonInterface } from '@interfaces/AtomInterface';
import { COLORS } from '@constants/ColorConstant';
import Icon from './Icon';

const CircleButton: FC<ButtonInterface> = (props) => {
	const { icon, labelTheme, color, onPress } = props;
	const wrapperStyle: ViewStyle = {
		backgroundColor: color ? COLORS[color] : COLORS.primary,
		height: 46,
		width: 46,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
		gap: 10,
	};
	return (
		<TouchableOpacity style={wrapperStyle} onPress={onPress}>
			{icon && <Icon name={icon} size={20} color={labelTheme == 'dark' ? 'black' : 'white'} />}
		</TouchableOpacity>
	);
};

export default CircleButton;
