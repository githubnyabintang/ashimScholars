"use client";

import React, { useState, useEffect } from "react";
import PegawaiKampusChart from "@/components/dashboard/PegawaiKampusChart";
import SantriKampusChart from "@/components/dashboard/SantriKampusChart";
import SantriProgramChart from "@/components/dashboard/SantriProgramChart";
import AbsensiChart from "@/components/dashboard/AbsensiChart";
import MobilePegawaiKampusChart from "@/components/dashboard/MobilePegawaiKampusChart";
import MobileSantriKampusChart from "@/components/dashboard/MobileSantriKampusChart";
import MobileSantriProgramChart from "@/components/dashboard/MobileSantriProgramChart";
import MobileAbsensiChart from "@/components/dashboard/MobileAbsensiChart";

export default function DashboardPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Prevent hydration mismatch

    return (
        <div className="max-w-[1600px] mx-auto opacity-0 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">Selamat Datang, Ustadz 👋</h1>
                    <p className="text-slate-500 mt-1 text-sm font-medium">Ini adalah ringkasan sistem informasi Al-Imam Ashim hari ini.</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                    <div className="flex-1 sm:flex-none glass-panel-dash rounded-xl px-4 py-2 bg-white/60 flex items-center justify-center sm:justify-between text-sm shadow-sm gap-2 whitespace-nowrap">
                        <div className="font-medium text-slate-500">Periode: <span className="text-primary font-bold ml-1">02-2026</span></div>
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-[#FFD500] hover:bg-[#FACC15] text-[#00642F] rounded-xl text-sm font-bold px-5 py-2.5 transition-all shadow-lg shadow-[#FFD500]/20 hover:-translate-y-0.5 active:translate-y-0">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        <span className="hidden sm:inline">Entri Baru</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                <div className="glass-panel-dash p-6 rounded-2xl flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white relative overflow-hidden delay-100">
                    <div className="absolute -right-4 -top-4 text-primary/5 group-hover:text-primary/10 transition-colors transform group-hover:scale-110 duration-500">
                        <span className="material-symbols-outlined !text-[120px]">badge</span>
                    </div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="h-14 w-14 rounded-2xl bg-primary/[0.08] flex items-center justify-center text-primary border border-primary/10 shadow-inner group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-[28px]">badge</span>
                        </div>
                        <span className="flex items-center gap-1 text-[11px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                            <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 2.4%
                        </span>
                    </div>
                    <div className="relative z-10">
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Pegawai</p>
                        <h3 className="text-3xl font-black text-slate-800 tracking-tight">145</h3>
                    </div>
                </div>

                <div className="glass-panel-dash p-6 rounded-2xl flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white relative overflow-hidden delay-200">
                    <div className="absolute -right-4 -top-4 text-[#8CC63F]/10 group-hover:text-[#8CC63F]/20 transition-colors transform group-hover:scale-110 duration-500">
                        <span className="material-symbols-outlined !text-[120px]">school</span>
                    </div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="h-14 w-14 rounded-2xl bg-[#8CC63F]/10 flex items-center justify-center text-[#6da12d] border border-[#8CC63F]/20 shadow-inner group-hover:bg-[#8CC63F] group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-[28px]">school</span>
                        </div>
                        <span className="flex items-center gap-1 text-[11px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                            <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 12%
                        </span>
                    </div>
                    <div className="relative z-10">
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Santri</p>
                        <h3 className="text-3xl font-black text-slate-800 tracking-tight">1,250</h3>
                    </div>
                </div>

                <div className="glass-panel-dash p-6 rounded-2xl flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white relative overflow-hidden delay-300">
                    <div className="absolute -right-4 -top-4 text-orange-500/5 group-hover:text-orange-500/10 transition-colors transform group-hover:scale-110 duration-500">
                        <span className="material-symbols-outlined !text-[120px]">meeting_room</span>
                    </div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="h-14 w-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 border border-orange-100 shadow-inner group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-[28px]">meeting_room</span>
                        </div>
                        <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                            <span className="material-symbols-outlined text-[14px]">horizontal_rule</span> 0%
                        </span>
                    </div>
                    <div className="relative z-10">
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Kelas Aktif</p>
                        <h3 className="text-3xl font-black text-slate-800 tracking-tight">42</h3>
                    </div>
                </div>

                <div className="glass-panel-dash p-6 rounded-2xl flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white relative overflow-hidden delay-100">
                    <div className="absolute -right-4 -top-4 text-[#FFD500]/10 group-hover:text-[#FFD500]/20 transition-colors transform group-hover:scale-110 duration-500">
                        <span className="material-symbols-outlined !text-[120px]">account_balance_wallet</span>
                    </div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="h-14 w-14 rounded-2xl bg-[#FFD500]/20 flex items-center justify-center text-[#ccaa00] border border-[#FFD500]/30 shadow-inner group-hover:bg-[#FFD500] group-hover:text-[#00642F] transition-colors duration-300">
                            <span className="material-symbols-outlined text-[28px]">account_balance_wallet</span>
                        </div>
                        <span className="flex items-center gap-1 text-[11px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                            <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 8.2%
                        </span>
                    </div>
                    <div className="relative z-10">
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Kas Bulan Ini</p>
                        <h3 className="text-3xl font-black text-slate-800 tracking-tight">Rp 25M</h3>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mb-5 mt-10">
                <h2 className="text-xl font-extrabold text-slate-800">Statistik Data Induk</h2>
                <button className="text-sm font-semibold text-primary hover:text-green-700 bg-primary/5 hover:bg-primary/10 px-4 py-1.5 rounded-full transition-colors">Unduh Laporan</button>
            </div>

            {/* Desktop Charts - Hidden on Mobile */}
            <div className="hidden lg:grid grid-cols-2 gap-6 mb-8">
                <div className="glass-panel-dash bg-white rounded-2xl p-1 shadow-sm hover:shadow-md transition-shadow">
                    <PegawaiKampusChart />
                </div>
                <div className="glass-panel-dash bg-white rounded-2xl p-1 shadow-sm hover:shadow-md transition-shadow">
                    <SantriKampusChart />
                </div>
                <div className="glass-panel-dash bg-white rounded-2xl p-1 shadow-sm hover:shadow-md transition-shadow">
                    <SantriProgramChart />
                </div>
                <div className="glass-panel-dash bg-white rounded-2xl p-1 shadow-sm hover:shadow-md transition-shadow">
                    <AbsensiChart />
                </div>
            </div>

            {/* Mobile Charts - Hidden on Desktop */}
            <div className="grid lg:hidden grid-cols-1 gap-2 sm:gap-4 mb-2">
                <MobilePegawaiKampusChart />
                <MobileSantriKampusChart />
                <MobileSantriProgramChart />
                <MobileAbsensiChart />
            </div>

            {/* Extra Bottom Space reduced for tighter fit to bottom nav on mobile */}
            <div className="h-6 lg:h-12"></div>
        </div>
    );
}
