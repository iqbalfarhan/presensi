import { View } from 'react-native';
import React, { FC } from 'react';
import Text from '@components/Atoms/Text';
import { COLORS } from '@constants/ColorConstant';
import Button from '@components/Atoms/Button';
import Icon from '@components/Atoms/Icon';

interface cardabseninterface {
	tipe: 'masuk' | 'keluar';
	onPress: () => void;
}

const CardAbsensi: FC<cardabseninterface> = (props) => {
	const { tipe, onPress } = props;
	let message = 'walah, terlambat';

	if (tipe == 'keluar') {
		message = 'Terima kasih untuk hari ini';
	}

	return (
		<View
			style={{
				paddingVertical: 28,
				paddingHorizontal: 18,
				backgroundColor: COLORS.light,
				borderRadius: 10,
				justifyContent: 'center',
				alignItems: 'center',
				gap: 24,
			}}
		>
			<Text style={{ textAlign: 'center' }} color='primary' size={12}>
				Rabu, 5 juli 2023
			</Text>
			<View style={{ gap: 12 }}>
				<Text style={{ textAlign: 'center' }} size={57} family='semibold'>
					08:24
				</Text>
				<Text style={{ textAlign: 'center' }} color='primary' size={18}>
					{message}
				</Text>
			</View>
			{tipe == 'masuk' ? (
				<Button label='Masuk' onPress={onPress} />
			) : (
				<Button label='Keluar' color={'warning'} onPress={onPress} />
			)}

			<View
				style={{
					width: 50,
					backgroundColor: COLORS.white,
					aspectRatio: 1,
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: 25,
					position: 'absolute',
					top: 30,
					right: 30,
				}}
			>
				<Icon name={'sun'} color='warning' />
			</View>
		</View>
	);
};

export default CardAbsensi;
