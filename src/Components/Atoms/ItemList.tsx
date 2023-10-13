import { View, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import Text from './Text';

const ItemList: FC<{ title: string; value: string; wrapperStyle?: ViewStyle; flex?: number }> = (
	props,
) => {
	const { title, value, wrapperStyle, flex } = props;
	const defaultStyle: ViewStyle = {
		flex: flex ? flex : 1,
		...wrapperStyle,
	};
	return (
		<View style={defaultStyle}>
			<Text size={12}>{title}</Text>
			<Text size={13} family='bold'>
				{value}
			</Text>
		</View>
	);
};

export default ItemList;
