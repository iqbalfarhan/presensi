import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/LoginScreen';
import NewDevice from '@screens/NewDevice';
import { AuthNavigationParamList } from '@interfaces/NavigationInterface';

const Stack = createNativeStackNavigator<AuthNavigationParamList>();

const AuthNavigation = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='login' component={LoginScreen} />
			<Stack.Screen name='newdevice' component={NewDevice} />
		</Stack.Navigator>
	);
};

export default AuthNavigation;
