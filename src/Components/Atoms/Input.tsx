import { TextInput, TextStyle, TextInputProps } from 'react-native';
import React, { FC } from 'react';
import { FONTS } from '@constants/FontConstant';

const Input: FC<TextInputProps> = (props) => {
	const wrapperStyle: TextStyle = {
		fontFamily: FONTS.semibold,
	};

	return <TextInput style={wrapperStyle} {...props} />;
};

export default Input;
