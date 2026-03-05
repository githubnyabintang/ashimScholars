import React from "react";

export default function JadwalBadalPage() {
    const jadwalList = [
        {
            id: 1,
            namaKegiatan: "JAM WAJIB PERTAMA",
            jamKegiatan: "05:15 - 07:35",
            tugas: "Fashohah, Tahsin, Binnazhor, Ziyadah, Muraja'ah"
        },
        {
            id: 2,
            namaKegiatan: "JAM WAJIB KEDUA",
            jamKegiatan: "08:30 - 12:00",
            tugas: "Fashohah, Tahsin, Binnazhor, Ziyadah, Muraja'ah"
        },
        {
            id: 3,
            namaKegiatan: "JAM WAJIB KETIGA",
            jamKegiatan: "15:30 - 17:30",
            tugas: "Fashohah, Tahsin, Binnazhor, Ziyadah, Muraja'ah"
        },
        {
            id: 4,
            namaKegiatan: "JAM WAJIB KEEMPAT",
            jamKegiatan: "00:00 - 00:00",
            tugas: "Fashohah, Tahsin, Binnazhor, Ziyadah, Muraja'ah"
        },
        {
            id: 5,
            namaKegiatan: "JAM WAJIB KELIMA",
            jamKegiatan: "00:00 - 00:00",
            tugas: "Fashohah, Tahsin, Binnazhor, Ziyadah, Muraja'ah"
        },
        {
            id: 6,
            namaKegiatan: "PENJAMIN MUTU TAHFIZH",
            jamKegiatan: "05:00 - 23:00",
            tugas: "Mutu Bacaan, Mutu Hafalan, Mutqin"
        },
        {
            id: 7,
            namaKegiatan: "Setoran Libur 1 (Pagi-Siang)",
            jamKegiatan: "05:00 - 13:00",
            tugas: "Ziyadah, Murajaah"
        },
        {
            id: 8,
            namaKegiatan: "Setoran Libur 2 (Sore - Malam)",
            jamKegiatan: "16:00 - 19:00",
            tugas: "Ziyadah, Murajaah"
        },
        {
            id: 9,
            namaKegiatan: "KEGIATAN PONDOK",
            jamKegiatan: "00:00 - 00:00",
            tugas: "Ziyadah, Muraja'ah"
        }
    ];

    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Jadwal Badal</h1>
                    <p className="text-sm text-slate-500 mt-1">Manajemen jadwal badal pembelajaran</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                    <h2 className="font-bold text-slate-800 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#00642F]">calendar_month</span>
                        Data Jadwal Badal
                    </h2>
                    <button className="bg-[#00642F] text-white hover:bg-[#005025] px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        Tambah Data
                    </button>
                </div>

                <div className="p-0 overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 text-center w-16">No</th>
                                <th className="px-6 py-4 text-center">Nama Kegiatan</th>
                                <th className="px-6 py-4 text-center">Jam Kegiatan</th>
                                <th className="px-6 py-4">Tugas</th>
                                <th className="px-6 py-4 text-center w-32">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {jadwalList.map((item, index) => (
                                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-center text-slate-500">{index + 1}</td>
                                    <td className="px-6 py-4 font-bold text-slate-800 text-center">{item.namaKegiatan}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-green-50 text-green-700 font-medium">
                                            <span className="material-symbols-outlined text-[16px]">schedule</span>
                                            {item.jamKegiatan}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 capitalize">
                                        {item.tugas}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center gap-2">
                                            <button className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center hover:bg-amber-100 transition-colors tooltip" title="Edit">
                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                            </button>
                                            <button className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors tooltip" title="Hapus">
                                                <span className="material-symbols-outlined text-[18px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
                    <div className="text-sm text-slate-500">
                        Menampilkan {jadwalList.length} data jadwal badal
                    </div>
                </div>
            </div>
        </div>
    );
}
