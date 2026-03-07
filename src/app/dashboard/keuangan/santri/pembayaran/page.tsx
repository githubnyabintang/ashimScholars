"use client";

import React, { useState } from "react";

export default function PembayaranSantriPage() {
    const [activeTab, setActiveTab] = useState('bulanan');
    const [isConfirmedBulanan, setIsConfirmedBulanan] = useState(false);
    const [isConfirmedUmum, setIsConfirmedUmum] = useState(false);

    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Master Data Pembayaran Santri</h1>
                    <p className="text-sm text-slate-500 mt-1">Kelola data historis pembayaran santri bulanan dan umum</p>
                </div>
            </div>

            <div className="flex gap-2">
                <button
                    onClick={() => setActiveTab('bulanan')}
                    className={`px-6 py-2.5 rounded-xl text-sm font-bold uppercase transition-all ${activeTab === 'bulanan'
                        ? 'bg-[#00642F] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                        }`}
                >
                    Bulanan
                </button>
                <button
                    onClick={() => setActiveTab('umum')}
                    className={`px-6 py-2.5 rounded-xl text-sm font-bold uppercase transition-all ${activeTab === 'umum'
                        ? 'bg-[red] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                        }`}
                >
                    Umum
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                {activeTab === 'bulanan' && (
                    <div className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1 border-r border-slate-100 pr-0 lg:pr-8">
                                <h3 className="text-sm font-bold text-red-500 mb-4">* Wajib Diisi</h3>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Nama santri <span className="text-red-500">*</span></label>
                                        <select className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] bg-slate-50 text-center">
                                            <option value="">-- Pilih --</option>
                                            <option value="1">Ahmad Ashim / 10224020005</option>
                                            <option value="2">Muhammad Alif / 10125011284</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Pembayaran <span className="text-red-500">*</span></label>
                                        <select className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] bg-slate-50 text-center">
                                            <option value="">-- Pilih --</option>
                                            <option value="1">I'dad MTs Putri (Kampus IV) / SPP (TP.2026/2027) / 1600000</option>
                                            <option value="2">Tahfidz Murni Putra (Kampus 1) / SPP TP.2026/2027 / 1350000</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Nominal <span className="text-red-500">*</span></label>
                                        <input type="number" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] text-center" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Keterangan <span className="text-red-500">*</span></label>
                                        <input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] text-center" />
                                    </div>

                                    <hr className="my-4 border-slate-200" />

                                    <div className="space-y-4">
                                        <p className="text-sm font-bold text-red-500">Cek terlebih dahulu, centang jika sudah benar</p>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                id="konfirmasi"
                                                className="w-4 h-4 text-[#00642F] rounded border-slate-300 focus:ring-[#00642F]"
                                                checked={isConfirmedBulanan}
                                                onChange={(e) => setIsConfirmedBulanan(e.target.checked)}
                                            />
                                            <label htmlFor="konfirmasi" className="text-sm font-medium text-slate-700">Mengerti</label>
                                        </div>

                                        <button
                                            disabled={!isConfirmedBulanan}
                                            className="w-full bg-[#00642F] text-white hover:bg-[#005025] disabled:bg-slate-300 disabled:cursor-not-allowed px-4 py-3 rounded-xl text-sm font-bold transition-colors shadow-sm"
                                        >
                                            INPUT PEMBAYARAN
                                        </button>
                                        <p className="text-xs text-red-500 font-medium">F10 = Simpan data</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                {/* Mobile List Cards Pembayaran Bulanan */}
                                <div className="md:hidden flex flex-col gap-3">
                                    <div className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-sm flex flex-col gap-3">
                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col gap-1">
                                                <div className="font-bold text-slate-800 text-[13px] leading-tight">Ahmad Ashim</div>
                                                <div className="text-[10px] text-slate-400 font-medium">KAMPUS II PUTRA</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold text-green-600 text-[14px]">1,550,000</div>
                                                <div className="text-[10px] text-slate-500 font-medium mt-0.5">16-10-2025</div>
                                            </div>
                                        </div>
                                        <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                                            <span className="font-semibold text-slate-800">Rincian:</span> SPP TP.2025/2026
                                        </div>
                                        <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                                            <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                                                <span className="material-symbols-outlined text-[14px]">person</span>
                                                <span className="truncate max-w-[150px]">Superadmin</span>
                                            </div>
                                            <button className="h-7 w-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors">
                                                <span className="material-symbols-outlined text-[14px]">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Table Bulanan */}
                                <div className="hidden md:block overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-slate-50 text-slate-600 font-semibold border-y border-slate-200 uppercase text-xs">
                                            <tr>
                                                <th className="px-4 py-3 text-center">No</th>
                                                <th className="px-4 py-3 text-center">Kampus</th>
                                                <th className="px-4 py-3 text-center">Nama Santri</th>
                                                <th className="px-4 py-3 text-center">Rincian</th>
                                                <th className="px-4 py-3 text-right">Nominal</th>
                                                <th className="px-4 py-3 text-center">Pegawai</th>
                                                <th className="px-4 py-3 text-center">Tgl</th>
                                                <th className="px-4 py-3 text-center">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-4 py-3 text-center text-slate-500">1</td>
                                                <td className="px-4 py-3 text-center font-medium text-slate-700">KAMPUS II PUTRA</td>
                                                <td className="px-4 py-3 text-center font-bold text-slate-800">Ahmad Ashim</td>
                                                <td className="px-4 py-3 text-center">SPP TP.2025/2026</td>
                                                <td className="px-4 py-3 text-right font-bold text-green-600">1,550,000</td>
                                                <td className="px-4 py-3 text-center text-slate-600">H SYAM AMIR YUNUS (Superadmin)</td>
                                                <td className="px-4 py-3 text-center font-medium">16-10-2025</td>
                                                <td className="px-4 py-3">
                                                    <div className="flex justify-center">
                                                        <button className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors">
                                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'umum' && (
                    <div>
                        <div className="px-6 py-4 border-b border-slate-200">
                            <h2 className="text-xl font-bold text-red-600">Data Pembayaran Umum</h2>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-1 border-r border-slate-100 pr-0 lg:pr-8">
                                    <h3 className="text-sm font-bold text-red-500 mb-4">* Wajib Diisi</h3>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Nama santri <span className="text-red-500">*</span></label>
                                            <select className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] bg-slate-50 text-center">
                                                <option value="">-- Pilih --</option>
                                                <option value="1">Ahmad Ashim / 10224020005</option>
                                                <option value="2">Muhammad Alif / 10125011284</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Pembayaran <span className="text-red-500">*</span></label>
                                            <select className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] bg-slate-50 text-center">
                                                <option value="">-- Pilih --</option>
                                                <option value="1">Pendaftar Tahfidz Murni (Kampus 1) / Pendaftaran PPs TP. 2026/2027 / 350000</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Nominal <span className="text-red-500">*</span></label>
                                            <input type="number" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] text-center" />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Keterangan <span className="text-red-500">*</span></label>
                                            <input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] text-center" />
                                        </div>

                                        <hr className="my-4 border-slate-200" />

                                        <div className="space-y-4">
                                            <p className="text-sm font-bold text-red-500">Cek terlebih dahulu, centang jika sudah benar</p>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    id="konfirmasiUmum"
                                                    className="w-4 h-4 text-[#00642F] rounded border-slate-300 focus:ring-[#00642F]"
                                                    checked={isConfirmedUmum}
                                                    onChange={(e) => setIsConfirmedUmum(e.target.checked)}
                                                />
                                                <label htmlFor="konfirmasiUmum" className="text-sm font-medium text-slate-700">Mengerti</label>
                                            </div>

                                            <button
                                                disabled={!isConfirmedUmum}
                                                className="w-full bg-[#00642F] text-white hover:bg-[#005025] disabled:bg-slate-300 disabled:cursor-not-allowed px-4 py-3 rounded-xl text-sm font-bold transition-colors shadow-sm"
                                            >
                                                INPUT PEMBAYARAN
                                            </button>
                                            <p className="text-xs text-red-500 font-medium">F10 = Simpan data</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-2">
                                    {/* Mobile List Cards Umum */}
                                    <div className="md:hidden flex flex-col gap-3">
                                        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm flex items-center justify-center text-center text-slate-500 text-sm font-medium">
                                            Belum ada data pembayaran hari ini
                                        </div>
                                    </div>

                                    {/* Desktop Table Umum */}
                                    <div className="hidden md:block overflow-x-auto">
                                        <table className="w-full text-sm text-left">
                                            <thead className="bg-slate-50 text-slate-600 font-semibold border-y border-slate-200 uppercase text-xs">
                                                <tr>
                                                    <th className="px-4 py-3 text-center">No</th>
                                                    <th className="px-4 py-3 text-center">Kampus</th>
                                                    <th className="px-4 py-3 text-center">Nama Santri</th>
                                                    <th className="px-4 py-3 text-center">Rincian</th>
                                                    <th className="px-4 py-3 text-right">Nominal</th>
                                                    <th className="px-4 py-3 text-center">Pegawai</th>
                                                    <th className="px-4 py-3 text-center">Tgl</th>
                                                    <th className="px-4 py-3 text-center w-16">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                    <td colSpan={8} className="px-4 py-8 text-center text-slate-500">
                                                        Belum ada data pembayaran hari ini
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mt-6">
                <div className="px-4 py-4 md:px-6 md:py-4 border-b border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0">
                    <h2 className="text-base md:text-lg font-bold text-slate-800">Histori Pembayaran</h2>
                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                        <input type="date" className="border border-slate-300 rounded-xl px-2 py-1.5 md:px-3 text-xs md:text-sm flex-1 md:flex-none" />
                        <span className="self-center hidden md:inline text-sm text-slate-500 font-medium">s/d</span>
                        <input type="date" className="border border-slate-300 rounded-xl px-2 py-1.5 md:px-3 text-xs md:text-sm flex-1 md:flex-none" />
                        <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-1.5 rounded-xl text-xs md:text-sm font-bold flex items-center justify-center gap-1 w-full sm:w-auto">
                            <span className="material-symbols-outlined text-[14px] md:text-[16px]">search</span>
                            Cari
                        </button>
                    </div>
                </div>
                <div className="p-4 md:p-6">
                    {/* Mobile List Cards Histori */}
                    <div className="md:hidden flex flex-col gap-3">
                        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex items-center justify-center text-center text-slate-500 text-xs font-medium">
                            Silakan lakukan pencarian histori pembayaran.
                        </div>
                    </div>

                    {/* Desktop Table Histori */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 text-slate-600 font-semibold border-y border-slate-200 uppercase text-xs">
                                <tr>
                                    <th className="px-4 py-3 text-center w-12">No</th>
                                    <th className="px-4 py-3 text-center">No Kuitansi</th>
                                    <th className="px-4 py-3 text-center">Tanggal</th>
                                    <th className="px-4 py-3 text-center">NIS</th>
                                    <th className="px-4 py-3 text-left">Uraian</th>
                                    <th className="px-4 py-3 text-right">Debit</th>
                                    <th className="px-4 py-3 text-right">Kredit</th>
                                    <th className="px-4 py-3 text-center">Kwitansi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td colSpan={8} className="px-4 py-8 text-center text-slate-500">
                                        Silakan lakukan pencarian histori pembayaran.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
