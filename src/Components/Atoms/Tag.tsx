import { TouchableOpacity, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import { TagInterface } from '@interfaces/AtomInterface';
import Text from './Text';
import { COLORS } from '@constants/ColorConstant';

const Tag: FC<TagInterface> = (props) => {
	const { value, color, onPress } = props;
	const tagWrapper: ViewStyle = {
		paddingVertical: 4,
		paddingHorizontal: 10,
		borderRadius: 10,
		backgroundColor: color ? COLORS[color] : COLORS.primary,
	};
	return (
		<TouchableOpacity style={tagWrapper} onPress={onPress}>
			<Text size={12} color={'white'} family={'semibold'}>
				{value ?? 'taglabel'}
			</Text>
		</TouchableOpacity>
	);
};

export default Tag;
