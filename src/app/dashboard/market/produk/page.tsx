"use client";

import React, { useState } from "react";

export default function MarketProdukPage() {
    const [activeTab, setActiveTab] = useState('data-barang');

    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Master Barang</h1>
                    <p className="text-sm text-slate-500 mt-1">Kelola data barang dan supplier market</p>
                </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                <button
                    onClick={() => setActiveTab('data-barang')}
                    className={`px-6 py-2.5 rounded-xl text-sm font-bold uppercase transition-all whitespace-nowrap ${activeTab === 'data-barang'
                        ? 'bg-[#00642F] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                        }`}
                >
                    Data Barang
                </button>
                <button
                    onClick={() => setActiveTab('supplier')}
                    className={`px-6 py-2.5 rounded-xl text-sm font-bold uppercase transition-all whitespace-nowrap ${activeTab === 'supplier'
                        ? 'bg-[red] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                        }`}
                >
                    Supplier
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                {activeTab === 'data-barang' && (
                    <div className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1 border-r border-slate-100 pr-0 lg:pr-8">
                                <h3 className="text-sm font-bold text-slate-700 mb-2">Shortcuts:</h3>
                                <ul className="text-sm text-slate-600 mb-4 space-y-1">
                                    <li><span className="font-bold text-red-500">F8</span> = Menambah Baru</li>
                                    <li><span className="font-bold text-red-500">F10</span> = Menyimpan Data Baru</li>
                                </ul>
                                <hr className="my-4 border-slate-200" />
                                <h3 className="text-sm font-bold text-red-500 mb-4">* Wajib Diisi</h3>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 flex justify-between">
                                            <span>ID Barang <span className="text-red-500">*</span></span>
                                        </label>
                                        <input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F]" autoFocus />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 flex justify-between">
                                            <span>Nama Barang <span className="text-red-500">*</span></span>
                                        </label>
                                        <input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F]" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2 flex justify-between">
                                                <span>Harga Beli <span className="text-red-500">*</span></span>
                                            </label>
                                            <input type="number" min="0" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] text-center" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2 flex justify-between">
                                                <span>Harga Jual <span className="text-red-500">*</span></span>
                                            </label>
                                            <input type="number" min="0" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] text-center" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2 flex justify-between">
                                                <span>Stok</span>
                                            </label>
                                            <input type="number" min="0" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] text-center" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2 flex justify-between">
                                                <span>Supplier</span>
                                            </label>
                                            <select className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] bg-slate-50 text-center">
                                                <option value="">-- Pilih --</option>
                                                <option value="Chani Karacca">Chani Karacca</option>
                                                <option value="Grosir Go Tama">Grosir Go Tama</option>
                                                <option value="Unilever">Unilever</option>
                                                <option value="Wings">Wings</option>
                                            </select>
                                        </div>
                                    </div>

                                    <hr className="my-4 border-slate-200" />

                                    <button
                                        className="w-full bg-red-600 text-white hover:bg-red-700 px-4 py-3 rounded-xl text-sm font-bold transition-colors shadow-sm"
                                    >
                                        TAMBAH BARANG
                                    </button>
                                </div>
                            </div>

                            <div className="lg:col-span-2 mt-4 lg:mt-0">
                                {/* Mobile List Cards Data Barang */}
                                <div className="md:hidden flex flex-col gap-3 pb-3">
                                    {[
                                        { id: '34543768999', name: 'Biskuit Better', buy: '1,800', sell: '2,000', supplier: 'Grosir Go Tama', stock: 0 },
                                        { id: '8994834000218', name: 'biskuit go rio', buy: '465', sell: '500', supplier: '-', stock: 0 },
                                        { id: '8998001302316', name: 'Biskuit Malkist Abon', buy: '880', sell: '1,000', supplier: '-', stock: 0 },
                                        { id: '089686611601', name: 'kripik Qtela singkong', buy: '1,800', sell: '2,000', supplier: '-', stock: 0 },
                                    ].map((item, index) => (
                                        <div key={index} className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-sm flex flex-col gap-3">
                                            <div className="flex justify-between items-start">
                                                <div className="flex flex-col gap-1 max-w-[85%]">
                                                    <div className="font-bold text-slate-800 text-[14px] leading-tight">{item.name}</div>
                                                    <div className="text-[11px] text-slate-500 font-medium break-all">ID: <span className="text-slate-700">{item.id}</span></div>
                                                </div>
                                                <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap bg-slate-100 px-2 py-0.5 rounded-full mt-0.5">No. {index + 1}</span>
                                            </div>

                                            <div className="flex items-center gap-1.5 flex-wrap">
                                                <span className="inline-flex items-center text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-lg truncate">
                                                    Supplier: {item.supplier || '-'}
                                                </span>
                                                <span className="inline-flex items-center text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-lg">
                                                    Stok: {item.stock}
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2 mt-1">
                                                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex flex-col gap-1 h-full justify-center">
                                                    <span className="text-slate-500 font-medium text-[10px]">Harga Beli</span>
                                                    <span className="text-slate-700 font-bold text-[13px]">{item.buy}</span>
                                                </div>
                                                <div className="bg-green-50/50 p-2.5 rounded-lg border border-green-100 flex flex-col gap-1 h-full justify-center text-right">
                                                    <span className="text-slate-500 font-semibold text-[10px]">Harga Jual</span>
                                                    <span className="font-bold text-green-600 text-[14px]">{item.sell}</span>
                                                </div>
                                            </div>

                                            <div className="flex gap-2 mt-1 pt-3 border-t border-slate-100">
                                                <button className="flex-1 h-8 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center hover:bg-yellow-100 transition-colors" title="Edit">
                                                    <span className="material-symbols-outlined text-[16px]">edit</span>
                                                </button>
                                                <button className="flex-1 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors" title="Hapus">
                                                    <span className="material-symbols-outlined text-[16px]">delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Desktop Table */}
                                <div className="hidden md:block overflow-x-auto">
                                    <table className="w-full text-sm text-left border">
                                        <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase text-xs">
                                            <tr>
                                                <th className="px-4 py-3 text-center border-r">No</th>
                                                <th className="px-4 py-3 text-center border-r">ID / Barcode</th>
                                                <th className="px-4 py-3 text-center border-r">Nama Barang</th>
                                                <th className="px-4 py-3 text-center border-r">Harga Beli</th>
                                                <th className="px-4 py-3 text-center border-r">Harga Jual</th>
                                                <th className="px-4 py-3 text-center border-r">Supplier</th>
                                                <th className="px-4 py-3 text-center border-r">Stok</th>
                                                <th className="px-4 py-3 text-center">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {[
                                                { id: '34543768999', name: 'Biskuit Better', buy: '1,800', sell: '2,000', supplier: 'Grosir Go Tama', stock: 0 },
                                                { id: '8994834000218', name: 'biskuit go rio', buy: '465', sell: '500', supplier: '', stock: 0 },
                                                { id: '8998001302316', name: 'Biskuit Malkist Abon', buy: '880', sell: '1,000', supplier: '', stock: 0 },
                                                { id: '089686611601', name: 'kripik Qtela singkong', buy: '1,800', sell: '2,000', supplier: '', stock: 0 },
                                            ].map((item, index) => (
                                                <tr key={index} className="hover:bg-slate-50 transition-colors">
                                                    <td className="px-4 py-3 text-center text-slate-500 border-r">{index + 1}</td>
                                                    <td className="px-4 py-3 text-center font-medium text-slate-700 border-r">{item.id}</td>
                                                    <td className="px-4 py-3 text-center font-bold text-slate-800 border-r">{item.name}</td>
                                                    <td className="px-4 py-3 text-right font-medium text-slate-600 border-r">{item.buy}</td>
                                                    <td className="px-4 py-3 text-right font-bold text-green-600 border-r">{item.sell}</td>
                                                    <td className="px-4 py-3 text-center text-slate-600 border-r">{item.supplier}</td>
                                                    <td className="px-4 py-3 text-center font-medium border-r">{item.stock}</td>
                                                    <td className="px-4 py-3">
                                                        <div className="flex justify-center gap-1">
                                                            <button className="w-8 h-8 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center hover:bg-yellow-100 transition-colors" title="Edit">
                                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                                            </button>
                                                            <button className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors" title="Hapus">
                                                                <span className="material-symbols-outlined text-[18px]">delete</span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'supplier' && (
                    <div>
                        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                            <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">add</span>
                                Tambah Data
                            </button>
                        </div>
                        <div className="p-4 sm:p-6">
                            {/* Mobile List Cards Supplier */}
                            <div className="md:hidden flex flex-col gap-3 pb-3">
                                {[
                                    { name: 'Chani Karacca', hp: '2147483647', address: '2147483647' },
                                    { name: 'Grosir Go Tama', hp: '2147483647', address: '2147483647' },
                                    { name: 'Unilever', hp: '2147483647', address: '2147483647' },
                                    { name: 'Wings', hp: '873472647', address: '873472647' },
                                ].map((item, index) => (
                                    <div key={index} className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-sm flex flex-col gap-2">
                                        <div className="flex justify-between items-start">
                                            <div className="font-bold text-slate-800 text-[14px] leading-tight">{item.name}</div>
                                            <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap bg-slate-100 px-2 py-0.5 rounded-full mt-0.5">No. {index + 1}</span>
                                        </div>
                                        <div className="flex flex-col gap-1 mt-1">
                                            <div className="text-[12px] text-slate-600 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[14px] text-slate-400">call</span>
                                                <span className="font-medium">{item.hp}</span>
                                            </div>
                                            <div className="text-[12px] text-slate-600 flex items-start gap-2">
                                                <span className="material-symbols-outlined text-[14px] text-slate-400 mt-0.5">location_on</span>
                                                <span className="leading-snug">{item.address}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 mt-2 pt-3 border-t border-slate-100">
                                            <button className="flex-1 h-8 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center hover:bg-yellow-100 transition-colors" title="Edit">
                                                <span className="material-symbols-outlined text-[16px]">edit</span>
                                            </button>
                                            <button className="flex-1 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors" title="Hapus">
                                                <span className="material-symbols-outlined text-[16px]">delete</span>
                                            </button>
                                            <button className="flex-1 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors" title="Penerimaan">
                                                <span className="material-symbols-outlined text-[16px]">check</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop Table View */}
                            <div className="hidden md:block overflow-x-auto">
                                <table className="w-full text-sm text-left border">
                                    <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase text-xs">
                                        <tr>
                                            <th className="px-4 py-3 text-center border-r w-12">No</th>
                                            <th className="px-4 py-3 text-center border-r">Nama</th>
                                            <th className="px-4 py-3 text-center border-r">HP</th>
                                            <th className="px-4 py-3 text-center border-r">Alamat</th>
                                            <th className="px-4 py-3 text-center w-36">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {[
                                            { name: 'Chani Karacca', hp: '2147483647', address: '2147483647' },
                                            { name: 'Grosir Go Tama', hp: '2147483647', address: '2147483647' },
                                            { name: 'Unilever', hp: '2147483647', address: '2147483647' },
                                            { name: 'Wings', hp: '873472647', address: '873472647' },
                                        ].map((item, index) => (
                                            <tr key={index} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-4 py-3 text-center text-slate-500 border-r">{index + 1}</td>
                                                <td className="px-4 py-3 text-center font-bold text-slate-800 border-r">{item.name}</td>
                                                <td className="px-4 py-3 text-center font-medium text-slate-600 border-r">{item.hp}</td>
                                                <td className="px-4 py-3 text-center text-slate-600 border-r">{item.address}</td>
                                                <td className="px-4 py-3">
                                                    <div className="flex justify-center gap-1">
                                                        <button className="w-8 h-8 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center hover:bg-yellow-100 transition-colors" title="Edit">
                                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                                        </button>
                                                        <button className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors" title="Hapus">
                                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                                        </button>
                                                        <button className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors" title="Penerimaan">
                                                            <span className="material-symbols-outlined text-[18px]">check</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
