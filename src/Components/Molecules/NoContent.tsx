import { View } from 'react-native';
import React, { FC } from 'react';
import Text from '@components/Atoms/Text';
import { COLORS } from '@constants/ColorConstant';

const NoContent: FC<{ message?: string }> = ({ message }) => {
	return (
		<View
			style={{
				flex: 1,
				width: '100%',
				paddingVertical: 40,
				borderColor: COLORS.skeleton,
				borderWidth: 3,
				borderStyle: 'dashed',
				borderRadius: 20,
			}}
		>
			<Text color={'grey'} size={12} style={{ textAlign: 'center' }}>
				{message ? message : 'Kontent tidak tersedia'}
			</Text>
		</View>
	);
};

export default NoContent;
