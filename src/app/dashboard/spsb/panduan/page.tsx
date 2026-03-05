import React from "react";

export default function SPSBPanduanPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Data Pendaftaran CSB</h1>
                    <p className="text-sm text-slate-500 mt-1">Kelola data pendaftaran Calon Santri Baru (CSB)</p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Kampus Tidung */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">person</span>
                    </div>
                    <div>
                        <div className="text-slate-500 text-sm font-medium">Kampus Tidung</div>
                        <div className="text-2xl font-bold text-slate-800">
                            7 <span className="text-sm font-normal text-slate-500">CSB</span>
                        </div>
                    </div>
                </div>
                {/* Kampus Antang */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">person</span>
                    </div>
                    <div>
                        <div className="text-slate-500 text-sm font-medium">Kampus Antang</div>
                        <div className="text-2xl font-bold text-slate-800">
                            24 <span className="text-sm font-normal text-slate-500">CSB</span>
                        </div>
                    </div>
                </div>
                {/* Kampus Telkom */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">person</span>
                    </div>
                    <div>
                        <div className="text-slate-500 text-sm font-medium">Kampus Telkom</div>
                        <div className="text-2xl font-bold text-slate-800">
                            0 <span className="text-sm font-normal text-slate-500">CSB</span>
                        </div>
                    </div>
                </div>
                {/* Kampus Mawang */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">person</span>
                    </div>
                    <div>
                        <div className="text-slate-500 text-sm font-medium">Kampus Mawang</div>
                        <div className="text-2xl font-bold text-slate-800">
                            12 <span className="text-sm font-normal text-slate-500">CSB</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs & Content */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="border-b border-slate-200 bg-slate-50">
                    <div className="flex overflow-x-auto hide-scrollbar">
                        <button className="px-6 py-4 text-sm font-bold text-[#00642F] border-b-2 border-[#00642F] whitespace-nowrap">
                            DATA SPSB
                        </button>
                        <button className="px-6 py-4 text-sm font-bold text-slate-500 hover:text-slate-700 whitespace-nowrap">
                            PANDUAN
                        </button>
                        <button className="px-6 py-4 text-sm font-bold text-slate-500 hover:text-slate-700 whitespace-nowrap">
                            PENILAIAN
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-6">
                        <button className="bg-[#00642F] text-white hover:bg-[#005025] px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-sm flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">add</span>
                            Input Program
                        </button>
                        <button className="bg-[#00642F] text-white hover:bg-[#005025] px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-sm flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">add</span>
                            Input Soal Tes PSB
                        </button>
                    </div>

                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <div className="p-4 border-b border-slate-200 bg-slate-50 flex gap-2">
                            <button className="bg-slate-100 text-[#00642F] border border-[#00642F]/20 hover:bg-[#00642F]/10 px-4 py-2 rounded-xl text-sm font-bold transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                                Data Pendaftaran
                            </button>
                            <button className="bg-slate-100 text-[#00642F] border border-[#00642F]/20 hover:bg-[#00642F]/10 px-4 py-2 rounded-xl text-sm font-bold transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                Jadwal Ujian
                            </button>
                        </div>

                        <div className="p-4 flex gap-2">
                            <button className="bg-slate-100 text-[#00642F] border border-[#00642F]/20 hover:bg-[#00642F]/10 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[16px]">visibility</span>
                                Alumni
                            </button>
                            <button className="bg-[#00642F] text-white hover:bg-[#005025] px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 shadow-sm">
                                <span className="material-symbols-outlined text-[16px]">visibility</span>
                                Data Sesi 3
                            </button>
                            <button className="bg-[#00642F] text-white hover:bg-[#005025] px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 shadow-sm">
                                <span className="material-symbols-outlined text-[16px]">visibility</span>
                                Data Sesi 2
                            </button>
                            <button className="bg-[#00642F] text-white hover:bg-[#005025] px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 shadow-sm">
                                <span className="material-symbols-outlined text-[16px]">visibility</span>
                                Data Sesi 1
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left whitespace-nowrap">
                                <thead className="bg-slate-50 text-slate-600 font-semibold border-y border-slate-200 uppercase text-xs">
                                    <tr>
                                        <th className="px-4 py-3 text-center">No</th>
                                        <th className="px-4 py-3 text-center">Kampus</th>
                                        <th className="px-4 py-3 text-center">Sesi</th>
                                        <th className="px-4 py-3 text-center">No. Token</th>
                                        <th className="px-4 py-3 text-center">Tgl. Bayar</th>
                                        <th className="px-4 py-3 text-center">Nama</th>
                                        <th className="px-4 py-3 text-center">Program</th>
                                        <th className="px-4 py-3 text-center">Tingkatan</th>
                                        <th className="px-4 py-3 text-center">Dokumen</th>
                                        <th className="px-4 py-3 text-center">HP/WA</th>
                                        <th className="px-4 py-3 text-center">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-4 py-3 text-center">1</td>
                                        <td className="px-4 py-3 text-center text-slate-500">-</td>
                                        <td className="px-4 py-3 text-center text-slate-500">-</td>
                                        <td className="px-4 py-3 text-center">
                                            <div className="font-bold text-slate-800">CSB26_IMP_1771900457</div>
                                            <div className="flex gap-1 justify-center mt-1">
                                                <button className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded font-medium">Kirim Token</button>
                                                <button className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-700 rounded font-medium">Copy</button>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-center text-slate-600">2026-02-24</td>
                                        <td className="px-4 py-3 text-center text-slate-500">-</td>
                                        <td className="px-4 py-3 text-center text-slate-500">-</td>
                                        <td className="px-4 py-3 text-center">
                                            <button className="text-xs px-2 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100">Pilih Tingkatan</button>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <button className="text-xs px-2 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-200 mb-1 flex items-center gap-1 mx-auto">
                                                <span className="material-symbols-outlined text-[14px]">image</span> Lihat
                                            </button>
                                            <button className="text-xs px-2 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100">Update Status</button>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <div className="font-medium">082190434317</div>
                                            <div className="flex gap-1 justify-center mt-1">
                                                <button className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded font-medium">Chat</button>
                                                <button className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-700 rounded font-medium">Copy</button>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <div className="flex justify-center flex-col gap-1">
                                                <button className="text-[10px] px-2 py-1 bg-amber-100 text-amber-700 rounded font-medium">Update Kwitansi</button>
                                                <button className="text-[10px] px-2 py-1 bg-amber-100 text-amber-700 rounded font-medium">Update VA</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-4 py-3 text-center">2</td>
                                        <td className="px-4 py-3 text-center text-slate-500">-</td>
                                        <td className="px-4 py-3 text-center text-slate-500">-</td>
                                        <td className="px-4 py-3 text-center">
                                            <div className="font-bold text-slate-800">CSB26_IMP_1771900314</div>
                                            <div className="flex gap-1 justify-center mt-1">
                                                <button className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded font-medium">Kirim Token</button>
                                                <button className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-700 rounded font-medium">Copy</button>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-center text-slate-600">2026-02-24</td>
                                        <td className="px-4 py-3 text-center text-slate-500">-</td>
                                        <td className="px-4 py-3 text-center text-slate-500">-</td>
                                        <td className="px-4 py-3 text-center">
                                            <button className="text-xs px-2 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100">Pilih Tingkatan</button>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <button className="text-xs px-2 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-200 mb-1 flex items-center gap-1 mx-auto">
                                                <span className="material-symbols-outlined text-[14px]">image</span> Lihat
                                            </button>
                                            <button className="text-xs px-2 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100">Update Status</button>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <div className="font-medium">082190434317</div>
                                            <div className="flex gap-1 justify-center mt-1">
                                                <button className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded font-medium">Chat</button>
                                                <button className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-700 rounded font-medium">Copy</button>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <div className="flex justify-center flex-col gap-1">
                                                <button className="text-[10px] px-2 py-1 bg-amber-100 text-amber-700 rounded font-medium">Update Kwitansi</button>
                                                <button className="text-[10px] px-2 py-1 bg-amber-100 text-amber-700 rounded font-medium">Update VA</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
