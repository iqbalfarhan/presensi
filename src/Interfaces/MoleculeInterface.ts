import { COLORS } from '@constants/ColorConstant';
import { Octicons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { BottomSheetProps } from 'react-native-btr';

export interface ContainerInterface {
	children: ReactNode;
	scrollViewStyle?: ViewStyle;
	containerStyle?: ViewStyle;
	bgColor?: keyof typeof COLORS;
	onRefresh?: () => Promise<void>;
}

export interface FormControlInterface {
	children?: JSX.Element;
	label?: string;
	labelStyle?: TextStyle;
	leftIcon?: React.ComponentProps<typeof Octicons>['name'];
	rightIcon?: React.ComponentProps<typeof Octicons>['name'];
	invalid?: boolean;
	message?: string;

	isPassword?: boolean;
	showPassword?: boolean;
	onTogglePassword?: () => void;
}

export interface MenuItemInterface {
	title: string;
	value: string;
	leftIcon?: React.ComponentProps<typeof Octicons>['name'];
	rightIcon?: React.ComponentProps<typeof Octicons>['name'];
	leftIconAction?: () => void;
	rightIconAction?: () => void;
}

export interface SheetInterface extends BottomSheetProps {
	children?: ReactNode;
	title?: string;
}
