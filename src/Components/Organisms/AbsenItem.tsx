import { TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import Text from '@components/Atoms/Text';
import { COLORS } from '@constants/ColorConstant';
import { HistoryInterface } from '@interfaces/JadwalInterface';
import Sheet from '@components/Molecules/Sheet';
import CardItem from './CardItem';
import FormControl from '@components/Molecules/FormControl';
import Input from '@components/Atoms/Input';
import Button from '@components/Atoms/Button';

const AbsenItem: FC<{ data: HistoryInterface }> = (props) => {
	const { data } = props;
	const [show, setShow] = useState<boolean>(false);

	return (
		<>
			<TouchableOpacity
				onPress={() => setShow(true)}
				style={{
					padding: 14,
					borderRadius: 10,
					flexDirection: 'row',
					gap: 18,
					backgroundColor: COLORS.white,
					borderWidth: 1,
					borderColor: COLORS.grey,
				}}
			>
				<View style={{ flex: 1, flexDirection: 'column', gap: 10 }}>
					<View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-between' }}>
						<View>
							<Text size={10}>{data.tanggal}</Text>
							<Text family={'semibold'} size={14}>
								{data.durasi}
							</Text>
						</View>
						<View>
							<Text size={10}>In & Out</Text>
							<Text family={'semibold'} size={14}>
								{data.masuk} - {data.keluar}
							</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
			<Sheet visible={show} onBackdropPress={() => setShow(false)} title='Detail absensi'>
				<View style={{ gap: 20, padding: 10 }}>
					<CardItem data={data} />
					<FormControl label='Note (optional)'>
						<Input placeholder='Tulis catatan disini' />
					</FormControl>
					<Button label='Simpan' icon='check' iconPosition='right' />
				</View>
			</Sheet>
		</>
	);
};

export default AbsenItem;
