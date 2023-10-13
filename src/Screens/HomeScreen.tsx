import React, { useState } from 'react';
import Container from '@components/Molecules/Container';
import CardUser from '@components/Organisms/CardUser';
import CardAbsensi from '@components/Organisms/CardAbsensi';

const HomeScreen = () => {
	const [tipe, setTipe] = useState<'masuk' | 'keluar'>('masuk');
	return (
		<Container containerStyle={{ flex: 1, gap: 20 }} onRefresh={async () => {}}>
			<CardUser />
			<CardAbsensi
				tipe={tipe}
				onPress={() => {
					tipe == 'masuk' ? setTipe('keluar') : setTipe('masuk');
				}}
			/>
		</Container>
	);
};

export default HomeScreen;
