import React from 'react';

// Dummy static data for provinces
const provinceData = [
    { id: '1', name: 'ACEH', kabupatenUrl: '#' },
    { id: '2', name: 'B A L I', kabupatenUrl: '#' },
    { id: '3', name: 'BANGKA BELITUNG', kabupatenUrl: '#' },
    { id: '4', name: 'BANTEN', kabupatenUrl: '#' },
    { id: '5', name: 'BENGKULU', kabupatenUrl: '#' },
    { id: '6', name: 'DI YOGYAKARTA', kabupatenUrl: '#' },
    { id: '7', name: 'DKI JAKARTA', kabupatenUrl: '#' },
    { id: '8', name: 'GORONTALO', kabupatenUrl: '#' },
    { id: '9', name: 'J A M B I', kabupatenUrl: '#' },
    { id: '10', name: 'JAWA BARAT', kabupatenUrl: '#' },
    { id: '11', name: 'JAWA TENGAH', kabupatenUrl: '#' },
    { id: '12', name: 'JAWA TIMUR', kabupatenUrl: '#' },
];

export default function DataSantriPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Data Santri</h1>
                    <p className="text-sm text-slate-500 mt-1">Kelola data santri, kelompok, dan program kampus</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
                <div className="p-6">
                    <div className="flex flex-wrap gap-3 mb-8">
                        <button className="bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100 px-4 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                            Lihat Semua Data
                        </button>
                        <button className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 px-4 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">map</span>
                            Provinsi
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Update Kelompok Card */}
                        <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 hover:border-[#00642F]/30 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#00642F]/10 flex items-center justify-center text-[#00642F]">
                                    <span className="material-symbols-outlined">group</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800">Update Kelompok</h3>
                                    <p className="text-xs text-slate-500">Lihat santri per kelompok</p>
                                </div>
                            </div>
                            <form>
                                <select className="w-full bg-white border border-slate-200 text-slate-700 justify-center text-center rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] appearance-none" required>
                                    <option value="">--- Pilih Kampus ---</option>
                                    <option value="kampus_1_putra">KAMPUS I PUTRA</option>
                                    <option value="kampus_2_putra">KAMPUS II PUTRA</option>
                                    <option value="kampus_putri">KAMPUS PUTRI</option>
                                    <option value="hmq_telkom">HMQ TELKOM</option>
                                </select>
                            </form>
                        </div>

                        {/* Update Program Card */}
                        <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 hover:border-[#00642F]/30 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#00642F]/10 flex items-center justify-center text-[#00642F]">
                                    <span className="material-symbols-outlined">menu_book</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800">Update Program</h3>
                                    <p className="text-xs text-slate-500">Lihat santri per kelas/program</p>
                                </div>
                            </div>
                            <form>
                                <select className="w-full bg-white border border-slate-200 text-slate-700 justify-center text-center rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] appearance-none" required>
                                    <option value="">--- Pilih Kampus ---</option>
                                    <option value="kampus_1_putra">KAMPUS I PUTRA</option>
                                    <option value="kampus_2_putra">KAMPUS II PUTRA</option>
                                    <option value="kampus_putri">KAMPUS PUTRI</option>
                                    <option value="hmq_telkom">HMQ TELKOM</option>
                                </select>
                            </form>
                        </div>

                        {/* Pilih Kampus Card */}
                        <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 hover:border-[#00642F]/30 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#00642F]/10 flex items-center justify-center text-[#00642F]">
                                    <span className="material-symbols-outlined">apartment</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800">Data Per Kampus</h3>
                                    <p className="text-xs text-slate-500">Filter data santri berdasarkan kampus</p>
                                </div>
                            </div>
                            <form>
                                <select className="w-full bg-white border border-slate-200 text-slate-700 justify-center text-center rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] appearance-none" required>
                                    <option value="">--- Pilih Kampus ---</option>
                                    <option value="kampus_1_putra">KAMPUS I PUTRA</option>
                                    <option value="kampus_2_putra">KAMPUS II PUTRA</option>
                                    <option value="kampus_putri">KAMPUS PUTRI</option>
                                    <option value="hmq_telkom">HMQ TELKOM</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simulated Modal for Provinsi Data */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mt-8">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                    <h2 className="font-bold text-slate-800 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#00642F]">map</span>
                        Data Provinsi (Simulasi Modal)
                    </h2>
                </div>
                <div className="p-6">
                    <div className="flex flex-col gap-0">
                        {/* Mobile List Cards Provinsi */}
                        <div className="md:hidden flex flex-col gap-2.5">
                            {provinceData.map((prov) => (
                                <div key={prov.id} className="bg-white border border-slate-100 p-3.5 rounded-xl flex justify-between items-center shadow-sm">
                                    <span className="font-bold text-slate-800 text-[13px]">{prov.name}</span>
                                    <button className="bg-blue-50 hover:bg-blue-100 active:bg-blue-600 active:text-white text-blue-600 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">add</span>
                                        Kabupaten
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Table Provinsi */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                                        <th className="p-4 font-semibold border-b border-slate-200 text-center w-2/3">Nama Provinsi</th>
                                        <th className="p-4 font-semibold border-b border-slate-200 text-center w-1/3">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                                    {provinceData.map((prov) => (
                                        <tr key={prov.id} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-4 text-center font-bold text-slate-800">{prov.name}</td>
                                            <td className="p-4 text-center">
                                                <button className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-1.5 rounded-lg text-xs font-bold shadow-sm transition-colors inline-flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-[14px]">add</span>
                                                    Kabupaten
                                                </button>
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
