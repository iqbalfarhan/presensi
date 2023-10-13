import { ToastAndroid } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export const copyToClipboard = async (text: string) => {
	await Clipboard.setStringAsync(text).then(() =>
		ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT),
	);
};
