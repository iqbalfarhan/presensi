import { View, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import { MenuItemInterface } from '@interfaces/MoleculeInterface';
import Icon from '@components/Atoms/Icon';
import Text from '@components/Atoms/Text';
import { COLORS } from '@constants/ColorConstant';

const MenuItem: FC<MenuItemInterface> = (props) => {
	const { title, value, leftIcon, rightIcon, leftIconAction, rightIconAction } = props;
	const leftIconSize = 23;
	const iconWrapper: ViewStyle = {
		width: leftIconSize,
		height: leftIconSize,
		justifyContent: 'center',
		alignItems: 'center',
	};
	return (
		<View
			style={{
				flexDirection: 'row',
				padding: 20,
				backgroundColor: COLORS.white,
				gap: 20,
				alignItems: 'center',
				borderRadius: 10,
				elevation: 1,
			}}
		>
			{leftIcon && (
				<View style={iconWrapper}>
					<Icon name={leftIcon} onPress={leftIconAction} size={leftIconSize} />
				</View>
			)}
			<View style={{ flex: 1 }}>
				<Text size={11} color='grey' numberOfLines={1} ellipsizeMode='middle'>
					{title}
				</Text>
				<Text family='semibold' size={15}>
					{value}
				</Text>
			</View>
			{rightIcon && (
				<View style={iconWrapper}>
					<Icon name={rightIcon} onPress={rightIconAction} size={16} color={'grey'} />
				</View>
			)}
		</View>
	);
};

export default MenuItem;
