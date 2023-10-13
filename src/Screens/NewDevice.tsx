import { View } from 'react-native';
import React from 'react';
import Text from '@components/Atoms/Text';
import Container from '@components/Molecules/Container';
import Button from '@components/Atoms/Button';
import { AuthState } from '@states/AuthState';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthNavigationParamList } from '@interfaces/NavigationInterface';

type Props = NativeStackScreenProps<AuthNavigationParamList>;

const NewDevice = ({ navigation }: Props) => {
	const { loading, kirimDevice } = AuthState();
	return (
		<Container containerStyle={{ flex: 1, justifyContent: 'center', padding: 35, gap: 40 }}>
			<View style={{ gap: 10 }}>
				<Text size={50} family='extrabold'>
					Apakah anda menggunakan perangkat baru?
				</Text>
				<Text>
					Perangkat yang Anda gunakan saat ini terdeteksi berbeda dengan perangkat yang Anda gunakan
					sebelumnya saat melakukan login.
				</Text>
			</View>
			<Button
				label='Request perubahan perangkat'
				icon='rocket'
				isLoading={loading}
				onPress={() => {
					kirimDevice().then((res) => {
						if (res) {
							navigation.navigate('login');
						}
					});
				}}
			/>
		</Container>
	);
};

export default NewDevice;
