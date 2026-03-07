"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Category = "manajemen" | "sdm" | "akademik" | "keuangan" | null;

type SubMenuItem = {
    name: string;
    path: string;
    icon: string;
};

type MenuSection = {
    title: string;
    items: SubMenuItem[];
};

export default function MobileBottomNav() {
    const pathname = usePathname();
    const [activeSheet, setActiveSheet] = useState<Category>(null);
    const navRef = useRef<HTMLElement>(null);

    // Close popup if clicked outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveSheet(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const isBerandaActive = pathname === "/dashboard";
    const isCategoryActive = (cat: Category) => {
        if (!cat) return false;
        if (cat === "keuangan") return pathname.includes("/dashboard/keuangan") || pathname.includes("/dashboard/market");
        return pathname.includes(`/dashboard/${cat}`);
    };

    const navItems: { name: string; icon: string; category: Category | "beranda" }[] = [
        { name: "Beranda", icon: "home", category: "beranda" },
        { name: "Manajemen", icon: "domain", category: "manajemen" },
        { name: "SDM", icon: "badge", category: "sdm" },
        { name: "Akademik", icon: "school", category: "akademik" },
        { name: "Keuangan", icon: "account_balance_wallet", category: "keuangan" },
    ];

    const menus: Record<string, MenuSection[]> = {
        manajemen: [
            {
                title: "Lembaga",
                items: [
                    { name: "Profil", path: "/dashboard/lembaga/profil", icon: "domain" },
                    { name: "Struktur Pengurus", path: "/dashboard/lembaga/struktur", icon: "account_tree" },
                    { name: "Hak Akses", path: "/dashboard/lembaga/hak-akses", icon: "admin_panel_settings" },
                ],
            },
            {
                title: "Publikasi",
                items: [
                    { name: "Artikel", path: "/dashboard/lembaga/artikel", icon: "article" },
                    { name: "Galeri", path: "/dashboard/lembaga/galeri", icon: "collections" },
                    { name: "Program", path: "/dashboard/program/master-program", icon: "category" },
                ],
            },
        ],
        sdm: [
            {
                title: "Pegawai",
                items: [
                    { name: "Master Pegawai", path: "/dashboard/pegawai/master", icon: "badge" },
                    { name: "Data Pegawai", path: "/dashboard/pegawai/data", icon: "group" },
                ],
            },
            {
                title: "Presensi",
                items: [
                    { name: "Input Absensi", path: "/dashboard/pegawai/absensi", icon: "co_present" },
                    { name: "Data Absensi", path: "/dashboard/pegawai/data-absensi", icon: "fact_check" },
                    { name: "Absensi Badal", path: "/dashboard/pegawai/absensi-badal", icon: "person_cancel" },
                ],
            },
        ],
        akademik: [
            {
                title: "Santri",
                items: [
                    { name: "Daftar Santri", path: "/dashboard/santri/data", icon: "groups" },
                    { name: "Catatan Santri", path: "/dashboard/santri/catatan", icon: "assignment" },
                    { name: "Presensi Santri", path: "/dashboard/santri/presensi", icon: "how_to_reg" },
                ],
            },
            {
                title: "Akademik",
                items: [
                    { name: "Program Tahfidz", path: "/dashboard/program/tahfidz", icon: "menu_book" },
                    { name: "Jadwal & Libur", path: "/dashboard/akademik/jadwal-badal", icon: "event" },
                    { name: "Panduan", path: "/dashboard/spsb/panduan", icon: "description" },
                ],
            },
        ],
        keuangan: [
            {
                title: "Keuangan Pegawai",
                items: [
                    { name: "Master Keuangan", path: "/dashboard/keuangan/pegawai/master", icon: "account_balance_wallet" },
                    { name: "Rekap Gaji", path: "/dashboard/keuangan/pegawai/rekap-gaji", icon: "payments" },
                ],
            },
            {
                title: "Keuangan Santri",
                items: [
                    { name: "Master Keuangan", path: "/dashboard/keuangan/santri/master", icon: "savings" },
                    { name: "Pembayaran", path: "/dashboard/keuangan/santri/pembayaran", icon: "receipt_long" },
                ],
            },
            {
                title: "Koperasi & Market",
                items: [
                    { name: "Data Produk", path: "/dashboard/market/produk", icon: "inventory_2" },
                    { name: "Kasir Market", path: "/dashboard/market/kasir-market", icon: "point_of_sale" },
                    { name: "Kasir Laundry", path: "/dashboard/market/kasir-laundry", icon: "local_laundry_service" },
                ],
            },
        ]
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scroll-nav::-webkit-scrollbar { display: none; }
                .hide-scroll-nav { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />

            {/* Invisible Backdrop to close popup on outside click and blur the background */}
            {activeSheet && (
                <div
                    className="fixed inset-0 z-[90] md:hidden bg-slate-900/20 backdrop-blur-[2px] transition-all duration-300 animate-fade-in"
                    onClick={() => setActiveSheet(null)}
                />
            )}

            <nav
                ref={navRef}
                className="fixed bottom-0 left-0 w-full z-[100] md:hidden bg-white border-t border-slate-200 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)] pb-safe-area"
                style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
                data-purpose="bottom-nav"
            >
                <div className="flex items-center justify-around px-1 py-1 sm:px-2 sm:py-2 max-w-md mx-auto relative">
                    {navItems.map((item, idx) => {
                        const isBeranda = item.category === "beranda";
                        const isActive = isBeranda ? isBerandaActive : (isCategoryActive(item.category as Category) || activeSheet === item.category);

                        const content = (
                            <>
                                {isActive && (
                                    <span className="absolute max-sm:-top-0 -top-1 w-1 h-1 rounded-full bg-[#00642F] animate-fade-in-up"></span>
                                )}
                                <span
                                    className={`material-symbols-outlined transition-transform duration-300 ${isActive ? 'scale-110 mb-0.5' : 'mb-1 text-slate-400'}`}
                                    style={isActive ? { fontVariationSettings: '"FILL" 1' } : {}}
                                >
                                    {item.icon}
                                </span>
                                <span
                                    className={`text-[10px] text-center leading-none transition-all duration-300 ${isActive ? "font-bold tracking-wide" : "font-medium text-slate-400"}`}
                                >
                                    {item.name}
                                </span>
                            </>
                        );

                        const itemClasses = `flex flex-col items-center justify-center flex-1 py-1.5 px-1 sm:py-2 transition-all duration-300 relative select-none cursor-pointer ${isActive ? "text-[#00642F]" : "text-slate-500 hover:text-[#00642F]"}`;

                        return (
                            <div key={item.name} className="flex-1 flex justify-center relative">
                                {isBeranda ? (
                                    <Link href="/dashboard" className={itemClasses} onClick={() => setActiveSheet(null)}>
                                        {content}
                                    </Link>
                                ) : (
                                    <button className={itemClasses + " focus:outline-none"} onClick={() => setActiveSheet(activeSheet === item.category ? null : item.category as Category)}>
                                        {content}
                                    </button>
                                )}

                                {/* Floating Popup Wrapper */}
                                {!isBeranda && activeSheet === item.category && (
                                    <div className="absolute bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-0 h-0 flex items-end justify-center z-[120] animate-fade-in-up md:hidden">
                                        {/* The Pointing Tail (perfectly centered on the 0x0 anchor) */}
                                        <div className="absolute -bottom-[6px] w-[14px] h-[14px] bg-white border-b border-r border-slate-200/50 shadow-[2px_2px_4px_rgba(0,0,0,0.02)] transform rotate-45 rounded-br-[2px] z-0"></div>

                                        {/* The Main Bubble Body (positions itself safely on screen, masking the tail's upper half) */}
                                        <div
                                            className={`absolute bottom-[3px] w-[240px] max-w-[calc(100vw-24px)] bg-white rounded-2xl shadow-[0_-5px_30px_-5px_rgba(0,0,0,0.15)] ring-1 ring-slate-100/50 p-1.5 z-10 transition-all ${idx === 1 ? 'left-[-30px] sm:left-[-50px]' :
                                                idx === 2 ? 'left-1/2 -translate-x-1/2' :
                                                    idx === 3 ? 'right-[-50px] sm:right-[-70px]' :
                                                        idx === 4 ? 'right-[-30px] sm:right-[-40px]' :
                                                            'left-1/2 -translate-x-1/2'
                                                }`}
                                        >
                                            <div className="max-h-[65vh] overflow-y-auto hide-scroll-nav relative bg-white rounded-xl pb-1">
                                                {menus[item.category as string]?.map((section, sId) => (
                                                    <div key={sId} className="mb-2 last:mb-0">
                                                        {section.title && (
                                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5 px-3 pt-2.5">
                                                                {section.title}
                                                            </p>
                                                        )}
                                                        <div className="flex flex-col">
                                                            {section.items.map((subItem, cId) => {
                                                                const isSubActive = pathname === subItem.path || pathname.startsWith(subItem.path + '/');
                                                                return (
                                                                    <Link
                                                                        key={cId}
                                                                        href={subItem.path}
                                                                        onClick={() => setActiveSheet(null)}
                                                                        className={`flex items-center gap-3 px-3 py-2.5 mx-1 my-0.5 rounded-xl transition-all active:scale-[0.98] ${isSubActive
                                                                            ? 'bg-[#00642F] text-white shadow-md shadow-[#00642F]/20'
                                                                            : 'text-slate-600 hover:bg-slate-50 active:bg-slate-100'
                                                                            }`}
                                                                    >
                                                                        <span className={`material-symbols-outlined ${isSubActive ? 'text-[18px]' : 'text-[20px] text-slate-400'}`} style={isSubActive ? { fontVariationSettings: '"FILL" 1' } : {}}>
                                                                            {subItem.icon}
                                                                        </span>
                                                                        <span className={`text-[13px] ${isSubActive ? 'font-bold tracking-wide' : 'font-semibold'}`}>
                                                                            {subItem.name}
                                                                        </span>
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
