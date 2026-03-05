import React from "react";

export default function RekapGajiPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Rekapitulasi Absensi Pegawai</h1>
                    <p className="text-sm text-slate-500 mt-1">Bulan 02 Tahun 2026</p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">group</span>
                    </div>
                    <div>
                        <div className="text-slate-500 text-sm font-medium">Total Pegawai</div>
                        <div className="text-2xl font-bold text-slate-800">
                            145 <span className="text-sm font-normal text-slate-500">Orang</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">group</span>
                    </div>
                    <div>
                        <div className="text-slate-500 text-sm font-medium">Sudah Rekap</div>
                        <div className="text-2xl font-bold text-slate-800">
                            0 <span className="text-sm font-normal text-slate-500">Orang</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">group</span>
                    </div>
                    <div>
                        <div className="text-slate-500 text-sm font-medium">Belum Rekap</div>
                        <div className="text-2xl font-bold text-slate-800">
                            145 <span className="text-sm font-normal text-slate-500">Orang</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200">
                    <button className="bg-[#00642F] text-white hover:bg-[#005025] px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-sm flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                        Cetak Slip Gaji
                    </button>

                    <div className="max-w-xs">
                        <label className="block text-sm font-semibold text-slate-700 mb-2 text-center">Pilih Kampus</label>
                        <select className="w-full border border-slate-300 rounded-xl px-4 py-2 text-sm text-center font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] cursor-pointer appearance-none bg-white">
                            <option value="">--- Silahkan Pilih ---</option>
                            <option value="5555578768">KAMPUS I PUTRA</option>
                            <option value="32453534">KAMPUS II PUTRA</option>
                            <option value="3564566">KAMPUS PUTRI</option>
                            <option value="4567879879">HMQ TELKOM</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left whitespace-nowrap">
                        <thead className="bg-slate-50 text-slate-600 font-semibold border-y border-slate-200 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-4 text-center">No</th>
                                <th className="px-6 py-4 text-center">Nama</th>
                                <th className="px-6 py-4 text-center">ID Rekap</th>
                                <th className="px-6 py-4 text-center">ID Absensi</th>
                                <th className="px-6 py-4 text-center">Bulan Rekap</th>
                                <th className="px-6 py-4 text-center">No. Rekening</th>
                                <th className="px-6 py-4 text-center">Nama Bank</th>
                                <th className="px-6 py-4 text-center">Nama Identitas Di Bank</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr>
                                <td colSpan={8} className="px-6 py-8 text-center text-slate-500">
                                    <div className="flex flex-col items-center justify-center">
                                        <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">inbox</span>
                                        <p>Pilih kampus untuk menampilkan data rekap gaji</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
