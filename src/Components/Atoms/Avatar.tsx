import { View, ViewStyle, Image } from 'react-native';
import React, { FC } from 'react';
import { AvatarInterface } from '@interfaces/AtomInterface';
import Icon from './Icon';
import Text from './Text';
import { getInitials } from '@utils/textUtil';
import { COLORS } from '@constants/ColorConstant';

const Avatar: FC<AvatarInterface> = (props) => {
	const { variant, value, icon, size, source } = props;
	const avatarSize = size || 42;
	const avatarWrapper: ViewStyle = {
		backgroundColor: COLORS.skeleton,
		justifyContent: 'center',
		alignItems: 'center',
		height: avatarSize,
		overflow: 'hidden',
		aspectRatio: 1,
		borderRadius: avatarSize,
	};
	return (
		<View style={avatarWrapper}>
			{variant == 'icon' && icon && <Icon name={icon} size={avatarSize / 2.5} />}
			{variant == 'text' && (
				<Text size={avatarSize / 2.5} family='semibold' color={'black'}>
					{getInitials(value ?? 'Users name')}
				</Text>
			)}
			{variant == 'photo' && (
				<Image
					source={source ?? { uri: 'https://dondivi.com/wp-content/uploads/2020/02/Emma.jpg' }}
					style={{ height: avatarSize, aspectRatio: 1 }}
				/>
			)}
		</View>
	);
};

export default Avatar;
