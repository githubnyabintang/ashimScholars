import React from "react";

export default function ProgramTahfidzPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Data Hafalan Santri</h1>
                    <p className="text-sm text-slate-500 mt-1">Lihat dan kelola data catatan hafalan santri</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                    <h2 className="font-bold text-slate-800 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#00642F]">auto_stories</span>
                        Pilih Data Hafalan
                    </h2>
                    <div className="flex gap-2">
                        <button className="bg-slate-100 text-[#00642F] border border-[#00642F]/20 hover:bg-[#00642F]/10 px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-sm flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                            Bulan Ini
                        </button>
                        <button className="bg-slate-100 text-[#00642F] border border-[#00642F]/20 hover:bg-[#00642F]/10 px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-sm flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">history</span>
                            Bulan Kemarin
                        </button>
                    </div>
                </div>

                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        {/* Pilih Pegawai */}
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-[#00642F]/30 transition-colors group">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl text-[#00642F]">badge</span>
                            </div>
                            <h3 className="font-bold text-slate-800 text-lg mb-2">Lihat Berdasarkan Pegawai / Pembina</h3>
                            <p className="text-slate-500 text-sm mb-6">Pilih nama pegawai untuk melihat catatan hafalan santri yang dibina.</p>

                            <div className="form-control w-full relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10 pointer-events-none">search</span>
                                <select className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] text-slate-700 font-medium appearance-none shadow-sm cursor-pointer hover:border-slate-300 transition-colors">
                                    <option value="">--- Pilih Pegawai ---</option>
                                    <option value="1">Muh Rafik Hasan, S.Pd</option>
                                    <option value="2">Nurhalisa, S.Pd</option>
                                    <option value="3">HAMDANA</option>
                                    <option value="4">Koirul Anam, S.Pd</option>
                                    <option value="5">Nurannisa</option>
                                    <option value="6">Ahmad Naufal</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">arrow_drop_down</span>
                            </div>
                        </div>

                        {/* Pilih Santri */}
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:border-blue-500/30 transition-colors group">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl text-blue-600">face</span>
                            </div>
                            <h3 className="font-bold text-slate-800 text-lg mb-2">Lihat Berdasarkan Santri</h3>
                            <p className="text-slate-500 text-sm mb-6">Pilih nama santri untuk melihat catatan hafalan secara individu.</p>

                            <div className="form-control w-full relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10 pointer-events-none">search</span>
                                <select className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-700 font-medium appearance-none shadow-sm cursor-pointer hover:border-slate-300 transition-colors">
                                    <option value="">--- Pilih Santri ---</option>
                                    <option value="1">Ghoziyah Hafizah Bahtiar</option>
                                    <option value="2">Andi Fatih Muhammad Azka</option>
                                    <option value="3">Muh. Aqshan Al-Ghazali</option>
                                    <option value="4">Andi Ainur Ridho</option>
                                    <option value="5">Aqilah Muthmainnah Fadil</option>
                                    <option value="6">Ahmad Ashim</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">arrow_drop_down</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
