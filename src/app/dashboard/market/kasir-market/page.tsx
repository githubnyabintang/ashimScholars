"use client";

import React, { useState, useEffect } from "react";

interface Product {
    id: string;
    nama: string;
    harga: number;
}

interface CartItem {
    id: string;
    product: Product | null;
    qty: number;
    subtotal: number;
}

export default function MarketKasirPage() {
    const products: Product[] = [
        { id: "8886013366485", nama: "Spix mie goreng", harga: 1000 },
        { id: "8996001600382", nama: "Teh pucuk 500ml", harga: 5000 },
        { id: "567876324", nama: "Milku Coklat", harga: 4000 },
        { id: "8998866202732", nama: "Milku strawberry", harga: 4000 },
        { id: "8998009010569", nama: "Ultra Milk coklat 200ml", harga: 6000 },
        { id: "089686611601", nama: "kripik Qtela singkong", harga: 2000 },
        { id: "089686060461", nama: "pop mie jumbo kari ayam", harga: 5500 },
        { id: "089686060362", nama: "pop mie jumbo soto", harga: 5500 },
        { id: "089686067002", nama: "pop mie jumbo pedas dower", harga: 6000 },
        { id: "8994834000218", nama: "biskuit go rio", harga: 500 },
        { id: "8994075260730", nama: "Momogi Jagung Bakar", harga: 1000 },
        { id: "8888166609327", nama: "wafer khong guan classic", harga: 1000 },
        { id: "8998001302316", nama: "Biskuit Malkist Abon", harga: 1000 },
        { id: "8888166606395", nama: "Saltcheese Combo", harga: 1000 },
        { id: "34543768999", nama: "Biskuit Better", harga: 2000 },
        { id: "8993175535885", nama: "wafer nabati coklat 2000", harga: 2000 },
        { id: "8993175535678", nama: "wafer nabati keju 2000", harga: 2000 },
        { id: "3645645657657", nama: "sossis", harga: 7000 },
        { id: "6955424800351", nama: "sweep second", harga: 21000 },
        { id: "3864983247", nama: "terigu", harga: 10000 },
    ];

    const generateId = () => Math.random().toString(36).substr(2, 9);

    const [cart, setCart] = useState<CartItem[]>([
        { id: generateId(), product: null, qty: 1, subtotal: 0 },
        { id: generateId(), product: null, qty: 1, subtotal: 0 },
        { id: generateId(), product: null, qty: 1, subtotal: 0 },
        { id: generateId(), product: null, qty: 1, subtotal: 0 },
        { id: generateId(), product: null, qty: 1, subtotal: 0 },
    ]);

    const [isLaporanOpen, setIsLaporanOpen] = useState(false);

    const total = cart.reduce((acc, item) => acc + item.subtotal, 0);

    const addRow = () => {
        setCart([...cart, { id: generateId(), product: null, qty: 1, subtotal: 0 }]);
    };

    const updateProduct = (rowId: string, productId: string) => {
        const product = products.find(p => p.id === productId) || null;
        setCart(cart.map(item => {
            if (item.id === rowId) {
                const subtotal = product ? product.harga * item.qty : 0;
                return { ...item, product, subtotal };
            }
            return item;
        }));
    };

    const updateQty = (rowId: string, qty: string) => {
        const parsedQty = parseInt(qty, 10) || 0;
        setCart(cart.map(item => {
            if (item.id === rowId) {
                const subtotal = item.product ? item.product.harga * parsedQty : 0;
                return { ...item, qty: parsedQty, subtotal };
            }
            return item;
        }));
    };

    const removeRow = (rowId: string) => {
        setCart(cart.filter(item => item.id !== rowId));
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'F12') {
                e.preventDefault();
                addRow();
            }
            if (e.key === 'F10') {
                e.preventDefault();
                alert('Mencoba menyimpan data...');
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const laporanData = [
        { id: '1739242700', tgl: '11-02-2025', santriId: '15643370835', santriName: 'Masyita Khumairah Ridwan', amount: '14,000', admin: 'Superadmin PPTQ Al-Imam Ashim' },
        { id: '1739242668', tgl: '11-02-2025', santriId: '15643370835', santriName: 'Masyita Khumairah Ridwan', amount: '28,000', admin: 'Superadmin PPTQ Al-Imam Ashim' },
        { id: '1739241632', tgl: '11-02-2025', santriId: '15643370835', santriName: 'Masyita Khumairah Ridwan', amount: '21,000', admin: 'Superadmin PPTQ Al-Imam Ashim' },
        { id: '1739240462', tgl: '11-02-2025', santriId: '15643370835', santriName: 'Masyita Khumairah Ridwan', amount: '7,000', admin: 'Superadmin PPTQ Al-Imam Ashim' },
        { id: '1739007365', tgl: '08-02-2025', santriId: '15643370835', santriName: 'Masyita Khumairah Ridwan', amount: '6,000', admin: 'SITTI AISYAH YUNUS (Kepala Keuangan)' },
        { id: '1739007230', tgl: '08-02-2025', santriId: '15643370835', santriName: 'Masyita Khumairah Ridwan', amount: '20,000', admin: 'SITTI AISYAH YUNUS (Kepala Keuangan)' },
        { id: '1738794869', tgl: '06-02-2025', santriId: '15643370835', santriName: 'Masyita Khumairah Ridwan', amount: '71,000', admin: 'Superadmin PPTQ Al-Imam Ashim' },
    ];

    return (
        <div className="space-y-6 animate-fade-in-up md:max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Transaksi Market</h1>
                    <p className="text-sm text-slate-500 mt-1">Sistem Point of Sale (POS) Market</p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors uppercase self-start sm:self-auto">
                    Tunai
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hidden sm:block">
                <div className="bg-blue-50/50 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm">person</span>
                        </div>
                        <span className="text-sm font-semibold text-slate-700">Halo: H SYAM AMIR YUNUS (Superadmin)</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                <div className="xl:col-span-3">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-4 sm:p-6">
                            <div className="overflow-x-auto rounded-xl border border-slate-200">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase text-xs">
                                        <tr>
                                            <th className="px-4 py-3 text-left border-r w-[45%]">Nama Barang</th>
                                            <th className="px-4 py-3 text-center border-r w-[20%]">QTY</th>
                                            <th className="px-4 py-3 text-center border-r w-[20%]">Harga</th>
                                            <th className="px-4 py-3 text-center w-[15%]">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {cart.map((item, index) => (
                                            <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                                                <td className="px-2 py-2 border-r relative">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => removeRow(item.id)}
                                                            className="text-red-400 hover:text-red-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                        >
                                                            <span className="material-symbols-outlined text-[16px]">close</span>
                                                        </button>
                                                        <select
                                                            className="w-full text-sm border-0 bg-transparent focus:ring-2 focus:ring-[#00642F]/20 rounded-lg p-1 text-slate-700 font-medium"
                                                            value={item.product?.id || ""}
                                                            onChange={(e) => updateProduct(item.id, e.target.value)}
                                                        >
                                                            <option value="">Pilih Barang</option>
                                                            {products.map(p => (
                                                                <option key={p.id} value={p.id}>{p.nama}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </td>
                                                <td className="px-2 py-2 border-r">
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        className="w-full text-center border-0 bg-transparent focus:ring-2 focus:ring-[#00642F]/20 rounded-lg p-1 font-semibold text-slate-800"
                                                        value={item.qty}
                                                        onChange={(e) => updateQty(item.id, e.target.value)}
                                                    />
                                                </td>
                                                <td className="px-4 py-3 text-right text-slate-600 font-medium border-r">
                                                    {item.product ? item.product.harga.toLocaleString() : "0"}
                                                </td>
                                                <td className="px-4 py-3 text-right font-bold text-green-600">
                                                    {item.subtotal.toLocaleString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <button
                                    onClick={addRow}
                                    className="w-full sm:w-auto bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[18px]">add</span>
                                    Tambah Baris (F12)
                                </button>

                                <div className="text-right w-full sm:w-auto sm:hidden">
                                    <div className="text-xs text-slate-500 font-medium uppercase mb-1">Total Belanja</div>
                                    <div className="text-3xl font-black text-[#00642F]">
                                        Rp {total.toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-6">
                        <div className="p-5 border-b border-slate-100 bg-slate-50 hidden sm:block">
                            <div className="text-xs text-slate-500 font-medium uppercase mb-1">Total Belanja</div>
                            <div className="text-4xl font-black text-[#00642F] truncate">
                                Rp {total.toLocaleString()}
                            </div>
                        </div>

                        <div className="p-6">
                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Transaksi disimpan') }}>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">ID Santri</label>
                                    <input
                                        type="text"
                                        className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] font-medium"
                                        autoFocus
                                        placeholder="Scan/Ketik Barcode"
                                    />
                                    <p className="text-xs text-red-500 mt-2">* Scan / Ketik Barcode ID santri</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Sandi Saldo</label>
                                    <input
                                        type="password"
                                        className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F]"
                                        required
                                        placeholder="••••••••"
                                    />
                                </div>

                                <div className="pt-4 space-y-3">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#00642F] text-white hover:bg-[#00642F]/90 px-4 py-3.5 rounded-xl text-sm font-bold shadow-sm transition-all"
                                    >
                                        SIMPAN TRANSAKSI (F10)
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsLaporanOpen(true)}
                                        className="w-full bg-slate-100 text-slate-600 hover:bg-slate-200 px-4 py-3 rounded-xl text-sm font-bold transition-colors border border-slate-200"
                                    >
                                        LAPORAN TRANSAKSI
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Laporan */}
            {isLaporanOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-scale-in">
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                            <h2 className="text-lg font-bold text-slate-800">Laporan Transaksi Kasir</h2>
                            <button
                                onClick={() => setIsLaporanOpen(false)}
                                className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-300 transition-colors"
                            >
                                <span className="material-symbols-outlined text-[18px]">close</span>
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto">
                            <div className="overflow-x-auto rounded-xl border border-slate-200">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 text-xs uppercase">
                                        <tr>
                                            <th className="px-4 py-3 text-center border-r w-12">No</th>
                                            <th className="px-4 py-3 text-center border-r">ID Transaksi</th>
                                            <th className="px-4 py-3 text-center border-r">Tanggal</th>
                                            <th className="px-4 py-3 text-left border-r">Santri</th>
                                            <th className="px-4 py-3 text-right border-r">Total</th>
                                            <th className="px-4 py-3 text-center">Oleh</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {laporanData.map((item, index) => (
                                            <tr key={index} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-4 py-3 text-center text-slate-500 border-r">{index + 1}</td>
                                                <td className="px-4 py-3 text-center font-medium text-slate-700 border-r">{item.id}</td>
                                                <td className="px-4 py-3 text-center text-slate-600 border-r">{item.tgl}</td>
                                                <td className="px-4 py-3 border-r">
                                                    <div className="text-xs text-slate-500">ID: <span className="text-red-500 font-bold">{item.santriId}</span></div>
                                                    <div className="text-xs text-slate-500 mt-1">Nama: <span className="text-slate-800 font-bold">{item.santriName}</span></div>
                                                </td>
                                                <td className="px-4 py-3 text-right font-bold text-green-600 border-r">{item.amount}</td>
                                                <td className="px-4 py-3 text-center text-xs text-slate-600">{item.admin}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
