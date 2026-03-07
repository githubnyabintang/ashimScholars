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
                <div className="p-3 md:p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                    <h2 className="font-bold text-slate-800 flex items-center gap-2 text-sm md:text-base">
                        <span className="material-symbols-outlined text-[#00642F] text-[18px] md:text-[24px]">calendar_month</span>
                        Data Jadwal Badal
                    </h2>
                    <button className="bg-[#00642F] text-white hover:bg-[#005025] px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-bold transition-colors shadow-sm flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] md:text-[18px]">add</span>
                        <span className="hidden sm:inline">Tambah Data</span>
                        <span className="sm:hidden">Tambah</span>
                    </button>
                </div>

                {/* Mobile List Cards Badal */}
                <div className="md:hidden flex flex-col gap-3 p-3 bg-slate-50/50">
                    {jadwalList.map((item, index) => (
                        <div key={item.id} className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-sm flex flex-col gap-3">
                            <div className="flex justify-between items-start">
                                <div className="font-bold text-slate-800 text-[13px] leading-tight pr-2">{item.namaKegiatan}</div>
                                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-green-50 text-green-700 font-semibold text-[10px] whitespace-nowrap border border-green-100">
                                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                                    {item.jamKegiatan}
                                </span>
                            </div>
                            <div className="text-[11px] text-slate-600">
                                <span className="font-semibold text-slate-800 block mb-1">Tugas:</span>
                                <p className="leading-relaxed border-l-2 border-slate-200 pl-2 opacity-90">{item.tugas}</p>
                            </div>
                            <div className="flex justify-between items-center mt-1 pt-3 border-t border-slate-100">
                                <span className="text-[10px] text-slate-400 font-medium">No. {index + 1}</span>
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center hover:bg-amber-100 transition-colors tooltip" title="Edit">
                                        <span className="material-symbols-outlined text-[14px]">edit</span>
                                    </button>
                                    <button className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors tooltip" title="Hapus">
                                        <span className="material-symbols-outlined text-[14px]">delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block p-0 overflow-x-auto">
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
