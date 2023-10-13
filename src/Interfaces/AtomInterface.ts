import { TextStyle, ViewStyle, Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import React from 'react';
import { COLORS } from '@constants/ColorConstant';
import { FONTS } from '@constants/FontConstant';

export interface TextInterface {
	style?: TextStyle;
	size?: number;
	family?: keyof typeof FONTS;
	color?: keyof typeof COLORS;
}

export interface ButtonInterface {
	size?: 'sm' | 'md';
	label?: string;
	color?: keyof typeof COLORS;
	icon?: React.ComponentProps<typeof Octicons>['name'];
	labelStyle?: TextStyle;
	iconPosition?: 'left' | 'right';
	labelTheme?: 'light' | 'dark';
	onPress?: () => void;
	isLoading?: boolean;
	outlined?: boolean;
}

export interface IconInterface {
	name: React.ComponentProps<typeof Octicons>['name'];
	size?: number;
	color?: keyof typeof COLORS;
	onPress?: () => void;
}

export interface AvatarInterface {
	size?: number;
	variant: 'icon' | 'text' | 'photo';
	value?: string;
	source?: React.ComponentProps<typeof Image>['source'];
	icon?: React.ComponentProps<typeof Octicons>['name'];
}

export interface SkeletonInterface {
	width?: number | string;
	height?: number | string;
	style?: ViewStyle;
}

export interface TagInterface {
	value?: string;
	color?: keyof typeof COLORS;
	onPress?: () => void;
}

export interface AlertInterface {
	visible?: boolean;
	variant?: 'error' | 'warning' | 'success';
	message?: string;
}
