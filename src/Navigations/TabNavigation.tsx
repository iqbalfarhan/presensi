import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import AbsenScreen from '@screens/AbsenScreen';
import ProfileScreen from '@screens/ProfileScreen';
import { COLORS } from '@constants/ColorConstant';
import { Octicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: COLORS.primary,
				headerTitleStyle: {
					fontFamily: 'SemiBold',
					fontSize: 16,
				},
				tabBarIconStyle: { marginTop: 7 },
				tabBarLabelStyle: { fontFamily: 'SemiBold', fontSize: 12 },
				headerStyle: {
					height: Constants.statusBarHeight,
				},
				tabBarStyle: {
					height: 60,
				},
			}}
		>
			<Tab.Screen
				name='home'
				component={HomeScreen}
				options={{
					title: '',
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => <Octicons name='home' size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name='absen'
				component={AbsenScreen}
				options={{
					title: '',
					tabBarLabel: 'Absensi',
					tabBarIcon: ({ color }) => <Octicons name={'list-unordered'} size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name='profile'
				component={ProfileScreen}
				options={{
					title: '',
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color }) => <Octicons name='person' size={24} color={color} />,
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigation;
