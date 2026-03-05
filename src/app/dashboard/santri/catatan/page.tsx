import React from "react";

// Dummy data based on Administrator_Santri_Data_santri_catatan_santri.html
const catatanSantriData = [
    {
        id: "1",
        no: 1,
        idSantri: "15669051849",
        nama: "Muhammad Yunus Kamil",
        catatan: "Gugur karena tidak mencapai target hafalan.",
        oleh: "H SYAM AMIR YUNUS (Superadmin)",
        tgl: "12-05-2025",
        file: null
    },
    {
        id: "2",
        no: 2,
        idSantri: "15653355651",
        nama: "NURFATIHAH ASYIFA RAMADHANI",
        catatan: "Pindah Sekolah",
        oleh: "H SYAM AMIR YUNUS (Superadmin)",
        tgl: "25-02-2025",
        file: null
    }
];

export default function CatatanSantriPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Data Catatan Santri</h1>
                    <p className="text-sm text-slate-500 mt-1">Kelola data catatan khusus santri</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                    <h2 className="font-bold text-slate-800 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#00642F]">format_list_bulleted</span>
                        Tabel Catatan Santri
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-wider">
                                <th className="p-4 font-semibold border-b border-slate-200 text-center w-12">No</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">ID Santri</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Nama</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Catatan</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Oleh</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Tgl</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">File</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                            {catatanSantriData.length > 0 ? (
                                catatanSantriData.map((item) => (
                                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="p-4 text-center font-medium">{item.no}</td>
                                        <td className="p-4 text-center">
                                            <span className="font-mono text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">
                                                {item.idSantri}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center font-bold text-slate-800">{item.nama}</td>
                                        <td className="p-4 text-slate-600 max-w-[200px] truncate" title={item.catatan}>{item.catatan}</td>
                                        <td className="p-4 text-center text-xs text-slate-500">{item.oleh}</td>
                                        <td className="p-4 text-center whitespace-nowrap text-slate-600">{item.tgl}</td>
                                        <td className="p-4 text-center">
                                            {item.file ? (
                                                <button className="text-blue-600 hover:text-blue-800 transition-colors" title="Lihat File">
                                                    <span className="material-symbols-outlined">attachment</span>
                                                </button>
                                            ) : (
                                                <span className="text-slate-300">-</span>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="p-8 text-center text-slate-500">
                                        Tidak ada data yang ditemukan
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
