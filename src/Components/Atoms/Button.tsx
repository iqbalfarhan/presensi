import { TextStyle, TouchableOpacity, ViewStyle, ActivityIndicator } from 'react-native';
import React, { FC } from 'react';
import { ButtonInterface } from '@interfaces/AtomInterface';
import Text from './Text';
import Icon from './Icon';
import { COLORS } from '@constants/ColorConstant';

const Button: FC<ButtonInterface> = (props) => {
	const {
		label,
		labelStyle,
		icon,
		iconPosition,
		labelTheme,
		color,
		onPress,
		isLoading,
		size,
		outlined,
	} = props;
	const wrapperStyle: ViewStyle = {
		backgroundColor: outlined ? 'transparent' : color ? COLORS[color] : COLORS.primary,
		height: size == 'sm' ? 35 : 50,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		borderWidth: 2,
		borderColor: color ? COLORS[color] : COLORS.primary,
		flexDirection: iconPosition == 'right' ? 'row-reverse' : 'row',
		gap: 10,
	};
	const defaultLabelStyle: TextStyle = {
		color: outlined
			? color
				? COLORS[color]
				: COLORS.primary
			: labelTheme == 'dark'
			? 'black'
			: 'white',
		...labelStyle,
	};
	return (
		<TouchableOpacity style={wrapperStyle} onPress={onPress}>
			{isLoading ? (
				<>
					<ActivityIndicator color={labelTheme == 'dark' ? 'black' : 'white'} size={'small'} />
					<Text style={defaultLabelStyle} family='semibold'>
						Loading
					</Text>
				</>
			) : (
				<>
					{icon && (
						<Icon
							name={icon}
							size={16}
							color={
								outlined ? (color ? color : 'primary') : labelTheme == 'dark' ? 'black' : 'white'
							}
						/>
					)}
					<Text style={defaultLabelStyle} family='bold' size={size == 'sm' ? 14 : 16}>
						{label}
					</Text>
				</>
			)}
		</TouchableOpacity>
	);
};

export default Button;
