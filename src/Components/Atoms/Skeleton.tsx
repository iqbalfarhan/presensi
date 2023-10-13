import { ActivityIndicator, View, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import { SkeletonInterface } from '@interfaces/AtomInterface';
import { COLORS } from '@constants/ColorConstant';

const Skeleton: FC<SkeletonInterface> = (props) => {
	const { width, height, style } = props;
	const skeletonStyle: ViewStyle = {
		width: width || '100%',
		height: height || 18,
		borderRadius: 10,
		backgroundColor: COLORS.skeleton,
		marginBottom: 4,
		justifyContent: 'center',
		alignItems: 'center',
		...(style || {}),
	};
	return (
		<View style={skeletonStyle}>
			<ActivityIndicator size={'small'} color={'white'} />
		</View>
	);
};

export default Skeleton;
