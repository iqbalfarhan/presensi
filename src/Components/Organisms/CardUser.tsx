import { View } from 'react-native';
import React from 'react';
import Text from '@components/Atoms/Text';
import Avatar from '@components/Atoms/Avatar';
import { AuthState } from '@states/AuthState';

const CardUser = () => {
	const { user } = AuthState();
	return (
		<View
			style={{
				marginBottom: 20,
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				gap: 20,
			}}
		>
			<View style={{ flex: 1 }}>
				<Text size={24}>Selamat datang, {user?.name}</Text>
			</View>
			<View>
				<Avatar variant='text' value={user?.name as string} size={60} icon='person' />
			</View>
		</View>
	);
};

export default CardUser;
