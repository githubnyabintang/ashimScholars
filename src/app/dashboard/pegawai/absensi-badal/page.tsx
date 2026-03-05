import React from "react";

// Dummy data based on Administrator_Pegawai_Absensi_badal.html
const absensiBadalData = [
    {
        id: "1",
        no: 1,
        idAbsensi: "3544142402",
        namaKegiatan: "Setoran Libur 1 (Pagi-Siang)",
        nama: "Muhajir",
        kampus: "KAMPUS II PUTRA",
        tgl: "26-02-2026",
        jam: "10:00:01",
        gadget: "Android"
    },
    {
        id: "2",
        no: 2,
        idAbsensi: "3544138800",
        namaKegiatan: "Setoran Libur 1 (Pagi-Siang)",
        nama: "Saenal Latif, SH.",
        kampus: "KAMPUS I PUTRA",
        tgl: "26-02-2026",
        jam: "09:30:00",
        gadget: "Android"
    },
    {
        id: "3",
        no: 3,
        idAbsensi: "3544137762",
        namaKegiatan: "Setoran Libur 1 (Pagi-Siang)",
        nama: "Muammar S.Pd",
        kampus: "KAMPUS I PUTRA",
        tgl: "26-02-2026",
        jam: "09:21:21",
        gadget: "Android"
    },
    {
        id: "4",
        no: 4,
        idAbsensi: "3544133344",
        namaKegiatan: "Setoran Libur 1 (Pagi-Siang)",
        nama: "Syaiful Jihad",
        kampus: "KAMPUS II PUTRA",
        tgl: "26-02-2026",
        jam: "08:44:32",
        gadget: "Android"
    },
    {
        id: "5",
        no: 5,
        idAbsensi: "3544116364",
        namaKegiatan: "JAM WAJIB PERTAMA",
        nama: "Rahmat Hamid, SQ., M.Ag.",
        kampus: "KAMPUS II PUTRA",
        tgl: "26-02-2026",
        jam: "06:23:02",
        gadget: "Android"
    },
    {
        id: "6",
        no: 6,
        idAbsensi: "3544115720",
        namaKegiatan: "JAM WAJIB PERTAMA",
        nama: "A.Nurafifah Muhja",
        kampus: "KAMPUS PUTRI",
        tgl: "26-02-2026",
        jam: "06:17:40",
        gadget: "Android"
    },
    {
        id: "7",
        no: 7,
        idAbsensi: "3544057630",
        namaKegiatan: "PENJAMIN MUTU TAHFIZH",
        nama: "Wilyan Fadwillah",
        kampus: "KAMPUS II PUTRA",
        tgl: "25-02-2026",
        jam: "22:13:35",
        gadget: "Android"
    }
];

export default function AbsensiBadalPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Data Absensi Badal</h1>
                    <p className="text-sm text-slate-500 mt-1">Kelola data absensi badal/pengganti pegawai</p>
                </div>
                <div>
                    <button className="bg-slate-100 text-[#00642F] border border-[#00642F]/20 hover:bg-[#00642F]/10 px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                        Semua Data
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Pegawai</label>
                        <select className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] appearance-none" required>
                            <option value="">-- Pilih Pegawai --</option>
                            <option value="1">A.Nurafifah Muhja</option>
                            <option value="2">Muhajir</option>
                            <option value="3">Saenal Latif, SH.</option>
                            <option value="4">Wilyan Fadwillah</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Bulan</label>
                        <select className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] appearance-none" required>
                            <option value="">-- Pilih Bulan --</option>
                            <option value="01">01 - Januari</option>
                            <option value="02">02 - Februari</option>
                            <option value="03">03 - Maret</option>
                            <option value="04">04 - April</option>
                            <option value="05">05 - Mei</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Tahun</label>
                        <select className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] appearance-none" required>
                            <option value="">-- Pilih Tahun --</option>
                            <option value="2026">2026</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>
                    <div className="md:col-span-3">
                        <button type="button" className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">search</span>
                            Lihat Data
                        </button>
                    </div>
                </form>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                    <h2 className="font-bold text-slate-800 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#00642F]">date_range</span>
                        Absensi Bulan Ini
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                                <th className="p-4 font-semibold border-b border-slate-200 w-12 text-center">No</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">ID Absensi</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Nama Kegiatan</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Nama</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Kampus</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Tgl</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Jam</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Gadget</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                            {absensiBadalData.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="p-4 text-center font-medium">{item.no}</td>
                                    <td className="p-4 text-center">
                                        <span className="font-mono text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">
                                            {item.idAbsensi}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className="font-medium text-slate-800">{item.namaKegiatan}</span>
                                    </td>
                                    <td className="p-4 font-bold text-slate-800">{item.nama}</td>
                                    <td className="p-4 text-center">
                                        <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider ${item.kampus.includes('PUTRA') ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                                                item.kampus.includes('PUTRI') ? 'bg-pink-100 text-pink-700 border border-pink-200' :
                                                    'bg-slate-100 text-slate-600 border border-slate-200'
                                            }`}>
                                            {item.kampus}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center whitespace-nowrap text-slate-600 font-medium">
                                        {item.tgl}
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">
                                            {item.jam}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-1 text-slate-500">
                                            <span className="material-symbols-outlined text-[16px]">smartphone</span>
                                            <span className="text-xs">{item.gadget}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-slate-200 bg-white flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-slate-500">
                    <div>Menampilkan 1 hingga 7 dari 30 entri</div>
                    <div className="flex gap-1">
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 transition-colors" disabled>Sebelumnya</button>
                        <button className="px-3 py-1 rounded-lg bg-[#00642F] text-white font-medium shadow-sm">1</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">2</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">Selanjutnya</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
