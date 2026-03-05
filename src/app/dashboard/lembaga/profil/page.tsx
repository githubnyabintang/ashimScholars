"use client";

import React, { useState } from "react";
import Image from "next/image";
// Dummy data based on HTML
const kampusData = [
    {
        id: "5555578768",
        name: "KAMPUS I PUTRA",
        pegawai: 17,
        santri: 130,
        status: "Aktif"
    },
    {
        id: "32453534",
        name: "KAMPUS II PUTRA",
        pegawai: 106,
        santri: 341,
        status: "Aktif"
    },
    {
        id: "3564566",
        name: "KAMPUS PUTRI",
        pegawai: 16,
        santri: 52,
        status: "Aktif"
    },
    {
        id: "4567879879",
        name: "HMQ TELKOM",
        pegawai: 6,
        santri: 9,
        status: "Aktif"
    }
];

export default function ProfilLembagaPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Lembaga</h1>
                    <p className="text-sm text-slate-500 mt-1">Profil dan informasi detail kampus</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {kampusData.map((kampus, index) => (
                    <div key={kampus.id} className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow delay-${index * 100}`}>
                        <div className="p-5">
                            <div className="flex items-center justify-center mb-4">
                                <div className="h-16 w-16 bg-[#f4f7f6] rounded-full flex items-center justify-center text-[#00642F] font-bold text-xl shadow-inner border border-slate-100">
                                    <span className="material-symbols-outlined text-3xl">domain</span>
                                </div>
                            </div>
                            <div className="text-center mb-5">
                                <h5 className="font-bold text-slate-800 text-lg leading-tight mb-1">{kampus.name}</h5>
                                <p className="text-xs font-medium text-slate-400">({kampus.id})</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-5 p-3 bg-slate-50 rounded-xl">
                                <div className="text-center border-r border-slate-200">
                                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Pegawai</p>
                                    <p className="font-extrabold text-slate-700 text-lg">{kampus.pegawai}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Santri</p>
                                    <p className="font-extrabold text-[#00642F] text-lg">{kampus.santri}</p>
                                </div>
                            </div>

                            <div className="flex justify-center mb-5">
                                <span className="bg-[#E5F5E9] text-[#00642F] text-xs font-bold px-3 py-1 rounded-full border border-[#00642F]/20">
                                    {kampus.status}
                                </span>
                            </div>

                            <div className="flex justify-center gap-2">
                                <button className="h-9 w-9 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors shadow-sm">
                                    <span className="material-symbols-outlined text-[20px]">user_attributes</span>
                                </button>
                                <button className="h-9 w-9 rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-500 hover:text-white flex items-center justify-center transition-colors shadow-sm">
                                    <span className="material-symbols-outlined text-[20px]">edit</span>
                                </button>
                                <button className="h-9 w-9 rounded-lg bg-[#00642F]/10 text-[#00642F] hover:bg-[#00642F] hover:text-white flex items-center justify-center transition-colors shadow-sm">
                                    <span className="material-symbols-outlined text-[20px]">description</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#00642F]">info</span>
                        Informasi Yayasan
                    </h2>
                </div>
                <div className="p-0 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                                <th className="p-4 font-semibold border-b border-slate-200 w-16 text-center">No</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Sambutan Pimpinan</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Sejarah</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="p-4 text-center font-medium">1</td>
                                <td className="p-4">
                                    <div className="max-w-md line-clamp-4 leading-relaxed text-slate-600">
                                        Alhamdulillah senantiasa kita panjatkan kehadirat Allah SWT. yang telah melimpahkan rahmat dan karunia-Nya, sehingga kami dapat menyelesaikan Website Pondok Pesantren Tahfizhul Qur’an Al-Imam Ashim Makassar. Tujuan dibuatnya Website ini adalah untuk memberikan pemahaman yang mendalam...
                                    </div>
                                    <button className="text-[#00642F] text-xs font-bold mt-2 hover:underline">Baca Selengkapnya &rarr;</button>
                                </td>
                                <td className="p-4">
                                    <div className="max-w-md line-clamp-4 leading-relaxed text-slate-600">
                                        Pondok Pesantren Tahfizhul Qur’an Qur’an Al-Imam Ashim adalah lembaga Pendidikan Islam berbasis Pesantren di Makassar yang dinaungi oleh Yayasan al-Imam Ashim. Pondok pesantren ini ikut menjembatani terwujudnya jawaban akan kekhawatiran semakin langkanya penghafal Al-Qur’an...
                                    </div>
                                    <button className="text-[#00642F] text-xs font-bold mt-2 hover:underline">Baca Selengkapnya &rarr;</button>
                                </td>
                                <td className="p-4 text-center">
                                    <button className="h-8 w-8 rounded-lg bg-slate-100 text-slate-600 hover:bg-yellow-500 hover:text-white flex items-center justify-center transition-colors mx-auto tooltip" data-tip="Edit Profil">
                                        <span className="material-symbols-outlined text-[18px]">edit</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
