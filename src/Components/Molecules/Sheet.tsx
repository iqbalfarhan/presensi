import React, { FC } from 'react';
import { View } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import Container from './Container';
import { SheetInterface } from '@interfaces/MoleculeInterface';
import Text from '@components/Atoms/Text';

const Sheet: FC<SheetInterface> = (props) => {
	const { children, title, visible, onBackButtonPress, onBackdropPress } = props;
	return (
		<BottomSheet
			visible={visible}
			onBackButtonPress={onBackButtonPress}
			onBackdropPress={onBackdropPress}
		>
			<View>
				<Container containerStyle={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, gap: 20 }}>
					{title && (
						<Text style={{ textAlign: 'center' }} family='bold'>
							{title}
						</Text>
					)}
					{children}
				</Container>
			</View>
		</BottomSheet>
	);
};

export default Sheet;
