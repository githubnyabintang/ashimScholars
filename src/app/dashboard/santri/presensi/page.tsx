import React from "react";

// Dummy data based on Administrator_Santri_Presensi.html
const presensiSantriData = [
    {
        id: "1",
        no: 1,
        nama: "Ahmad Ashim",
        status: true,
        tglIzin: "2025-10-29",
        rencanaKembali: "2025-11-08",
        alasan: "Menghadiri Aqiqah anak Saudara/Keponakan",
        penjemput: "jamal",
        tglKembali: ["Tiba Kembali : 14-10-2025"],
        kepulangan: ["Terkonfirmasi"],
        laporanSantri: "terlambat",
        userInput: "H SYAM AMIR YUNUS (Superadmin)",
        canEdit: false
    },
    {
        id: "2",
        no: 2,
        nama: "Alana mumtazah Efendy",
        status: true,
        tglIzin: "2025-10-14",
        rencanaKembali: "2025-10-15",
        alasan: "Menghadiri Aqiqah anak Saudara/Keponakan",
        penjemput: "oleh orangtua",
        tglKembali: [],
        kepulangan: [],
        laporanSantri: "",
        userInput: "H SYAM AMIR YUNUS (Superadmin)",
        canEdit: true
    },
    {
        id: "3",
        no: 3,
        nama: "Altamis Harith Damianaufal",
        status: true,
        tglIzin: "2025-10-05",
        rencanaKembali: "2025-10-07",
        alasan: "Berobat",
        penjemput: "Orang tua",
        tglKembali: [],
        kepulangan: [],
        laporanSantri: "",
        userInput: "Ma'ruf Alhusari, S.Ag.",
        canEdit: true
    },
    {
        id: "4",
        no: 4,
        nama: "Aqilah Khairiyah Hafidzah.",
        status: true,
        tglIzin: "2025-07-06",
        rencanaKembali: "2025-07-18",
        alasan: "Tugas Pondok",
        penjemput: "ibu",
        tglKembali: [],
        kepulangan: [],
        laporanSantri: "",
        userInput: "Superadmin PPTQ Al-Imam Ashim",
        canEdit: true
    },
    {
        id: "5",
        no: 5,
        nama: "Aqilah Khairiyah Hafidzah.",
        status: true,
        tglIzin: "2025-07-01",
        rencanaKembali: "2025-07-06",
        alasan: "Tugas Pondok",
        penjemput: "ibunya ibunya",
        tglKembali: ["Tiba Kembali : 07-07-2025", "Jum. Hari Terlambat : 1 Hari"],
        kepulangan: ["Terkonfirmasi", "SP2 (Pemanggilan Orangtua + dipulangkan)"],
        laporanSantri: "Laporan Santri",
        userInput: "Superadmin PPTQ Al-Imam Ashim",
        canEdit: false
    },
    {
        id: "6",
        no: 6,
        nama: "Alya Ainun Jariyah",
        status: false,
        tglIzin: "2025-07-06",
        rencanaKembali: "2025-07-10",
        alasan: "Tugas Pondok",
        penjemput: "ibunya",
        tglKembali: [],
        kepulangan: [],
        laporanSantri: "",
        userInput: "Superadmin PPTQ Al-Imam Ashim",
        canEdit: true
    }
];

export default function PresensiSantriPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Perizinan / Presensi Santri</h1>
                    <p className="text-sm text-slate-500 mt-1">Kelola data perizinan, alasan, dan kepulangan santri</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-slate-100 text-[#00642F] border border-[#00642F]/20 hover:bg-[#00642F]/10 px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">add_circle</span>
                        Tambah Kepulangan
                    </button>
                    <button className="bg-slate-100 text-[#00642F] border border-[#00642F]/20 hover:bg-[#00642F]/10 px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">post_add</span>
                        Tambah Alasan
                    </button>
                    <button className="bg-[#00642F] text-white hover:bg-[#00642F]/90 px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        Tambah Data
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                    <h2 className="font-bold text-slate-800 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#00642F]">fact_check</span>
                        Tabel Presensi Santri
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-wider">
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">No</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Nama Santri</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Tgl. Izin</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Rencana Kembali</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Alasan</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Penjemput</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Tgl. Kembali</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Kepulangan</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Laporan Santri</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">User Input</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs text-slate-700 divide-y divide-slate-100">
                            {presensiSantriData.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 text-center font-medium">{item.no}</td>
                                    <td className="p-4">
                                        <div className="font-bold text-slate-800">{item.nama}</div>
                                        <div className="mt-1">
                                            {item.status ? (
                                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#00642F] bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                                                    <span className="material-symbols-outlined text-[12px]">toggle_on</span> Aktif
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                                                    <span className="material-symbols-outlined text-[12px]">toggle_off</span> Nonaktif
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-4 text-center whitespace-nowrap text-slate-600">{item.tglIzin}</td>
                                    <td className="p-4 text-center whitespace-nowrap font-medium text-slate-800">{item.rencanaKembali}</td>
                                    <td className="p-4 max-w-[150px] truncate" title={item.alasan}>{item.alasan}</td>
                                    <td className="p-4 text-center">{item.penjemput}</td>
                                    <td className="p-4">
                                        {item.tglKembali.length > 0 && (
                                            <ul className="list-disc list-inside space-y-1">
                                                {item.tglKembali.map((tgl, i) => (
                                                    <li key={i} className={tgl.includes('Terlambat') ? 'text-red-500 font-semibold' : 'text-slate-600'}>{tgl}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        {item.kepulangan.length > 0 && (
                                            <ul className="list-disc list-inside space-y-1">
                                                {item.kepulangan.map((kp, i) => (
                                                    <li key={i} className={kp.includes('SP2') ? 'text-red-500 font-bold' : 'text-[#00642F] font-semibold'}>{kp}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        {item.laporanSantri && (
                                            <span className={`px-2 py-1 rounded text-[10px] font-bold ${item.laporanSantri === 'terlambat' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'
                                                }`}>
                                                {item.laporanSantri}
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-4 text-center text-slate-500">{item.userInput}</td>
                                    <td className="p-4 text-center">
                                        <button
                                            className={`p-1.5 rounded-lg border transition-colors ${item.canEdit
                                                    ? 'bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100'
                                                    : 'bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed opacity-50'
                                                }`}
                                            disabled={!item.canEdit}
                                            title="Edit"
                                        >
                                            <span className="material-symbols-outlined text-[16px]">edit</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
