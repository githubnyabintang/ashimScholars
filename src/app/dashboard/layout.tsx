"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (window.innerWidth < 768) {
            setIsSidebarOpen(false);
        }
    }, []);

    if (!mounted) return null;

    return (
        <div className={`fixed inset-0 z-50 flex h-screen w-full bg-[#f4f7f6] text-slate-800 overflow-hidden selection:bg-[#FFD500] selection:text-[#00642F] ${manrope.className}`}>
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(148, 163, 184, 0.3);
            border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(148, 163, 184, 0.5);
        }
        .glass-panel-dash {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0,0,0,0.02);
        }
        
        /* Subtle entrance animation */
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.4s ease-out forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}} />

            {/* Backdrop for mobile */}
            <div
                className={`fixed inset-0 bg-slate-900/40 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsSidebarOpen(false)}
            />

            <aside className={`
                absolute md:static inset-y-0 left-0 z-50 flex-col overflow-y-auto overflow-x-hidden
                bg-gradient-to-b from-[#00642F] to-[#004a23] custom-scrollbar text-white shadow-2xl md:shadow-[4px_0_24px_rgba(0,0,0,0.05)]
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${isSidebarOpen
                    ? "w-[280px] translate-x-0 flex py-6 px-4"
                    : "w-0 -translate-x-full opacity-0 pointer-events-none px-0 py-0 flex"}
            `}>
                <div className="flex items-center justify-between px-6 mb-8 md:justify-center">
                    <div className="flex flex-col items-center w-full">
                        <div className="h-[100px] w-[100px] relative rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center p-2 mb-3 shadow-lg border border-white/20 overflow-hidden transition-transform duration-500 hover:scale-105 hover:rotate-3">
                            <img alt="Sidebar Logo" className="object-contain w-[85%] h-[85%]" src="/logo.png" />
                        </div>
                        <div className="text-center">
                            <h3 className="font-extrabold text-xl text-white tracking-tight drop-shadow-sm">Al-Imam Ashim</h3>
                            <p className="text-[13px] text-[#C6F099] font-medium mt-0.5 opacity-90">Makassar</p>
                        </div>
                    </div>
                    {/* Mobile close button */}
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white md:hidden transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                </div>

                <div className="flex-1 px-4 space-y-7">
                    {/* Main Menu */}
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#8CC63F] mb-3 px-3 opacity-90">Main Menu</p>
                        <nav className="flex flex-col gap-1.5 px-0.5">
                            <Link className="group flex items-center gap-4 rounded-r-xl rounded-l-md bg-gradient-to-r from-[#004a23] to-[#005a2b] px-4 py-3.5 text-[#FFD500] border-l-[3px] border-[#FFD500] transition-all relative overflow-hidden shadow-sm shadow-black/10" href="/dashboard">
                                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                <span className="material-symbols-outlined text-[#FFD500] text-[24px] group-hover:scale-110 transition-transform">dashboard_customize</span>
                                <span className="font-semibold text-[15px] tracking-wide">Dashboard</span>
                            </Link>
                        </nav>
                    </div>

                    {/* Manajemen Pesantren */}
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#8CC63F] mb-3 px-3 opacity-90">Manajemen</p>
                        <nav className="flex flex-col gap-1 px-1">
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex w-full items-center justify-between rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer list-none hover:translate-x-1">
                                    <div className="flex items-center gap-3.5">
                                        <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">domain</span>
                                        <span className="font-medium text-[14px]">Lembaga</span>
                                    </div>
                                    <span className="material-symbols-outlined text-lg text-white/40 transition-transform duration-300 group-open:rotate-90">chevron_right</span>
                                </summary>
                                <div className="flex flex-col gap-1 pl-[46px] pr-3 pb-2 pt-1">
                                    <Link href="/dashboard/lembaga/profil" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Profil</Link>
                                    <Link href="/dashboard/lembaga/struktur" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Struktur Pengurus</Link>
                                    <Link href="/dashboard/lembaga/hak-akses" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Hak Akses</Link>
                                </div>
                            </details>
                            <Link href="/dashboard/lembaga/artikel" className="flex w-full items-center gap-3.5 rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:translate-x-1 group">
                                <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">article</span>
                                <span className="font-medium text-[14px]">Artikel</span>
                            </Link>
                            <Link href="/dashboard/lembaga/galeri" className="flex w-full items-center gap-3.5 rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:translate-x-1 group">
                                <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">collections</span>
                                <span className="font-medium text-[14px]">Galeri</span>
                            </Link>
                            <Link href="/dashboard/program/master-program" className="flex w-full items-center gap-3.5 rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:translate-x-1 group">
                                <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">category</span>
                                <span className="font-medium text-[14px]">Master Program</span>
                            </Link>
                        </nav>
                    </div>

                    {/* SDM */}
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#8CC63F] mb-3 px-3 opacity-90">SDM & Admin</p>
                        <nav className="flex flex-col gap-1 px-1">
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex w-full items-center justify-between rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer list-none hover:translate-x-1">
                                    <div className="flex items-center gap-3.5">
                                        <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">work</span>
                                        <span className="font-medium text-[14px]">Data Pegawai</span>
                                    </div>
                                    <span className="material-symbols-outlined text-lg text-white/40 transition-transform duration-300 group-open:rotate-90">chevron_right</span>
                                </summary>
                                <div className="flex flex-col gap-1 pl-[46px] pr-3 pb-2 pt-1">
                                    <Link href="/dashboard/pegawai/master" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Master Pegawai</Link>
                                    <Link href="/dashboard/pegawai/data" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Data Pegawai</Link>
                                </div>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex w-full items-center justify-between rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer list-none hover:translate-x-1">
                                    <div className="flex items-center gap-3.5">
                                        <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">fact_check</span>
                                        <span className="font-medium text-[14px]">Presensi Pegawai</span>
                                    </div>
                                    <span className="material-symbols-outlined text-lg text-white/40 transition-transform duration-300 group-open:rotate-90">chevron_right</span>
                                </summary>
                                <div className="flex flex-col gap-1 pl-[46px] pr-3 pb-2 pt-1">
                                    <Link href="/dashboard/pegawai/absensi" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Input Absensi</Link>
                                    <Link href="/dashboard/pegawai/data-absensi" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Data Absensi</Link>
                                    <Link href="/dashboard/pegawai/absensi-badal" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Absensi Badal</Link>
                                </div>
                            </details>
                        </nav>
                    </div>

                    {/* Santri */}
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#8CC63F] mb-3 px-3 opacity-90">Akademik & Santri</p>
                        <nav className="flex flex-col gap-1 px-1">
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex w-full items-center justify-between rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer list-none hover:translate-x-1">
                                    <div className="flex items-center gap-3.5">
                                        <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">groups</span>
                                        <span className="font-medium text-[14px]">Data Santri</span>
                                    </div>
                                    <span className="material-symbols-outlined text-lg text-white/40 transition-transform duration-300 group-open:rotate-90">chevron_right</span>
                                </summary>
                                <div className="flex flex-col gap-1 pl-[46px] pr-3 pb-2 pt-1">
                                    <Link href="/dashboard/santri/data" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Daftar Santri</Link>
                                    <Link href="/dashboard/santri/catatan" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Catatan Santri</Link>
                                    <Link href="/dashboard/santri/presensi" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Presensi Santri</Link>
                                </div>
                            </details>
                            <Link href="/dashboard/program/tahfidz" className="flex w-full items-center gap-3.5 rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:translate-x-1 group">
                                <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">menu_book</span>
                                <span className="font-medium text-[14px]">Program Tahfidz</span>
                            </Link>
                            <Link href="/dashboard/akademik/jadwal-badal" className="flex w-full items-center gap-3.5 rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:translate-x-1 group">
                                <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">event</span>
                                <span className="font-medium text-[14px]">Jadwal & Libur</span>
                            </Link>
                            <Link href="/dashboard/spsb/panduan" className="flex w-full items-center gap-3.5 rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:translate-x-1 group">
                                <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">description</span>
                                <span className="font-medium text-[14px]">Panduan SPSB</span>
                            </Link>
                        </nav>
                    </div>

                    {/* Keuangan */}
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#8CC63F] mb-3 px-3 opacity-90">Keuangan</p>
                        <nav className="flex flex-col gap-1 px-1">
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex w-full items-center justify-between rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer list-none hover:translate-x-1">
                                    <div className="flex items-center gap-3.5">
                                        <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">account_balance_wallet</span>
                                        <span className="font-medium text-[14px]">Keuangan Pegawai</span>
                                    </div>
                                    <span className="material-symbols-outlined text-lg text-white/40 transition-transform duration-300 group-open:rotate-90">chevron_right</span>
                                </summary>
                                <div className="flex flex-col gap-1 pl-[46px] pr-3 pb-2 pt-1">
                                    <Link href="/dashboard/keuangan/pegawai/master" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Master Keuangan</Link>
                                    <Link href="/dashboard/keuangan/pegawai/rekap-gaji" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Rekap Gaji</Link>
                                </div>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex w-full items-center justify-between rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer list-none hover:translate-x-1">
                                    <div className="flex items-center gap-3.5">
                                        <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">savings</span>
                                        <span className="font-medium text-[14px]">Keuangan Santri</span>
                                    </div>
                                    <span className="material-symbols-outlined text-lg text-white/40 transition-transform duration-300 group-open:rotate-90">chevron_right</span>
                                </summary>
                                <div className="flex flex-col gap-1 pl-[46px] pr-3 pb-2 pt-1">
                                    <Link href="/dashboard/keuangan/santri/master" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Master Keuangan</Link>
                                    <Link href="/dashboard/keuangan/santri/pembayaran" className="text-[13px] text-[#C6F099]/80 hover:text-white hover:translate-x-1 py-1.5 transition-all block">Pembayaran</Link>
                                </div>
                            </details>
                        </nav>
                    </div>

                    {/* Market & Kasir */}
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#8CC63F] mb-3 px-3 opacity-90">Koperasi & Market</p>
                        <nav className="flex flex-col gap-1 px-1">
                            <Link href="/dashboard/market/produk" className="flex w-full items-center gap-3.5 rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:translate-x-1 group">
                                <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">inventory_2</span>
                                <span className="font-medium text-[14px]">Data Produk</span>
                            </Link>
                            <Link href="/dashboard/market/pegawai-market" className="flex w-full items-center gap-3.5 rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:translate-x-1 group">
                                <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">badge</span>
                                <span className="font-medium text-[14px]">Akses Pegawai</span>
                            </Link>
                            <Link href="/dashboard/market/kasir-market" className="flex w-full items-center gap-3.5 rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:translate-x-1 group">
                                <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">point_of_sale</span>
                                <span className="font-medium text-[14px]">Kasir Market</span>
                            </Link>
                            <Link href="/dashboard/market/kasir-laundry" className="flex w-full items-center gap-3.5 rounded-xl py-2.5 px-3 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:translate-x-1 group">
                                <span className="material-symbols-outlined text-[#8CC63F] text-[20px] group-hover:text-white transition-colors">local_laundry_service</span>
                                <span className="font-medium text-[14px]">Kasir Laundry</span>
                            </Link>
                        </nav>
                    </div>
                </div>

                <div className="mt-8 px-6 relative z-10 w-full mb-6">
                    <Link href="/">
                        <button className="group flex w-full justify-center items-center gap-3 rounded-xl bg-white/10 hover:bg-red-500/80 border border-white/10 px-4 py-3 text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                            <span className="material-symbols-outlined text-[20px]">logout</span>
                            <span className="font-semibold text-sm tracking-wide">Logout</span>
                        </button>
                    </Link>
                </div>
            </aside >

            <div className="flex flex-1 flex-col overflow-hidden relative">
                <header className="sticky top-0 z-30 flex items-center justify-between bg-white/80 backdrop-blur-lg border-b border-slate-200/60 px-4 md:px-8 py-4 shadow-sm transition-all">
                    <div className="flex items-center gap-3 md:gap-8 flex-1">
                        {/* Toggle Sidebar Button (works for both mobile and desktop) */}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 active:scale-95 bg-white border border-slate-200 shadow-sm"
                        >
                            <span className="material-symbols-outlined leading-none text-[24px]">
                                {isSidebarOpen ? 'menu_open' : 'menu'}
                            </span>
                        </button>

                        <div className="hidden md:flex items-center gap-3">
                            <h2 className="text-xl font-extrabold leading-tight tracking-tight text-slate-800">Overview</h2>
                        </div>

                        <div className="flex-1 max-w-xl hidden sm:block relative group">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input className="block w-full rounded-full border border-slate-200 bg-slate-50/50 hover:bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none shadow-sm" placeholder="Search data santri, ustaz..." type="text" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <span className="text-[10px] font-medium text-slate-400 bg-white border border-slate-200 rounded px-1.5 py-0.5 shadow-sm">⌘K</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-5 ml-4">
                        <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-primary transition-all active:scale-95 hidden sm:block">
                            <span className="material-symbols-outlined text-[24px]">notifications</span>
                            <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white animate-pulse"></span>
                        </button>
                        <div className="h-8 w-[1px] bg-slate-200 hidden sm:block mx-1"></div>
                        <button className="flex items-center gap-3 rounded-full sm:pl-1 pr-1 sm:pr-4 py-1 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all active:scale-95">
                            <div className="h-9 w-9 relative overflow-hidden rounded-full ring-2 ring-white shadow-md" data-alt="Profile picture">
                                <Image unoptimized fill alt="Admin Profile" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAM8iapcWx3s_nYyjhgKCW4YC5ZXnirI5E4Ykp5Vzb7rOkBS9erkD37imFgGwAMGl9lWZZxvy0c92Zj4rFdnvSgAxbO2IR-qA1VkOOTgTmKAQ_h_XftRDkUpQL3C8wikivIBvyv2rdvnmxqPnPbixepdfA3hUXTRkySVepuBRnhV_EVd2OPK8fwYikKM5VXxx9Wu-wznxbTqKgkgPsYbk28MVlFUIVDtcKw8dOvP_IAmHVNQXrcwnkeS7DZEvnE7UzFRTgono6NMo" />
                            </div>
                            <div className="hidden lg:flex flex-col items-start pr-1">
                                <span className="text-sm font-bold text-slate-700 leading-none">ADMIN</span>
                                <span className="text-[11px] font-medium text-slate-500 leading-none mt-1.5 bg-slate-100 px-2 py-0.5 rounded-full">Super Admin</span>
                            </div>
                            <span className="material-symbols-outlined text-slate-400 text-[20px] hidden sm:block">keyboard_arrow_down</span>
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto w-full custom-scrollbar p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div >
    );
}
