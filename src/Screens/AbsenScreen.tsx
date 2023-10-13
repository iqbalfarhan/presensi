import { View } from 'react-native';
import React, { FC, useEffect } from 'react';
import Container from '@components/Molecules/Container';
import AbsenItem from '@components/Organisms/AbsenItem';
import HistoryState from '@states/HistoryState';
import NoContent from '@components/Molecules/NoContent';
import { AuthState } from '@states/AuthState';
import Text from '@components/Atoms/Text';

const AbsenScreen: FC = () => {
	const { token } = AuthState();
	const { loading, fetchHistories } = HistoryState();

	const histories = [
		{
			id: 1,
			tanggal: 'Juli 03, 2023',
			durasi: '8 Jam & 48 menit',
			masuk: '08:42',
			keluar: '17:12',
		},
		{
			id: 2,
			tanggal: 'Juli 03, 2023',
			durasi: '8 Jam & 48 menit',
			masuk: '08:42',
			keluar: '17:12',
		},
		{
			id: 2,
			tanggal: 'Juli 03, 2023',
			durasi: '8 Jam & 48 menit',
			masuk: '08:42',
			keluar: '17:12',
		},
		{
			id: 2,
			tanggal: 'Juli 03, 2023',
			durasi: '8 Jam & 48 menit',
			masuk: '08:42',
			keluar: '17:12',
		},
		{
			id: 2,
			tanggal: 'Juli 03, 2023',
			durasi: '8 Jam & 48 menit',
			masuk: '08:42',
			keluar: '17:12',
		},
		{
			id: 2,
			tanggal: 'Juli 03, 2023',
			durasi: '8 Jam & 48 menit',
			masuk: '08:42',
			keluar: '17:12',
		},
	];

	useEffect(() => {
		fetchHistories(token as string);
	}, []);

	return (
		<Container
			containerStyle={{ gap: 20, flex: 1 }}
			onRefresh={async () => {
				await fetchHistories(token as string);
			}}
		>
			<View style={{ gap: 24 }}>
				<Text size={24} family={'semibold'}>
					Riwayat absensi
				</Text>
				{loading ? (
					<NoContent message='loading...' />
				) : histories && histories.length != 0 ? (
					histories.map((item, index) => {
						return <AbsenItem data={item} key={index} />;
					})
				) : (
					<NoContent />
				)}
			</View>
		</Container>
	);
};

export default AbsenScreen;
