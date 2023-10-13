import { ImageBackground, View } from 'react-native';
import React, { FC } from 'react';
import { AuthState } from '@states/AuthState';
import Text from '@components/Atoms/Text';
import { JadwalInterface } from '@interfaces/JadwalInterface';
import NoContent from '@components/Molecules/NoContent';
import { useNavigation } from '@react-navigation/native';
import Button from '@components/Atoms/Button';
import Avatar from '@components/Atoms/Avatar';
import { COLORS } from '@constants/ColorConstant';

const JadwalItem: FC<{ jadwal: JadwalInterface | null }> = (props) => {
	const { user } = AuthState();
	const { jadwal } = props;

	const navigation = useNavigation<any>();

	if (jadwal === null) {
		return <NoContent />;
	}

	return (
		<ImageBackground
			source={require('@images/cardFrame.png')}
			imageStyle={{
				resizeMode: 'cover',
			}}
			style={{
				padding: 30,
				overflow: 'hidden',
				borderRadius: 20,
				elevation: 1,
				backgroundColor: COLORS.white,
				aspectRatio: 18 / 9,
			}}
		>
			<View style={{ flex: 1 }}>
				<View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
					<Avatar variant='text' value={user?.name} size={25} />
					<Text family='extrabold'>{user?.name}</Text>
				</View>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
				<View style={{ flex: 4 }}>
					<Text family={'bold'}>
						{jadwal?.kodemapel} - {jadwal?.shortsesi}
					</Text>
					<Text size={12}>Kelas : {jadwal?.kodekelas}</Text>
				</View>
				<View style={{ flex: 2 }}>
					<Button
						label='Scan QR'
						icon='apps'
						size='sm'
						onPress={() => {
							navigation.push('tambah');
						}}
					/>
				</View>
			</View>
		</ImageBackground>
	);
};

export default JadwalItem;
