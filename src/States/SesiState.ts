import axios from 'axios';
import { ToastAndroid } from 'react-native';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SesiStateInterface } from '@interfaces/StatesInterface';
import { API_URL } from '@constants/ApiRequest';

const SesiState = create(
	persist<SesiStateInterface>(
		(set) => ({
			sesi: null,
			setSesi: async (token) => {
				const headers = {
					Authorization: `Bearer ${token}`,
				};
				await axios
					.get(`${API_URL}/sesi`, { headers })
					.then(({ data }) => {
						const sesi = {
							id: data.message.id,
							kode: data.message.kode,
							idhari: data.message.idhari,
							sesi: data.message.sesi,
							jamMulai: data.message.jam_mulai,
							jamSelesai: data.message.jam_selesai,
							durasi: data.message.durasi,
							status: data.message.status == '1' ? true : false,
						};
						set({ sesi });
						ToastAndroid.show('Berhasil mengambil data', ToastAndroid.SHORT);
					})
					.catch((err) => ToastAndroid.show(err.message, ToastAndroid.SHORT));
			},
		}),
		{
			name: 'sesi',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);

export default SesiState;
