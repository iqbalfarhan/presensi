import { ToastAndroid } from 'react-native';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { JadwalStateInterface } from '@interfaces/StatesInterface';
import axios from 'axios';
import { API_URL } from '@constants/ApiRequest';

const JadwalState = create(
	persist<JadwalStateInterface>(
		(set) => ({
			loading: false,
			jadwal: null,
			refreshJadwal: async (token) => {
				set({ loading: true });
				await axios
					.get(API_URL + '/myjadwal', { headers: { Authorization: 'Bearer ' + token } })
					.then(({ data }) => {
						if (data.message == null) {
							set({ jadwal: null });
						} else {
							set({
								jadwal: {
									id: data.message.id,
									kode: data.message.kode,
									thnAkademik: data.message.thn_akademik,
									hari: data.message.hari,
									kodekelas: data.message.kodekelas,
									kodemapel: data.message.kodemapel,
									nip: data.message.nip,
									ktgJadwal: data.message.ktg_jadwal,
									kodekegiatan: data.message.kodekegiatan,
									shortsesi: data.message.shortsesi,
								},
							});
						}

						// ToastAndroid.show('berhasil memperbarui jadwal', ToastAndroid.SHORT);
					})
					.catch(({ message }) => {
						ToastAndroid.show(message, ToastAndroid.SHORT);
						set({ jadwal: null });
					})
					.finally(() => {
						set({ loading: false });
					});
			},
		}),
		{
			name: 'sesi',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);

export default JadwalState;
