import { API_URL } from '@constants/ApiRequest';
import { HistoryStateInterface } from '@interfaces/StatesInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ToastAndroid } from 'react-native';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const HistoryState = create(
	persist<HistoryStateInterface>(
		(set) => ({
			loading: false,
			histories: [],
			fetchHistories: async (token) => {
				set({ loading: true });
				await axios
					.get(API_URL + '/historyatt', {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					})
					.then(({ data }) => {
						set({
							histories: data.message ?? [],
						});
					})
					.catch((err) => {
						ToastAndroid.show(err.message, ToastAndroid.SHORT);
					})
					.finally(() => {
						set({ loading: false });
					});
			},
		}),
		{
			name: 'history',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);

export default HistoryState;
