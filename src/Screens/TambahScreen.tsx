import { ToastAndroid, View } from 'react-native';
import React, { useState } from 'react';
import Container from '@components/Molecules/Container';
import Text from '@components/Atoms/Text';
import Button from '@components/Atoms/Button';
import { Camera, CameraType } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import { API_URL } from '@constants/ApiRequest';
import { AuthState } from '@states/AuthState';
import { COLORS } from '@constants/ColorConstant';
import { TW_COLORS } from '@constants/TailwindColors';

import { MainNavigationParamList } from '@interfaces/NavigationInterface';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<MainNavigationParamList>;

const TambahScreen = ({ navigation }: Props) => {
	const { token } = AuthState();
	const [type, setType] = useState(CameraType.back);
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [scanned, setScanned] = useState<boolean>(false);
	const [done, setDone] = useState<boolean>(false);

	const handleBarCodeScanned = async ({ data }: { data: string }) => {
		setScanned(true);
		setDone(true);
		await axios
			.post(
				API_URL + '/absen/scan',
				{ qr: data },
				{
					headers: {
						Authorization: 'Bearer ' + token,
					},
				},
			)
			.then(({ data }) => {
				if (data.message.pesan) {
					ToastAndroid.show(data.message.pesan, ToastAndroid.SHORT);
				} else {
					ToastAndroid.show(data.message, ToastAndroid.SHORT);
				}
				navigation.goBack();
			})
			.catch(({ message }) => {
				ToastAndroid.show(message, ToastAndroid.SHORT);
			})
			.finally(() => {
				setScanned(false);
				setDone(false);
			});
	};

	if (!permission) {
		return (
			<Container containerStyle={{ flex: 1, gap: 20 }}>
				<Text>
					Anda tidak memberikan aplikasi ini untuk mengakses kamera. ubah perijinan secara manual di
					pengaturan aplikasi.
				</Text>
			</Container>
		);
	}

	if (!permission.granted) {
		return (
			<Container containerStyle={{ flex: 1, gap: 20 }}>
				<Text color='skeleton'>
					Anda perlu memberikan ijin kepada aplikasi untuk mengakses kamera. kamera digunakan untuk
					scan QR Code absensi.
				</Text>
				<Button onPress={requestPermission} label='Berikan ijin kamera' />
			</Container>
		);
	}

	const toggleCameraType = () => {
		setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
	};

	return (
		<Container containerStyle={{ gap: 30, flex: 1, padding: 40 }}>
			<Text size={23} family='bold' style={{ textAlign: 'center' }}>
				Scan QR Code
			</Text>
			<Text style={{ textAlign: 'center' }} size={11} color={'dark'}>
				Arahkan kamera ke QR Code untuk melakukan pemindaian. Pastikan QR Code berada dalam bidang
				pandang kamera Anda. Aplikasi akan memvalidasi perangkat dan akun Anda.
			</Text>
			<View style={{ overflow: 'hidden', borderRadius: 35 }}>
				{done ? (
					<View
						style={{
							flex: 1,
							width: '100%',
							aspectRatio: 1,
							backgroundColor: TW_COLORS.Gray[200],
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<FontAwesome name={'qrcode'} color={COLORS.skeleton} size={270} />
					</View>
				) : (
					<Camera
						ratio={'1:1'}
						style={{
							aspectRatio: 1,
						}}
						type={type}
						barCodeScannerSettings={{
							barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
						}}
						onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
					>
						<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, opacity: 0.4 }}>
							{/* <FontAwesome name={'qrcode'} color='white' size={270} /> */}
						</View>
					</Camera>
				)}
			</View>

			<View style={{ gap: 10 }}>
				<Button
					label='Putar kamera'
					icon={'arrow-switch'}
					color={'success'}
					labelTheme='light'
					onPress={toggleCameraType}
				/>
				<Button
					label='Batal'
					icon={'x'}
					color={'accent'}
					labelTheme='light'
					onPress={() => {
						navigation.goBack();
					}}
				/>
			</View>
		</Container>
	);
};

export default TambahScreen;
