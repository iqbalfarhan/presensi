import { HistoryInterface, JadwalInterface, SesiInterface } from './JadwalInterface';
import { UserInterface } from './UserInterface';

export interface AuthStateInterface {
	token: string | null;
	logedin: boolean;
	message: string;
	loading: boolean;
	deviceId?: string;
	user?: UserInterface | null;
	setToken: (value: string) => void;
	login: (data: { username: string; password: string }) => Promise<{
		valid: boolean;
		message: string;
		errorType: string;
	}>;
	logout: () => Promise<void>;
	forceLogout: () => void;
	setUser: () => Promise<void>;
	kirimDevice: () => Promise<boolean>;
}

export interface SesiStateInterface {
	sesi: SesiInterface | null;
	setSesi: (token: string) => Promise<void>;
}

export interface JadwalStateInterface {
	loading: boolean;
	jadwal: JadwalInterface | null;
	refreshJadwal: (token: string | null) => Promise<void>;
}

export interface HistoryStateInterface {
	loading: boolean;
	histories: HistoryInterface[];
	fetchHistories: (token: string) => Promise<void>;
}
