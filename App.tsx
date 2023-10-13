import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AuthNavigation from '@navigations/AuthNavigation';
import MainNavigation from '@navigations/MainNavigation';
import { AuthState } from '@states/AuthState';
import { useFonts } from 'expo-font';

export default function App() {
	const { logedin } = AuthState();

	const [fontsLoaded] = useFonts({
		Black: require('@fonts/Montserrat-Black.ttf'),
		ExtraBold: require('@fonts/Montserrat-ExtraBold.ttf'),
		Bold: require('@fonts/Montserrat-Bold.ttf'),
		SemiBold: require('@fonts/Montserrat-SemiBold.ttf'),
		Medium: require('@fonts/Montserrat-Medium.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<StatusBar style='auto' />
			<NavigationContainer>{logedin ? <MainNavigation /> : <AuthNavigation />}</NavigationContainer>
		</>
	);
}
