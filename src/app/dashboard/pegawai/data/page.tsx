import React from "react";
import StatCard from "@/components/ui/StatCard";

// Dummy data based on Administrator_Pegawai_Data_pegawai.html
const pegawaiData = [
    {
        id: "1",
        no: 1,
        nama: "Abd. Azis, S.Pd",
        nip: "198501012010011001",
        jabatan: "Guru",
        status: "Tetap",
        kampus: "KAMPUS I PUTRA",
        aktif: true
    },
    {
        id: "2",
        no: 2,
        nama: "Fatimah Azzahra, Lc",
        nip: "199002022015022002",
        jabatan: "Musyrifah",
        status: "Kontrak",
        kampus: "KAMPUS PUTRI",
        aktif: true
    },
    {
        id: "3",
        no: 3,
        nama: "Ahmad Dahlan, S.Ag",
        nip: "198003032005031003",
        jabatan: "Pembina",
        status: "Tetap",
        kampus: "KAMPUS II PUTRA",
        aktif: false
    },
    {
        id: "4",
        no: 4,
        nama: "Siti Aisyah",
        nip: "199504042020042004",
        jabatan: "Karyawan",
        status: "Magang",
        kampus: "HMQ TELKOM",
        aktif: true
    }
];

export default function DataPegawaiPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Master Data Pegawai</h1>
                    <p className="text-sm text-slate-500 mt-1">Manajemen direktori dan status kepegawaian</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Pegawai"
                    value="170"
                    subtitle="Orang"
                    icon="group"
                    trend="up"
                    trendValue="Total keseluruhan"
                    color="primary"
                />
                <StatCard
                    title="Aktif"
                    value="145"
                    subtitle="Orang"
                    icon="person_check"
                    trend="up"
                    trendValue="Pegawai aktif"
                    color="success"
                />
                <StatCard
                    title="Pendaftar"
                    value="0"
                    subtitle="Orang"
                    icon="person_add"
                    trend="neutral"
                    trendValue="Meninjau berkas"
                    color="warning"
                />
                <StatCard
                    title="Tidak Aktif"
                    value="25"
                    subtitle="Orang"
                    icon="person_off"
                    trend="down"
                    trendValue="Non-aktif / Resign"
                    color="danger"
                />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                {/* Advanced Mobile-friendly Filter Header */}
                <div className="p-3 md:p-4 border-b border-slate-200 bg-slate-50 flex flex-col gap-3 md:gap-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto custom-scrollbar css-hide-scrollbar-on-mobile">
                            <button className="bg-[#00642F] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-semibold transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                                <span className="material-symbols-outlined text-[16px]">visibility</span>
                                Semua
                            </button>
                            <button className="bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-semibold transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                                <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
                                Pendaftaran
                            </button>
                            <button className="bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-semibold transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                                <span className="material-symbols-outlined text-[16px]">person_off</span>
                                Non Aktif
                            </button>
                        </div>
                        <button className="w-full md:w-auto bg-[#FFD500] hover:bg-[#e6c000] text-slate-800 px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-sm flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">person_add</span>
                            Tambah
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full">
                        <select className="px-3 md:px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all text-slate-700 font-medium w-full sm:w-auto">
                            <option value="">--- Semua Kampus ---</option>
                            <option value="KAMPUS I PUTRA">KAMPUS I PUTRA</option>
                            <option value="KAMPUS II PUTRA">KAMPUS II PUTRA</option>
                            <option value="KAMPUS PUTRI">KAMPUS PUTRI</option>
                            <option value="HMQ TELKOM">HMQ TELKOM</option>
                        </select>
                        <div className="relative w-full">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
                            <input
                                type="text"
                                placeholder="Cari nama atau NIP..."
                                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile List Cards - Hidden on Desktop */}
                <div className="md:hidden flex flex-col gap-3 p-3 bg-slate-50/50">
                    {pegawaiData.map((item) => (
                        <div key={item.id} className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 relative overflow-hidden">
                            {/* Accent line for active/inactive */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.aktif ? 'bg-emerald-500' : 'bg-red-500'}`}></div>

                            <div className="flex justify-between items-start pl-2">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 min-w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold border border-slate-200 shadow-sm text-sm">
                                        {item.nama.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-[13px] leading-tight">{item.nama}</h3>
                                        <p className="text-[11px] text-slate-500 font-mono mt-0.5">{item.nip}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    {item.aktif ? (
                                        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-lg border border-emerald-100">
                                            Aktif
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-lg border border-red-100">
                                            Non-Aktif
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="pl-2 border-t border-slate-100 pt-2 flex justify-between items-end">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-[14px] text-slate-400">badge</span>
                                        <span className="text-[11px] font-medium text-slate-700">{item.jabatan} <span className="text-slate-400 font-normal">({item.status})</span></span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-[14px] text-slate-400">domain</span>
                                        <span className="text-[10px] font-semibold text-slate-600">{item.kampus}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <button className="h-7 w-7 rounded-lg bg-blue-50 text-blue-600 active:bg-blue-600 active:text-white flex items-center justify-center transition-colors">
                                        <span className="material-symbols-outlined text-[14px]">visibility</span>
                                    </button>
                                    <button className="h-7 w-7 rounded-lg bg-amber-50 text-amber-600 active:bg-amber-600 active:text-white flex items-center justify-center transition-colors">
                                        <span className="material-symbols-outlined text-[14px]">edit</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Table - Hidden on Mobile */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                                <th className="p-4 font-semibold border-b border-slate-200 w-16 text-center">No</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Nama & NIP</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Jabatan</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Kampus</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Status</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center w-28">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                            {pegawaiData.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="p-4 text-center font-medium">{item.no}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                                                {item.nama.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800">{item.nama}</p>
                                                <p className="text-xs text-slate-500 font-mono mt-0.5">{item.nip}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <p className="font-medium text-slate-700">{item.jabatan}</p>
                                        <span className="inline-block mt-1 bg-slate-100 text-slate-600 border border-slate-200 text-[10px] px-2 py-0.5 rounded-full font-semibold">
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className="font-medium text-slate-600 text-xs px-2 py-1 bg-slate-50 rounded-lg border border-slate-200 whitespace-nowrap">
                                            {item.kampus}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        {item.aktif ? (
                                            <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                Aktif
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full border border-red-200">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                                Tidak Aktif
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-center gap-1">
                                            <button className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors tooltip" data-tip="Detail">
                                                <span className="material-symbols-outlined text-[16px]">visibility</span>
                                            </button>
                                            <button className="h-8 w-8 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white flex items-center justify-center transition-colors tooltip" data-tip="Edit">
                                                <span className="material-symbols-outlined text-[16px]">edit</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Mobile & Desktop */}
                <div className="p-3 md:p-4 border-t border-slate-200 bg-white flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-between text-xs md:text-sm text-slate-500">
                    <div>1-4 dari 145 entri</div>
                    <div className="flex gap-1 md:gap-1.5">
                        <button className="px-2 md:px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 transition-colors" disabled>Prev</button>
                        <button className="px-2 md:px-3 py-1 rounded-lg bg-[#00642F] text-white font-medium shadow-sm">1</button>
                        <button className="px-2 md:px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors hidden sm:block">2</button>
                        <button className="px-2 md:px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors hidden sm:block">3</button>
                        <button className="px-2 md:px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
