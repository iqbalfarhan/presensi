import { View, ScrollView, ViewStyle, RefreshControl } from 'react-native';
import React, { FC } from 'react';
import { ContainerInterface } from '@interfaces/MoleculeInterface';
import { COLORS } from '@constants/ColorConstant';

const Container: FC<ContainerInterface> = (props) => {
	const { children, bgColor, containerStyle, scrollViewStyle, onRefresh } = props;

	const [refreshing] = React.useState(false);
	const defaultScrollViewStyle: ViewStyle = {
		flexGrow: 1,
		...scrollViewStyle,
	};

	const defaultContainerStyle: ViewStyle = {
		padding: 20,
		backgroundColor: bgColor ? COLORS[bgColor] : COLORS.white,
		...containerStyle,
	};
	return (
		<ScrollView
			contentContainerStyle={defaultScrollViewStyle}
			showsVerticalScrollIndicator={false}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={COLORS.primary} />
			}
		>
			<View style={defaultContainerStyle}>{children}</View>
		</ScrollView>
	);
};

export default Container;
