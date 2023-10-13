import { API_URL } from '@constants/ApiRequest';
import { AuthStateInterface } from '@interfaces/StatesInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ToastAndroid } from 'react-native';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import * as Application from 'expo-application';

export const AuthState = create(
	persist<AuthStateInterface>(
		(set, get) => ({
			message: '',
			logedin: false,
			loading: false,
			token: null,
			setToken: (token) => {
				set({ token });
			},
			setUser: async () => {
				await axios
					.get(API_URL + '/user', { headers: { Authorization: `Bearer ${get().token}` } })
					.then(({ data }) => {
						console.log(data);
					});
			},
			login: async (data) => {
				console.log(data);
				set({
					logedin: false,
					loading: true,
					message: '',
					user: null,
				});

				const valid = false;
				const message = 'masalah saat proses login';
				const errorType = '';

				set({
					logedin: true,
					user: {
						id: 1,
						name: 'iqbal farhan syuhada',
						username: 'admin',
						email: 'iqbalfarhan1996@gmail.com',
						nis: '196509',
						sekolah: 'STMIK BORNEO INTERNASIONAL',
					},
				});

				// await axios
				// 	.post(API_URL + '/login', data)
				// 	.then(({ data }) => {
				// 		const user = data.data;

				// 		set({ token: data.token });

				// 		if (user.deviceid != Application.androidId) {
				// 			valid = false;
				// 			message = 'device tidak valid';
				// 			errorType = 'deviceid';
				// 		} else if (user.statusdevice != '1') {
				// 			valid = false;
				// 			message = 'akun anda belum dijinkan untuk melalkukan login dengan device ini';
				// 			errorType = 'statusdevice';
				// 		} else {
				// 			set({
				// 				deviceId: user.deviceid,
				// 				logedin: true,
				// 				user: {
				// 					id: user.id,
				// 					name: user.name,
				// 					username: user.username,
				// 					email: user.email,
				// 					level: user.level,
				// 					status: user.status,
				// 					deviceid: user.deviceid,
				// 					statusdevice: user.statusdevice,
				// 				},
				// 			});

				// 			valid = true;
				// 			message = 'berhasil login';
				// 			errorType = '';
				// 		}
				// 	})
				// 	.catch((err) => {
				// 		valid = false;
				// 		message = err.message;
				// 		errorType = 'axios';
				// 	})
				// 	.finally(() => {
				// 		set({ loading: false, message: message });
				// 	});

				ToastAndroid.show(get().message, ToastAndroid.SHORT);

				const response = {
					valid: valid,
					message: message,
					errorType: errorType,
				};

				return response;
			},

			logout: async () => {
				set({ loading: true });
				const headers = {
					Authorization: `Bearer ${get().token}`,
				};
				await axios
					.post(`${API_URL}/logout`, {}, { headers })
					.then(({ data }) => {
						set({ token: '', logedin: undefined });
						ToastAndroid.show(data.message, ToastAndroid.SHORT);
					})
					.catch((err) => {
						ToastAndroid.show(err.message, ToastAndroid.SHORT);
						get().forceLogout();
					})
					.finally(() => {
						set({ loading: false });
					});
			},

			forceLogout: () => {
				set({ token: '', user: undefined, deviceId: undefined, logedin: false });
				ToastAndroid.show('Sesi masuk dihancurkan', ToastAndroid.SHORT);
			},

			kirimDevice: async () => {
				set({ loading: true });
				let success = false;
				const device = Application.androidId;
				const headers = {
					Authorization: `Bearer ${get().token}`,
				};

				await axios
					.post(API_URL + '/kirimdevice', { device }, { headers })
					.then(({ data }) => {
						ToastAndroid.show(data.message, ToastAndroid.SHORT);
						success = true;
					})
					.catch((err) => {
						ToastAndroid.show(err.message, ToastAndroid.SHORT);
						success = false;
					})
					.finally(() => {
						set({ loading: false });
					});

				return success;
			},
		}),
		{
			name: 'auth',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
