"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function DashboardPage() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        .glass-panel-dash {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
        }
        .dark .glass-panel-dash {
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(27, 94, 32, 0.1);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .sidebar-glass {
             background: #1B5E20;
             position: relative;
             overflow: hidden;
             box-shadow: 4px 0 24px rgba(0,0,0,0.1);
        }
        .sidebar-glass::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
            pointer-events: none;
        }
      `}} />
            <div className={`fixed inset-0 z-50 flex h-screen w-full flex-col bg-[#F8FAFC] text-slate-900 overflow-hidden selection:bg-[#FBC02D] selection:text-[#1B5E20] ${manrope.className}`}>
                <header className="bg-white sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 px-6 py-3 shadow-sm">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 relative items-center justify-center rounded-xl overflow-hidden bg-white">
                                <Image unoptimized fill alt="Al-Imam Ashim Logo" className="object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3XY7PK-8vdLemNULCRnnCO4otq3vet0Fd8Y-VO2j4jxSxgfkPWKN1DAgBgC1tnYgbQo5StFXyglxtnOLS2dzQxeMPIgbW8VRu7wUKNFq3RnyCqWS-GimChr2K911lGJXpYxNf9y2Ijo-gqz0IIVElEKO97arG4kAn9bKw8TLFtMVhqMbOPayR9mBv5OTvf-A-jCiPetXM2QfwJ5VILLuSMNwNyRYGyi0IHUIm0ZgTEQZ16gH8UC8ViblwaQh1-K1bvZjVC9z95zc" />
                            </div>
                            <h2 className="text-xl font-bold leading-tight tracking-tight text-primary">SIM Pesantren</h2>
                        </div>
                        <div className="hidden md:flex relative group">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                <span className="material-symbols-outlined">search</span>
                            </div>
                            <input className="block w-full min-w-[320px] rounded-xl border-none bg-slate-100 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="Search data santri, ustadz, class..." type="text" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <span className="text-xs text-slate-500 border border-slate-600 rounded px-1.5 py-0.5">⌘K</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-white animate-pulse"></span>
                        </button>
                        <button className="rounded-full p-2 text-slate-500 hover:bg-slate-100 transition-colors">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                        <div className="h-8 w-[1px] bg-slate-200 mx-1"></div>
                        <button className="flex items-center gap-3 rounded-full pl-1 pr-3 py-1 hover:bg-slate-100 transition-all">
                            <div className="h-9 w-9 relative overflow-hidden rounded-full border-2 border-primary/20 shadow-sm" data-alt="Profile picture of the administrator">
                                <Image unoptimized fill alt="Admin Profile" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAM8iapcWx3s_nYyjhgKCW4YC5ZXnirI5E4Ykp5Vzb7rOkBS9erkD37imFgGwAMGl9lWZZxvy0c92Zj4rFdnvSgAxbO2IR-qA1VkOOTgTmKAQ_h_XftRDkUpQL3C8wikivIBvyv2rdvnmxqPnPbixepdfA3hUXTRkySVepuBRnhV_EVd2OPK8fwYikKM5VXxx9Wu-wznxbTqKgkgPsYbk28MVlFUIVDtcKw8dOvP_IAmHVNQXrcwnkeS7DZEvnE7UzFRTgono6NMo" />
                            </div>
                            <div className="hidden lg:flex flex-col items-start">
                                <span className="text-sm font-semibold text-primary leading-none">Ahmad Fauzi</span>
                                <span className="text-xs text-slate-500 leading-none mt-1">Super Admin</span>
                            </div>
                            <span className="material-symbols-outlined text-slate-400 text-lg">expand_more</span>
                        </button>
                    </div>
                </header>

                <div className="flex flex-1 overflow-hidden">
                    <aside className="hidden w-72 flex-col overflow-y-auto sidebar-glass px-4 py-6 custom-scrollbar lg:flex text-white z-20 shadow-xl">
                        <div className="mb-8 flex justify-center">
                            <div className="h-28 w-28 relative rounded-full bg-white/10 p-2 shadow-lg ring-4 ring-white/20 backdrop-blur-sm">
                                <Image unoptimized fill alt="Sidebar Logo" className="object-contain drop-shadow-md p-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj0sySEKceOn2OrG0j5Wl6_Ulb5NdlLatCeI3tAaKqEuU1_rWACj8Z1r-FCNh6cY2OPw_e4omR3Xt3oqHa-FOfBgwHsHn_CJ_23LxTfW2YMvZE1z4SQq_w-AlQQZDvBWLEJj39KgMR7MLBBmPPJMOpM1NE7q2maVKOdTmBkIYuB30gA0__F9pU2aBi07ZyEesLyvK1wxs0iEaa335Xhrd9xSc4MoMz_Eha0RaSvbJyjiw9FRsOTDgXB-kmugMmEfnidY6XtVfJiVE" />
                            </div>
                        </div>
                        <div className="mb-6 px-2 text-center">
                            <h3 className="font-bold text-lg text-white drop-shadow-sm">Al-Imam Ashim</h3>
                            <p className="text-xs text-green-100/80">Makassar</p>
                        </div>
                        <div className="mb-2 px-2">
                            <p className="text-xs font-bold uppercase tracking-wider text-green-200/70">Main Menu</p>
                        </div>
                        <nav className="flex flex-col gap-1 relative z-10">
                            <Link className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-accent border-l-4 border-accent transition-colors shadow-sm" href="/dashboard">
                                <span className="material-symbols-outlined filled">dashboard</span>
                                <span className="font-medium">Dashboard</span>
                            </Link>
                            <div className="mt-4 px-2">
                                <p className="text-xs font-bold uppercase tracking-wider text-green-200/70 mb-2">Manajemen</p>
                            </div>
                            <button className="group flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-white/90 hover:bg-[#4CAF50]/30 hover:text-white transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-icon-green group-hover:text-accent transition-colors">domain</span>
                                    <span className="font-medium">Kelembagaan</span>
                                </div>
                                <span className="material-symbols-outlined text-lg text-white/40">chevron_right</span>
                            </button>
                            <button className="group flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-white/90 hover:bg-[#4CAF50]/30 hover:text-white transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-icon-green group-hover:text-accent transition-colors">school</span>
                                    <span className="font-medium">Data Ustadz</span>
                                </div>
                            </button>
                            <button className="group flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-white/90 hover:bg-[#4CAF50]/30 hover:text-white transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-icon-green group-hover:text-accent transition-colors">groups</span>
                                    <span className="font-medium">Data Santri</span>
                                </div>
                            </button>
                            <button className="group flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-white/90 hover:bg-[#4CAF50]/30 hover:text-white transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-icon-green group-hover:text-accent transition-colors">class</span>
                                    <span className="font-medium">Data Kelas</span>
                                </div>
                            </button>
                            <div className="mt-4 px-2">
                                <p className="text-xs font-bold uppercase tracking-wider text-green-200/70 mb-2">Akademik</p>
                            </div>
                            <button className="group flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-white/90 hover:bg-[#4CAF50]/30 hover:text-white transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-icon-green group-hover:text-accent transition-colors">calendar_month</span>
                                    <span className="font-medium">Jadwal</span>
                                </div>
                            </button>
                            <button className="group flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-white/90 hover:bg-[#4CAF50]/30 hover:text-white transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-icon-green group-hover:text-accent transition-colors">grade</span>
                                    <span className="font-medium">Nilai Santri</span>
                                </div>
                            </button>
                            <div className="mt-4 px-2">
                                <p className="text-xs font-bold uppercase tracking-wider text-green-200/70 mb-2">Keuangan</p>
                            </div>
                            <button className="group flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-white/90 hover:bg-[#4CAF50]/30 hover:text-white transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-icon-green group-hover:text-accent transition-colors">payments</span>
                                    <span className="font-medium">SPP &amp; Tagihan</span>
                                </div>
                            </button>
                        </nav>
                        <div className="mt-auto pt-6 border-t border-white/10 relative z-10">
                            <Link href="/">
                                <button className="group flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-white/80 hover:bg-red-500/20 hover:text-red-100 transition-colors">
                                    <span className="material-symbols-outlined">logout</span>
                                    <span className="font-medium">Logout</span>
                                </button>
                            </Link>
                        </div>
                    </aside>

                    <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar bg-[#F8FAFC]">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-primary">Welcome Back, Ustadz Ahmad 👋</h1>
                                <p className="text-slate-500 mt-1">Here is the summary of what&apos;s happening at Al-Imam Ashim Makassar today.</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm text-card-text">
                                    <span className="material-symbols-outlined text-lg">download</span>
                                    Export Report
                                </button>
                                <button className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-slate-900 rounded-lg text-sm font-bold px-4 py-2 transition-colors shadow-lg shadow-accent/25 ring-1 ring-accent-dark/20">
                                    <span className="material-symbols-outlined text-lg">add</span>
                                    New Entry
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <div className="glass-panel-dash p-5 rounded-2xl flex flex-col gap-4 group hover:shadow-lg transition-all bg-white border border-slate-100">
                                <div className="flex justify-between items-start">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">school</span>
                                    </div>
                                    <span className="flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/10">
                                        <span className="material-symbols-outlined text-sm">trending_up</span> +12%
                                    </span>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm font-medium">Total Santri</p>
                                    <h3 className="text-2xl font-bold text-card-text mt-1">1,250</h3>
                                </div>
                            </div>
                            <div className="glass-panel-dash p-5 rounded-2xl flex flex-col gap-4 group hover:shadow-lg transition-all bg-white border border-slate-100">
                                <div className="flex justify-between items-start">
                                    <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent-dark group-hover:bg-accent group-hover:text-slate-900 transition-colors">
                                        <span className="material-symbols-outlined">person_celebrate</span>
                                    </div>
                                    <span className="flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/10">
                                        <span className="material-symbols-outlined text-sm">trending_up</span> +4%
                                    </span>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm font-medium">Total Ustadz</p>
                                    <h3 className="text-2xl font-bold text-card-text mt-1">85</h3>
                                </div>
                            </div>
                            <div className="glass-panel-dash p-5 rounded-2xl flex flex-col gap-4 group hover:shadow-lg transition-all bg-white border border-slate-100">
                                <div className="flex justify-between items-start">
                                    <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">meeting_room</span>
                                    </div>
                                    <span className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-500/10 px-2 py-1 rounded-full border border-slate-200">
                                        <span className="material-symbols-outlined text-sm">remove</span> 0%
                                    </span>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm font-medium">Kelas Aktif</p>
                                    <h3 className="text-2xl font-bold text-card-text mt-1">42</h3>
                                </div>
                            </div>
                            <div className="glass-panel-dash p-5 rounded-2xl flex flex-col gap-4 group hover:shadow-lg transition-all bg-white border border-slate-100">
                                <div className="flex justify-between items-start">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">account_balance_wallet</span>
                                    </div>
                                    <span className="flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/10">
                                        <span className="material-symbols-outlined text-sm">trending_up</span> +8.2%
                                    </span>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm font-medium">Pembayaran Bulan Ini</p>
                                    <h3 className="text-2xl font-bold text-card-text mt-1">Rp 450M</h3>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                            <div className="lg:col-span-2 glass-panel-dash rounded-2xl p-6 bg-white border border-slate-100 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-card-text">Statistik Kehadiran &amp; Pembayaran</h3>
                                        <p className="text-sm text-slate-500">Overview of yearly performance</p>
                                    </div>
                                    <select className="bg-slate-100 border-none rounded-lg text-sm px-3 py-1.5 focus:ring-1 focus:ring-primary text-slate-700 outline-none">
                                        <option>This Year</option>
                                        <option>Last Year</option>
                                    </select>
                                </div>
                                <div className="relative h-[300px] w-full bg-gradient-to-b from-primary/5 to-transparent rounded-xl border border-primary/10 p-4 flex flex-col justify-end" data-alt="Bar chart showing attendance and payment statistics over the months">
                                    <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
                                        <div className="w-full h-px bg-slate-200 border-dashed border-b border-slate-300"></div>
                                        <div className="w-full h-px bg-slate-200 border-dashed border-b border-slate-300"></div>
                                        <div className="w-full h-px bg-slate-200 border-dashed border-b border-slate-300"></div>
                                        <div className="w-full h-px bg-slate-200 border-dashed border-b border-slate-300"></div>
                                    </div>
                                    <div className="flex items-end justify-between h-[220px] px-2 z-10 gap-2">
                                        <div className="w-full bg-primary/30 rounded-t-sm h-[40%] hover:bg-primary/50 transition-all cursor-pointer relative group"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-dark px-2 py-1 rounded text-xs text-white">Jan</div></div>
                                        <div className="w-full bg-primary/40 rounded-t-sm h-[55%] hover:bg-primary/60 transition-all cursor-pointer relative group"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-dark px-2 py-1 rounded text-xs text-white">Feb</div></div>
                                        <div className="w-full bg-primary/50 rounded-t-sm h-[35%] hover:bg-primary/70 transition-all cursor-pointer relative group"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-dark px-2 py-1 rounded text-xs text-white">Mar</div></div>
                                        <div className="w-full bg-primary/60 rounded-t-sm h-[70%] hover:bg-primary/80 transition-all cursor-pointer relative group"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-dark px-2 py-1 rounded text-xs text-white">Apr</div></div>
                                        <div className="w-full bg-primary/70 rounded-t-sm h-[60%] hover:bg-primary/90 transition-all cursor-pointer relative group"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-dark px-2 py-1 rounded text-xs text-white">May</div></div>
                                        <div className="w-full bg-accent rounded-t-sm h-[85%] hover:bg-accent-dark transition-all cursor-pointer relative group shadow-[0_0_15px_rgba(251,192,45,0.4)]"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-dark px-2 py-1 rounded text-xs text-white">Jun</div></div>
                                        <div className="w-full bg-primary/70 rounded-t-sm h-[65%] hover:bg-primary/90 transition-all cursor-pointer relative group"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-dark px-2 py-1 rounded text-xs text-white">Jul</div></div>
                                        <div className="w-full bg-primary/60 rounded-t-sm h-[50%] hover:bg-primary/80 transition-all cursor-pointer relative group"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-dark px-2 py-1 rounded text-xs text-white">Aug</div></div>
                                        <div className="w-full bg-primary/50 rounded-t-sm h-[75%] hover:bg-primary/70 transition-all cursor-pointer relative group"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-dark px-2 py-1 rounded text-xs text-white">Sep</div></div>
                                        <div className="w-full bg-primary/40 rounded-t-sm h-[60%] hover:bg-primary/60 transition-all cursor-pointer relative group"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-dark px-2 py-1 rounded text-xs text-white">Oct</div></div>
                                        <div className="w-full bg-primary/30 rounded-t-sm h-[45%] hover:bg-primary/50 transition-all cursor-pointer relative group"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-dark px-2 py-1 rounded text-xs text-white">Nov</div></div>
                                        <div className="w-full bg-primary/20 rounded-t-sm h-[30%] hover:bg-primary/40 transition-all cursor-pointer relative group"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-dark px-2 py-1 rounded text-xs text-white">Dec</div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="glass-panel-dash rounded-2xl p-6 bg-white border border-slate-100 shadow-sm">
                                    <h3 className="text-lg font-bold text-card-text mb-4">Quick Actions</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-accent hover:text-slate-900 group transition-all shadow-sm ring-1 ring-slate-200/50 hover:ring-accent-dark/20">
                                            <span className="material-symbols-outlined text-2xl text-primary group-hover:text-slate-900">person_add</span>
                                            <span className="text-xs font-medium">Add Santri</span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-accent hover:bg-accent-dark hover:text-slate-900 group transition-all shadow-md ring-1 ring-accent-dark/20">
                                            <span className="material-symbols-outlined text-2xl text-slate-900">payments</span>
                                            <span className="text-xs font-bold text-slate-900">Bayar SPP</span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-accent hover:text-slate-900 group transition-all shadow-sm ring-1 ring-slate-200/50 hover:ring-accent-dark/20">
                                            <span className="material-symbols-outlined text-2xl text-primary group-hover:text-slate-900">campaign</span>
                                            <span className="text-xs font-medium">Broadcast</span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-accent hover:text-slate-900 group transition-all shadow-sm ring-1 ring-slate-200/50 hover:ring-accent-dark/20">
                                            <span className="material-symbols-outlined text-2xl text-primary group-hover:text-slate-900">inventory_2</span>
                                            <span className="text-xs font-medium">Stok Baru</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="glass-panel-dash rounded-2xl p-6 flex-1 bg-white border border-slate-100 shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-bold text-card-text">Notifications</h3>
                                        <button className="text-xs text-primary hover:text-accent-dark font-medium">View All</button>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex gap-3 items-start">
                                            <div className="mt-1 h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
                                                <span className="material-symbols-outlined text-sm">info</span>
                                            </div>
                                            <div>
                                                <p className="text-sm text-card-text font-medium">System Update v2.0</p>
                                                <p className="text-xs text-slate-500 mt-0.5">The system will be undergoing maintenance...</p>
                                                <span className="text-[10px] text-slate-400 mt-1 block">2 mins ago</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-start">
                                            <div className="mt-1 h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent-dark shrink-0">
                                                <span className="material-symbols-outlined text-sm">warning</span>
                                            </div>
                                            <div>
                                                <p className="text-sm text-card-text font-medium">Pending Payments</p>
                                                <p className="text-xs text-slate-500 mt-0.5">5 Santri have pending SPP payments.</p>
                                                <span className="text-[10px] text-slate-400 mt-1 block">1 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-start">
                                            <div className="mt-1 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                            </div>
                                            <div>
                                                <p className="text-sm text-card-text font-medium">Report Generated</p>
                                                <p className="text-xs text-slate-500 mt-0.5">Monthly financial report is ready.</p>
                                                <span className="text-[10px] text-slate-400 mt-1 block">3 hours ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel-dash rounded-2xl p-6 overflow-hidden bg-white border border-slate-100 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-card-text">Recent Activity</h3>
                                <div className="flex gap-2">
                                    <div className="relative">
                                        <input className="bg-slate-50 border-none rounded-lg text-sm pl-8 pr-3 py-1.5 focus:ring-1 focus:ring-primary w-40 text-slate-900 placeholder-slate-500 outline-none" placeholder="Search..." type="text" />
                                        <span className="material-symbols-outlined absolute left-2 top-1.5 text-slate-400 text-sm">search</span>
                                    </div>
                                    <button className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-500">
                                        <span className="material-symbols-outlined text-lg">filter_list</span>
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                                        <tr>
                                            <th className="px-4 py-3">ID Transaksi</th>
                                            <th className="px-4 py-3">Santri</th>
                                            <th className="px-4 py-3">Type</th>
                                            <th className="px-4 py-3">Amount</th>
                                            <th className="px-4 py-3">Status</th>
                                            <th className="px-4 py-3">Date</th>
                                            <th className="px-4 py-3 text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        <tr className="group hover:bg-slate-50 transition-colors">
                                            <td className="px-4 py-3 font-mono text-slate-500">#TRX-9821</td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">MF</div>
                                                    <div>
                                                        <div className="font-medium text-card-text">Muhammad Fatih</div>
                                                        <div className="text-xs text-slate-500">Kelas 10A</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-slate-600">SPP Bulanan</td>
                                            <td className="px-4 py-3 font-medium text-card-text">Rp 500.000</td>
                                            <td className="px-4 py-3">
                                                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                                                    Paid
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-slate-500">Oct 24, 2023</td>
                                            <td className="px-4 py-3 text-right">
                                                <button className="text-slate-400 hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined text-lg">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="group hover:bg-slate-50 transition-colors">
                                            <td className="px-4 py-3 font-mono text-slate-500">#TRX-9822</td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-600 text-xs font-bold">AZ</div>
                                                    <div>
                                                        <div className="font-medium text-card-text">Aisyah Zahra</div>
                                                        <div className="text-xs text-slate-500">Kelas 11B</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-slate-600">Uang Gedung</td>
                                            <td className="px-4 py-3 font-medium text-card-text">Rp 2.500.000</td>
                                            <td className="px-4 py-3">
                                                <span className="inline-flex items-center gap-1 rounded-full bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent-dark">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-accent-dark"></span>
                                                    Pending
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-slate-500">Oct 24, 2023</td>
                                            <td className="px-4 py-3 text-right">
                                                <button className="text-slate-400 hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined text-lg">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="group hover:bg-slate-50 transition-colors">
                                            <td className="px-4 py-3 font-mono text-slate-500">#TRX-9823</td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-600 text-xs font-bold">UR</div>
                                                    <div>
                                                        <div className="font-medium text-card-text">Umar Rizki</div>
                                                        <div className="text-xs text-slate-500">Kelas 12A</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-slate-600">Kitab &amp; Buku</td>
                                            <td className="px-4 py-3 font-medium text-card-text">Rp 150.000</td>
                                            <td className="px-4 py-3">
                                                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                                                    Paid
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-slate-500">Oct 23, 2023</td>
                                            <td className="px-4 py-3 text-right">
                                                <button className="text-slate-400 hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined text-lg">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
