import { View } from 'react-native';
import React, { FC } from 'react';
import { HistoryInterface } from '@interfaces/JadwalInterface';
import Text from '@components/Atoms/Text';

interface cardItemInterface {
	data: HistoryInterface;
}

const CardItem: FC<cardItemInterface> = (props) => {
	const { data } = props;
	return (
		<View style={{ backgroundColor: '#eee', padding: 20, borderRadius: 10 }}>
			<Text color='grey'>{data.tanggal}</Text>
			<Text family={'semibold'} size={18}>
				{data.durasi}
			</Text>
			<View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
				<Text family={'semibold'}>{data.masuk}</Text>
				<Text>-</Text>
				<Text family={'semibold'}>{data.keluar}</Text>
			</View>
		</View>
	);
};

export default CardItem;
