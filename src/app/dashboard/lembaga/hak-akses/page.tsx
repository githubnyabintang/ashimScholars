import React from "react";

// Dummy data based on Administrator_Kelembagaan_Hak_akses.html
const hakAksesData = [
    {
        id: "15773920173",
        no: 1,
        nama: "A.Nurafifah Muhja",
        dataSantri: { tambah: false, lihat: false, ubah: false, hapus: false },
        presensiSantri: { tambah: false, lihat: false, ubah: false, hapus: false }
    },
    {
        id: "15664103694",
        no: 2,
        nama: "Abd Rahman Aras",
        dataSantri: { tambah: false, lihat: false, ubah: false, hapus: false },
        presensiSantri: { tambah: false, lihat: false, ubah: false, hapus: false }
    },
    {
        id: "15830459154",
        no: 3,
        nama: "Achmad Syafril Syafei",
        dataSantri: { tambah: false, lihat: false, ubah: false, hapus: false },
        presensiSantri: { tambah: false, lihat: false, ubah: false, hapus: false }
    },
    {
        id: "15664093137",
        no: 4,
        nama: "Achmad Yasin Attauhid",
        kampus: "KAMPUS II PUTRA",
        dataSantri: { tambah: false, lihat: true, ubah: false, hapus: false },
        presensiSantri: { tambah: false, lihat: false, ubah: false, hapus: false }
    },
    {
        id: "15664802409",
        no: 5,
        nama: "AGUNG",
        dataSantri: { tambah: false, lihat: false, ubah: false, hapus: false },
        presensiSantri: { tambah: false, lihat: false, ubah: false, hapus: false }
    }
];

const PermissionIcon = ({ granted }: { granted: boolean }) => (
    <span className={`material-symbols-outlined text-[14px] ${granted ? 'text-blue-600' : 'text-red-500'}`}>
        {granted ? 'check_circle' : 'cancel'}
    </span>
);

export default function HakAksesPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Pengaturan Hak Akses</h1>
                    <p className="text-sm text-slate-500 mt-1">Manajemen hak akses pengguna sistem</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full sm:w-72">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                        <input
                            type="text"
                            placeholder="Cari pengguna..."
                            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                                <th className="p-4 font-semibold border-b border-slate-200 w-16 text-center">No</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">ID</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Nama</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Data Santri</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Presensi Santri</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Data Tahfidz</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                            {hakAksesData.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 text-center font-medium">{item.no}</td>
                                    <td className="p-4 text-center font-mono text-slate-600">{item.id}</td>
                                    <td className="p-4">
                                        <p className="font-bold text-slate-800">{item.nama}</p>
                                        {item.kampus && (
                                            <p className="text-xs text-red-500 font-medium mt-1">Kampus : {item.kampus}</p>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 relative group">
                                            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
                                                <div className="flex items-center gap-1.5 justify-between">
                                                    <span>Tambah:</span> <PermissionIcon granted={item.dataSantri.tambah} />
                                                </div>
                                                <div className="flex items-center gap-1.5 justify-between">
                                                    <span>Lihat:</span> <PermissionIcon granted={item.dataSantri.lihat} />
                                                </div>
                                                <div className="flex items-center gap-1.5 justify-between">
                                                    <span>Ubah:</span> <PermissionIcon granted={item.dataSantri.ubah} />
                                                </div>
                                                <div className="flex items-center gap-1.5 justify-between">
                                                    <span>Hapus:</span> <PermissionIcon granted={item.dataSantri.hapus} />
                                                </div>
                                            </div>
                                            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="h-6 w-6 rounded bg-yellow-50 text-yellow-600 hover:bg-yellow-500 hover:text-white flex items-center justify-center transition-colors">
                                                    <span className="material-symbols-outlined text-[14px]">edit</span>
                                                </button>
                                                <button className="h-6 w-6 rounded bg-red-50 text-red-600 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors">
                                                    <span className="material-symbols-outlined text-[14px]">delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 relative group">
                                            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
                                                <div className="flex items-center gap-1.5 justify-between">
                                                    <span>Tambah:</span> <PermissionIcon granted={item.presensiSantri.tambah} />
                                                </div>
                                                <div className="flex items-center gap-1.5 justify-between">
                                                    <span>Lihat:</span> <PermissionIcon granted={item.presensiSantri.lihat} />
                                                </div>
                                                <div className="flex items-center gap-1.5 justify-between">
                                                    <span>Ubah:</span> <PermissionIcon granted={item.presensiSantri.ubah} />
                                                </div>
                                                <div className="flex items-center gap-1.5 justify-between">
                                                    <span>Hapus:</span> <PermissionIcon granted={item.presensiSantri.hapus} />
                                                </div>
                                            </div>
                                            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="h-6 w-6 rounded bg-yellow-50 text-yellow-600 hover:bg-yellow-500 hover:text-white flex items-center justify-center transition-colors">
                                                    <span className="material-symbols-outlined text-[14px]">edit</span>
                                                </button>
                                                <button className="h-6 w-6 rounded bg-red-50 text-red-600 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors">
                                                    <span className="material-symbols-outlined text-[14px]">delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center align-middle">
                                        <button className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border border-red-100 hover:border-red-600 shadow-sm whitespace-nowrap">
                                            Buat Akses
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-slate-200 bg-white flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-slate-500">
                    <div>Menampilkan 1 hingga 5 dari 100 entri</div>
                    <div className="flex gap-1">
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 transition-colors" disabled>Sebelumnya</button>
                        <button className="px-3 py-1 rounded-lg bg-[#00642F] text-white font-medium shadow-sm">1</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">2</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">3</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">4</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">5</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">Selanjutnya</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
