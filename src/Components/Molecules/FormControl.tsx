import { View, ViewStyle, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { FormControlInterface } from '@interfaces/MoleculeInterface';
import Text from '@components/Atoms/Text';
import Icon from '@components/Atoms/Icon';
import { COLORS } from '@constants/ColorConstant';

const FormControl: FC<FormControlInterface> = (props) => {
	const {
		children,
		label,
		leftIcon,
		rightIcon,
		isPassword,
		showPassword,
		invalid,
		onTogglePassword,
	} = props;
	const iconSize = 18;
	const wrapperStyle: ViewStyle = {
		paddingVertical: 10,
		paddingHorizontal: 13,
		borderRadius: 10,
		elevation: 1,
		backgroundColor: COLORS.lightGrey,
		borderWidth: 1,
		borderColor: invalid ? COLORS.danger : '#8F8F8F',
	};
	return (
		<View style={wrapperStyle}>
			{label && <Text>{label}</Text>}
			<View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
				{leftIcon && (
					<View
						style={{
							width: iconSize,
							height: iconSize,
							justifyContent: 'center',
							alignItems: 'center',
							display: 'flex',
						}}
					>
						<Icon name={leftIcon} size={iconSize} />
					</View>
				)}
				<View style={{ flex: 1 }}>{children}</View>
				{rightIcon && (
					<View
						style={{
							width: iconSize,
							height: iconSize,
							justifyContent: 'center',
							alignItems: 'center',
							display: 'flex',
						}}
					>
						<Icon name={rightIcon} size={iconSize} />
					</View>
				)}
				{isPassword && (
					<TouchableOpacity
						onPress={onTogglePassword}
						style={{
							width: iconSize,
							height: iconSize,
							justifyContent: 'center',
							alignItems: 'center',
							display: 'flex',
						}}
					>
						<Icon name={showPassword ? 'eye-closed' : 'eye'} size={iconSize} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default FormControl;
