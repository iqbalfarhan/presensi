import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import TambahScreen from '@screens/TambahScreen';
import { MainNavigationParamList } from '@interfaces/NavigationInterface';

const Stack = createNativeStackNavigator<MainNavigationParamList>();

const MainNavigation = () => {
	return (
		<Stack.Navigator screenOptions={{ headerTitleStyle: { fontFamily: 'SemiBold', fontSize: 16 } }}>
			<Stack.Screen name='tab' component={TabNavigation} options={{ headerShown: false }} />
			<Stack.Screen name='tambah' component={TambahScreen} options={{ title: 'Tambah absensi' }} />
			<Stack.Screen
				name='absenDetail'
				component={TambahScreen}
				options={{ title: 'Detail absensi' }}
			/>
		</Stack.Navigator>
	);
};

export default MainNavigation;
