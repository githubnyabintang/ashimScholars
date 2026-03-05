import React from "react";

// Dummy data based on Administrator_Program_Master_program.html
const masterProgramData = [
    {
        id: "1",
        no: 1,
        program: "Takhassus",
        terlihat: true,
        kampus: "KAMPUS II PUTRA"
    },
    {
        id: "2",
        no: 2,
        program: "I'dad MTs Putra",
        terlihat: true,
        kampus: "KAMPUS II PUTRA"
    },
    {
        id: "3",
        no: 3,
        program: "I'dad MTs Putri",
        terlihat: true,
        kampus: "KAMPUS PUTRI"
    },
    {
        id: "4",
        no: 4,
        program: "Halaqah Mahir Bil-Qur'an Putra",
        terlihat: true,
        kampus: "HMQ TELKOM"
    },
    {
        id: "5",
        no: 5,
        program: "Halaqah Mahir Bil-Qur'an Putri",
        terlihat: true,
        kampus: "KAMPUS PUTRI"
    },
    {
        id: "6",
        no: 6,
        program: "MTs. Putri Al-Imam Ashim Gowa",
        terlihat: true,
        kampus: "KAMPUS PUTRI"
    },
    {
        id: "7",
        no: 7,
        program: "Tahfizh Murni",
        terlihat: true,
        kampus: "KAMPUS I PUTRA"
    },
    {
        id: "8",
        no: 8,
        program: "Madrasah Aliyah Tahfizhul Qur'an Al-Imam Ashim Makassar",
        terlihat: true,
        kampus: "KAMPUS II PUTRA"
    },
    {
        id: "9",
        no: 9,
        program: "MTs. Tahfizhul Qur'an Al-Imam Ashim Makassar",
        terlihat: true,
        kampus: "KAMPUS II PUTRA"
    }
];

export default function MasterProgramPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Master Program</h1>
                    <p className="text-sm text-slate-500 mt-1">Manajemen data program pendidikan lembaga</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Form Tambah Kategori */}
                <div className="w-full lg:w-1/3">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-5 border-b border-slate-200 bg-slate-50">
                            <h2 className="font-bold text-slate-800">Tambah Program Baru</h2>
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Nama Program</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all"
                                    placeholder="Masukkan nama program"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Pilih Lembaga / Kampus</label>
                                <select className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all text-slate-700">
                                    <option value="">-- Pilih --</option>
                                    <option value="HMQ TELKOM">HMQ TELKOM</option>
                                    <option value="KAMPUS I PUTRA">KAMPUS I PUTRA</option>
                                    <option value="KAMPUS II PUTRA">KAMPUS II PUTRA</option>
                                    <option value="KAMPUS PUTRI">KAMPUS PUTRI</option>
                                </select>
                            </div>
                            <div className="pt-4 mt-4 border-t border-slate-100">
                                <button className="w-full bg-[#00642F] hover:bg-[#005025] text-white px-4 py-2.5 rounded-xl font-bold transition-colors shadow-sm flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                                    Tambah Data
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Data */}
                <div className="w-full lg:w-2/3">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                            <h2 className="font-bold text-slate-800">Daftar Program</h2>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
                                <input
                                    type="text"
                                    placeholder="Cari program..."
                                    className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all w-48 lg:w-64"
                                />
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                                        <th className="p-4 font-semibold border-b border-slate-200 w-16 text-center">No</th>
                                        <th className="p-4 font-semibold border-b border-slate-200">Program</th>
                                        <th className="p-4 font-semibold border-b border-slate-200 text-center w-40">Kampus</th>
                                        <th className="p-4 font-semibold border-b border-slate-200 text-center w-28">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                                    {masterProgramData.map((item) => (
                                        <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-4 text-center font-medium">{item.no}</td>
                                            <td className="p-4 pl-4">
                                                <p className="font-bold text-slate-800">{item.program}</p>
                                                {item.terlihat && (
                                                    <div className="mt-1.5">
                                                        <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                            Terlihat
                                                        </span>
                                                    </div>
                                                )}
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className="font-medium text-slate-600 text-xs px-2 py-1 bg-slate-100 rounded-lg border border-slate-200 whitespace-nowrap">
                                                    {item.kampus}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors tooltip" data-tip="Edit">
                                                        <span className="material-symbols-outlined text-[16px]">draw</span>
                                                    </button>
                                                    <button className="h-8 w-8 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors tooltip" data-tip="Hapus">
                                                        <span className="material-symbols-outlined text-[16px]">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
