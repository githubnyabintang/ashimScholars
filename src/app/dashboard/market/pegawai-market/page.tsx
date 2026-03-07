"use client";

import React, { useState } from "react";

export default function MarketPegawaiPage() {
    const [employees, setEmployees] = useState([
        { id: '15927695883', name: 'Muh Rafik Hasan, S.Pd', market: false, laundry: false },
        { id: '15881135094', name: 'Nurhalisa, S.Pd', market: false, laundry: false },
        { id: '15874066755', name: 'HAMDANA', market: false, laundry: false },
        { id: '15864719283', name: 'Koirul Anam, S.Pd', market: false, laundry: false },
        { id: '15857882406', name: 'Nurannisa', market: false, laundry: false },
        { id: '15857634276', name: 'Rais Satpam', market: false, laundry: false },
        { id: '15841347138', name: 'Niswah Sajidah Syamsuri', market: false, laundry: false },
        { id: '15830573796', name: 'Nur Afnia, S.Pd.', market: false, laundry: false },
        { id: '15830459154', name: 'Achmad Syafril Syafei', market: false, laundry: false },
        { id: '15830455194', name: 'Syaiful Jihad', market: false, laundry: false },
        { id: '15827409702', name: 'Sulviana, S.Pd.', market: false, laundry: false },
        { id: '15824255517', name: 'Nur Amal Kadri, S.Pd.', market: false, laundry: false },
        { id: '15823452096', name: 'Nur Khairiyah', market: false, laundry: false },
        { id: '15821927721', name: 'Ahmad Muttaqin', market: false, laundry: false },
        { id: '15811143849', name: 'Ahmad Naufal', market: false, laundry: false },
        { id: '15811050249', name: 'Jazril Rahmat Al Ghazali', market: false, laundry: false },
        { id: '15804852174', name: 'Wilyan Fadwillah', market: false, laundry: false },
        { id: '15789999339', name: 'Robithoh Alam Al Islami', market: false, laundry: false },
        { id: '15789216708', name: 'Zawyad Hidayah Nasir', market: false, laundry: false },
        { id: '15785502561', name: 'Jurhom', market: false, laundry: false },
        { id: '15779149596', name: 'Muh Nurrahman R', market: false, laundry: false },
        { id: '15773920173', name: 'A.Nurafifah Muhja', market: false, laundry: false },
        { id: '15773918472', name: 'Sumayyah Ilham', market: false, laundry: false },
        { id: '15773847021', name: 'Jabal Nur', market: false, laundry: false },
        { id: '15773747922', name: 'Khusnul Dwita, S.Pd.', market: false, laundry: false },
        { id: '15772162968', name: 'Mahfud Ilham, S.Pd', market: false, laundry: false },
        { id: '15765250842', name: 'Muhajir Amri', market: false, laundry: false },
        { id: '15754263750', name: 'Muhammad Ihsan Mubaraq, A.Md.Par', market: false, laundry: false },
        { id: '15739621317', name: 'Miftahul Jannah', market: false, laundry: false },
        { id: '15729356259', name: 'Hj. Musdalifah Yunus', market: false, laundry: true },
        { id: '15705255501', name: 'Dhinul Haqmi', market: false, laundry: true },
        { id: '15677303661', name: 'Muhammad Nurhidayat', market: false, laundry: false },
        { id: '15677302716', name: 'Muhammad Syamhari Putra Ahmad', market: false, laundry: false },
        { id: '15675842988', name: 'Muhammad Syafiq', market: false, laundry: false },
        { id: '15675094890', name: 'Ruslan', market: false, laundry: false },
    ]);

    const toggleAccess = (id: string, type: 'market' | 'laundry') => {
        setEmployees(employees.map(emp =>
            emp.id === id ? { ...emp, [type]: !emp[type] } : emp
        ));
    };

    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Data Pegawai Kasir</h1>
                    <p className="text-sm text-slate-500 mt-1">Kelola akses kasir market dan laundry untuk pegawai</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6">
                    {/* Mobile List Cards Pegawai Kasir */}
                    <div className="md:hidden flex flex-col gap-3 pb-3">
                        {employees.map((item, index) => (
                            <div key={item.id} className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-sm flex flex-col gap-3">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-0.5 max-w-[80%]">
                                        <div className="font-bold text-slate-800 text-[14px] leading-tight break-words">{item.name}</div>
                                        <div className="text-[11px] text-slate-500 font-medium">ID: <span className="text-slate-700">{item.id}</span></div>
                                    </div>
                                    <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap bg-slate-100 px-2 py-0.5 rounded-full mt-1">No. {index + 1}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-3 mt-1">
                                    <div className="flex flex-col gap-1.5 p-2 bg-slate-50 rounded-lg border border-slate-100">
                                        <span className="text-[10px] font-bold text-slate-500 text-center uppercase tracking-wider">Akses Market</span>
                                        <button
                                            onClick={() => toggleAccess(item.id, 'market')}
                                            className={`w-full py-1.5 rounded-lg text-xs font-bold transition-colors ${item.market
                                                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                                : 'bg-[#00642F] text-white hover:bg-[#00642F]/90'
                                                }`}
                                        >
                                            {item.market ? 'Aktif' : 'Tidak'}
                                        </button>
                                    </div>
                                    <div className="flex flex-col gap-1.5 p-2 bg-slate-50 rounded-lg border border-slate-100">
                                        <span className="text-[10px] font-bold text-slate-500 text-center uppercase tracking-wider">Akses Laundry</span>
                                        <button
                                            onClick={() => toggleAccess(item.id, 'laundry')}
                                            className={`w-full py-1.5 rounded-lg text-xs font-bold transition-colors ${item.laundry
                                                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                                : 'bg-[#00642F] text-white hover:bg-[#00642F]/90'
                                                }`}
                                        >
                                            {item.laundry ? 'Aktif' : 'Tidak'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-sm text-left border">
                            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase text-xs">
                                <tr>
                                    <th className="px-4 py-3 text-center border-r w-16">No</th>
                                    <th className="px-4 py-3 text-center border-r">ID</th>
                                    <th className="px-4 py-3 text-center border-r">Nama</th>
                                    <th className="px-4 py-3 text-center border-r w-32">Market</th>
                                    <th className="px-4 py-3 text-center w-32">Laundry</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {employees.map((item, index) => (
                                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-4 py-3 text-center text-slate-500 border-r">{index + 1}</td>
                                        <td className="px-4 py-3 text-center font-medium text-slate-700 border-r">{item.id}</td>
                                        <td className="px-4 py-3 text-center font-bold text-slate-800 border-r">{item.name}</td>
                                        <td className="px-4 py-3 text-center border-r">
                                            <button
                                                onClick={() => toggleAccess(item.id, 'market')}
                                                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${item.market
                                                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                                    : 'bg-[#00642F] text-white hover:bg-[#00642F]/90'
                                                    }`}
                                            >
                                                {item.market ? 'Aktif' : 'Tidak'}
                                            </button>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <button
                                                onClick={() => toggleAccess(item.id, 'laundry')}
                                                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${item.laundry
                                                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                                    : 'bg-[#00642F] text-white hover:bg-[#00642F]/90'
                                                    }`}
                                            >
                                                {item.laundry ? 'Aktif' : 'Tidak'}
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
    );
}
