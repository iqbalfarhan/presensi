import { View, ViewStyle } from 'react-native';
import React, { ComponentProps, FC } from 'react';
import { AlertInterface } from '@interfaces/AtomInterface';
import Text from './Text';
import { COLORS } from '@constants/ColorConstant';
import Icon from './Icon';
import { Octicons } from '@expo/vector-icons';

const Alert: FC<AlertInterface> = (props) => {
	const { variant, message, visible } = props;
	let variantColor: keyof typeof COLORS = 'primary';
	let textColor: keyof typeof COLORS = 'black';
	let icon: ComponentProps<typeof Octicons>['name'] = 'alert';

	if (!visible) {
		return <></>;
	}

	if (variant == 'error') {
		variantColor = 'danger';
		textColor = 'black';
		icon = 'x-circle';
	} else if (variant == 'success') {
		variantColor = 'success';
		textColor = 'black';
		icon = 'check';
	} else if (variant == 'warning') {
		variantColor = 'warning';
		textColor = 'black';
		icon = 'alert';
	}

	const wrapperStyle: ViewStyle = {
		padding: 15,
		borderRadius: 10,
		backgroundColor: COLORS.white,
		flexDirection: 'row',
		gap: 15,
		elevation: 1,
		borderLeftColor: COLORS[variantColor],
		alignItems: 'flex-start',
		borderLeftWidth: 4,
	};
	return (
		<View style={wrapperStyle}>
			<Icon name={icon} size={18} color={variantColor} />
			<View style={{ flex: 1 }}>
				<Text color={textColor} size={12}>
					{message ?? 'Default alert message add messge props to edit the default message'}
				</Text>
			</View>
		</View>
	);
};

export default Alert;
