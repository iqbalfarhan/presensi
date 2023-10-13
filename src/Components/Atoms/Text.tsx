import { Text as TextDefault, TextStyle } from 'react-native';
import React, { FC } from 'react';
import { TextInterface } from '@interfaces/AtomInterface';
import { FONTS } from '@constants/FontConstant';
import { COLORS } from '@constants/ColorConstant';

const Text: FC<TextInterface & TextDefault['props']> = (props) => {
	const { children, size, family, color, ...other } = props;
	const defaultTextStyle: TextStyle = {
		fontSize: size ? size : 14,
		color: color ? COLORS[color] : COLORS.dark,
		fontFamily: family ? FONTS[family] : FONTS.medium,
		...(props.style || {}),
	};
	return (
		<TextDefault {...other} style={defaultTextStyle}>
			{children}
		</TextDefault>
	);
};

export default Text;
