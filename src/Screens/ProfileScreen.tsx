import React from 'react';
import { View } from 'react-native';
import { AuthState } from '@states/AuthState';
import Text from '@components/Atoms/Text';
import Container from '@components/Molecules/Container';
import Avatar from '@components/Atoms/Avatar';
import MenuItem from '@components/Organisms/MenuItem';
import Button from '@components/Atoms/Button';

const ProfileScreen = () => {
	const { user, setUser } = AuthState();
	return (
		<Container containerStyle={{ flex: 1 }} onRefresh={setUser}>
			<View
				style={{
					paddingVertical: 20,
					justifyContent: 'center',
					alignItems: 'center',
					gap: 20,
				}}
			>
				<Avatar
					variant='text'
					value={user?.name ?? 'user name'}
					size={100}
					icon='person'
					source={require('@images/defaultimage.png')}
				/>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<Text family='bold' size={18}>
						{user?.name}
					</Text>
					<Text>{user?.nis}</Text>
				</View>
			</View>
			<View style={{ gap: 10 }}>
				<MenuItem title='Asal Sekolah' value={user?.sekolah as string} />
				<MenuItem title='E-mail' value={user?.email as string} />
			</View>
			<View style={{ marginTop: 30 }}>
				<Button label='Log out' icon={'lock'} iconPosition='right' color={'danger'} outlined />
			</View>
		</Container>
	);
};

export default ProfileScreen;
