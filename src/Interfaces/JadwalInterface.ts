export interface JadwalInterface {
	id: number;
	kode: string;
	thnAkademik: string;
	hari: string;
	kodekelas: string;
	kodemapel: string;
	nip: string;
	ktgJadwal: string;
	kodekegiatan: string | null;
	shortsesi: string;
}

export interface SesiInterface {
	id: number;
	kode: string;
	idhari: string;
	sesi: string;
	jamMulai: string;
	jamSelesai: string;
	durasi: string;
	status: boolean;
}

export interface HistoryInterface {
	id: number;
	tanggal: string | null;
	durasi: string | null;
	masuk: string | null;
	keluar: string | null;
	catatan?: string | null;
}
