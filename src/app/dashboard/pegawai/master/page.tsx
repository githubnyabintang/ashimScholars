import React from "react";

// Dummy data based on Administrator_Pegawai_Master_pegawai.html
const masterKategoriData = [
    { id: "325769762", no: 1, nama: "Ijazah" },
    { id: "1737513641", no: 2, nama: "Jabatan" },
    { id: "1752629891", no: 3, nama: "MA" },
    { id: "1737518578", no: 4, nama: "Pangkat" },
    { id: "1737518583", no: 5, nama: "Status" },
    { id: "1737515432", no: 6, nama: "Tugas" },
    { id: "1737532495", no: 7, nama: "Unit Kerja" }
];

const masterDetailData = [
    { no: 1, kategori: "Ijazah", nama: "SD" },
    { no: 2, kategori: "Ijazah", nama: "SMP" },
    { no: 3, kategori: "Ijazah", nama: "SMA" },
    { no: 4, kategori: "Ijazah", nama: "S1" },
    { no: 5, kategori: "Ijazah", nama: "S2" },
    { no: 6, kategori: "Ijazah", nama: "S3" },
    { no: 7, kategori: "Jabatan", nama: "Pengasuh" },
    { no: 8, kategori: "Jabatan", nama: "Ketua Asrama" },
    { no: 9, kategori: "Pangkat", nama: "A1/KHITMAD" },
    { no: 10, kategori: "Pangkat", nama: "III/A Pengatur Muda" },
    { no: 11, kategori: "Status", nama: "Kontrak" },
    { no: 12, kategori: "Status", nama: "Tetap" },
    { no: 13, kategori: "Tugas", nama: "Pembina" },
    { no: 14, kategori: "Tugas", nama: "Guru" }
];

export default function MasterPegawaiPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Master Data Pegawai</h1>
                    <p className="text-sm text-slate-500 mt-1">Kelola kategori dan data referensi kepegawaian</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Tabel Kategori Master */}
                <div className="w-full lg:w-1/2">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
                        <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                            <h2 className="font-bold text-slate-800">Kategori Master</h2>
                            <button className="bg-[#00642F] hover:bg-[#005025] text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors shadow-sm flex items-center gap-1">
                                <span className="material-symbols-outlined text-[18px]">add</span>
                                Tambah
                            </button>
                        </div>
                        <div className="overflow-x-auto flex-1 p-4">
                            <div className="relative mb-4">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
                                <input
                                    type="text"
                                    placeholder="Cari kategori..."
                                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all"
                                />
                            </div>
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider rounded-lg">
                                        <th className="p-3 font-semibold border-b border-slate-200 w-12 text-center">No</th>
                                        <th className="p-3 font-semibold border-b border-slate-200 text-center w-28">ID</th>
                                        <th className="p-3 font-semibold border-b border-slate-200">Kategori</th>
                                        <th className="p-3 font-semibold border-b border-slate-200 text-center w-24">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                                    {masterKategoriData.map((item) => (
                                        <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                                            <td className="p-3 text-center">{item.no}</td>
                                            <td className="p-3 text-center font-mono text-xs text-slate-500">{item.id}</td>
                                            <td className="p-3 font-bold text-slate-800 group-hover:text-[#00642F] transition-colors">{item.nama}</td>
                                            <td className="p-3">
                                                <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="h-7 w-7 rounded bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors tooltip" data-tip="Edit">
                                                        <span className="material-symbols-outlined text-[14px]">edit</span>
                                                    </button>
                                                    <button className="h-7 w-7 rounded bg-red-50 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors tooltip" data-tip="Hapus">
                                                        <span className="material-symbols-outlined text-[14px]">delete</span>
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

                {/* Tabel Detail Master */}
                <div className="w-full lg:w-1/2">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
                        <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                            <h2 className="font-bold text-slate-800">Detail Master</h2>
                            <button className="bg-[#FFD500] hover:bg-[#e6c000] text-slate-800 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors shadow-sm flex items-center gap-1">
                                <span className="material-symbols-outlined text-[18px]">add</span>
                                Tambah Detail
                            </button>
                        </div>
                        <div className="overflow-x-auto flex-1 p-4">
                            <div className="flex gap-2 mb-4">
                                <div className="relative flex-1">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
                                    <input
                                        type="text"
                                        placeholder="Cari referensi..."
                                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all"
                                    />
                                </div>
                                <select className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all text-slate-600 w-32">
                                    <option value="all">Semua Kategori</option>
                                    <option value="ijazah">Ijazah</option>
                                    <option value="jabatan">Jabatan</option>
                                    <option value="pangkat">Pangkat</option>
                                </select>
                            </div>
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                                        <th className="p-3 font-semibold border-b border-slate-200 w-12 text-center">No</th>
                                        <th className="p-3 font-semibold border-b border-slate-200">Kategori</th>
                                        <th className="p-3 font-semibold border-b border-slate-200">Nama / Referensi</th>
                                        <th className="p-3 font-semibold border-b border-slate-200 text-center w-24">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                                    {masterDetailData.map((item) => (
                                        <tr key={item.no} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="p-3 text-center">{item.no}</td>
                                            <td className="p-3">
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                                                    {item.kategori}
                                                </span>
                                            </td>
                                            <td className="p-3 font-medium text-slate-800">{item.nama}</td>
                                            <td className="p-3">
                                                <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="h-7 w-7 rounded bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors">
                                                        <span className="material-symbols-outlined text-[14px]">edit</span>
                                                    </button>
                                                    <button className="h-7 w-7 rounded bg-red-50 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors">
                                                        <span className="material-symbols-outlined text-[14px]">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                                <span>Menampilkan 1 - 14 dari 95 data</span>
                                <div className="flex gap-1">
                                    <button className="px-2 py-1 rounded border border-slate-200 hover:bg-slate-50">&lt;</button>
                                    <button className="px-2 py-1 rounded bg-[#00642F] text-white">1</button>
                                    <button className="px-2 py-1 rounded border border-slate-200 hover:bg-slate-50">2</button>
                                    <button className="px-2 py-1 rounded border border-slate-200 hover:bg-slate-50">3</button>
                                    <button className="px-2 py-1 rounded border border-slate-200 hover:bg-slate-50">...</button>
                                    <button className="px-2 py-1 rounded border border-slate-200 hover:bg-slate-50">&gt;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
