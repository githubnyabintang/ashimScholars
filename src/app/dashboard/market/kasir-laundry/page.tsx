"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copy, FileText, FileSpreadsheet, FileIcon as FilePdf, Printer, Eye } from "lucide-react";

export default function KasirLaundryPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [selectedSantri, setSelectedSantri] = useState("");
    const [qty, setQty] = useState("");
    const [harga, setHarga] = useState(7000); // Default harga per Kg

    // Dummy Santri Options
    const santriOptions = [
        { id: "15670621404", name: "A. Firdaus Ainur Ridho", kampus: "KAMPUS II PUTRA" },
        { id: "15679128978", name: "A. Mappatoba", kampus: "KAMPUS II PUTRA" },
        { id: "1574112062", name: "Afika Azzahra", kampus: "KAMPUS PUTRI" },
    ];

    // Dummy Transaction Data
    const transactionData = [
        {
            id: "78",
            idSantri: "15774096240",
            idTransaksi: "1770795023",
            tglTransaksi: "11-02-2026",
            oleh: "Aina Qurani Putri",
            kampus: "KAMPUS PUTRI",
            santri: "Iftinaan Kamil",
            qty: 2,
            harga: 7000,
            total: 14000,
            saldoTerbaru: 12.60,
            status: "Daftar"
        },
        {
            id: "79",
            idSantri: "15774096240",
            idTransaksi: "1770794947",
            tglTransaksi: "11-02-2026",
            oleh: "Aina Qurani Putri",
            kampus: "KAMPUS PUTRI",
            santri: "Iftinaan Kamil",
            qty: 1.6,
            harga: 7000,
            total: 11200,
            saldoTerbaru: 12.60,
            status: "Daftar"
        },
        {
            id: "80",
            idSantri: "15653355444",
            idTransaksi: "1770794893",
            tglTransaksi: "11-02-2026",
            oleh: "Aina Qurani Putri",
            kampus: "KAMPUS PUTRI",
            santri: "Mufidah Masyhurah",
            qty: 1.1,
            harga: 7000,
            total: 7700,
            saldoTerbaru: 12.30,
            status: "Daftar"
        }
    ];

    const filteredData = transactionData.filter(item =>
        item.santri.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.idSantri.includes(searchTerm) ||
        item.idTransaksi.includes(searchTerm)
    );

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-[#f4f6f9] min-h-screen text-[#343a40]">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#343a40]">Transaksi Laundry</h1>
                <button className="btn btn-sm bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded shadow-sm transition-colors text-sm">
                    Logout
                </button>
            </div>

            <div className="mb-4 text-sm font-medium text-gray-700">
                Halo : H SYAM AMIR YUNUS (Superadmin)
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Input Transaction Card */}
                <div className="col-span-1 lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                        <h2 className="text-lg font-semibold text-gray-800 border-b pb-3 mb-4">Input Transaksi Baru</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Pilih Santri</label>
                                <select
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F] focus:border-transparent text-center"
                                    value={selectedSantri}
                                    onChange={(e) => setSelectedSantri(e.target.value)}
                                    required
                                >
                                    <option value="">-- Pilih --</option>
                                    {santriOptions.map(option => (
                                        <option key={option.id} value={option.id}>
                                            {option.name} / {option.id} / {option.kampus}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">QTY (Kg)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F] focus:border-transparent text-center"
                                    placeholder="0.00"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Harga per Kg</label>
                                <input
                                    type="number"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F] focus:border-transparent text-center"
                                    value={harga}
                                    onChange={(e) => setHarga(parseInt(e.target.value) || 0)}
                                    required
                                />
                            </div>

                            <div className="mb-5 p-3 bg-gray-50 rounded-md border border-gray-200">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm text-gray-600 font-medium">Total:</span>
                                    <span className="text-lg font-bold text-[#00642F]">
                                        Rp {(parseFloat(qty || "0") * harga).toLocaleString('id-ID')}
                                    </span>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-[#00642F] hover:bg-[#005224] text-white font-medium py-2.5 px-4 rounded shadow-sm transition-colors flex items-center justify-center gap-2"
                            >
                                <i className="fas fa-save"></i> Simpan Transaksi
                            </button>
                        </form>
                    </div>
                </div>

                {/* Data Table Card */}
                <div className="col-span-1 lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between sm:items-center bg-gray-50 gap-3">
                            <h2 className="text-lg font-semibold text-gray-800">Riwayat Transaksi Laundry</h2>
                            <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
                                <button className="px-3 py-2 sm:py-1.5 text-xs font-medium bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center justify-center whitespace-nowrap" aria-label="Copy to Clipboard" title="Copy to Clipboard">
                                    <Copy className="h-4 w-4 text-gray-600 sm:mr-0 mr-1" /> <span className="sm:hidden">Copy</span>
                                </button>
                                <button className="px-3 py-2 sm:py-1.5 text-xs font-medium bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center justify-center whitespace-nowrap" aria-label="Export to CSV" title="Export to CSV">
                                    <FileText className="h-4 w-4 text-gray-600 sm:mr-0 mr-1" /> <span className="sm:hidden">CSV</span>
                                </button>
                                <button className="px-3 py-2 sm:py-1.5 text-xs font-medium bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center justify-center whitespace-nowrap" aria-label="Export to Excel" title="Export to Excel">
                                    <FileSpreadsheet className="h-4 w-4 text-green-600 sm:mr-0 mr-1" /> <span className="sm:hidden">Excel</span>
                                </button>
                                <button className="px-3 py-2 sm:py-1.5 text-xs font-medium bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center justify-center whitespace-nowrap" aria-label="Export to PDF" title="Export to PDF">
                                    <FilePdf className="h-4 w-4 text-red-600 sm:mr-0 mr-1" /> <span className="sm:hidden">PDF</span>
                                </button>
                                <button className="px-3 py-2 sm:py-1.5 text-xs font-medium bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center justify-center whitespace-nowrap" aria-label="Print" title="Print Table">
                                    <Printer className="h-4 w-4 text-gray-600 sm:mr-0 mr-1" /> <span className="sm:hidden">Print</span>
                                </button>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="mr-2">Show</span>
                                    <select
                                        className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#00642F]"
                                        value={entriesPerPage}
                                        onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                                    >
                                        <option value={10}>10</option>
                                        <option value={25}>25</option>
                                        <option value={50}>50</option>
                                        <option value={100}>100</option>
                                    </select>
                                    <span className="ml-2">entries</span>
                                </div>

                                <div className="flex items-center">
                                    <span className="mr-2 text-sm text-gray-600">Search:</span>
                                    <input
                                        type="text"
                                        className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#00642F] lg:w-64"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Mobile List Cards Riwayat Transaksi */}
                            <div className="md:hidden flex flex-col gap-3 py-3">
                                {filteredData.map((item, index) => (
                                    <div key={item.id} className="bg-white border border-gray-200 p-3.5 rounded-xl shadow-sm flex flex-col gap-3">
                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col gap-1 w-[80%]">
                                                <div className="font-bold text-gray-800 text-[14px] leading-tight break-all">{item.santri}</div>
                                                <div className="text-[10px] text-gray-500 font-medium">
                                                    ID: <span className="text-red-500">{item.idSantri}</span> | Trans: <span className="text-red-500">{item.idTransaksi}</span>
                                                </div>
                                            </div>
                                            <span className="text-[10px] text-gray-500 font-medium whitespace-nowrap">No. {item.id}</span>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-lg truncate">
                                                {item.kampus}
                                            </span>
                                            <span className="inline-flex items-center text-[10px] font-bold text-gray-700 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-lg">
                                                {item.status}
                                            </span>
                                            <span className="inline-flex items-center text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-lg">
                                                Saldo: {item.saldoTerbaru.toFixed(2)} Kg
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2 mt-1">
                                            <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100 flex flex-col gap-1 h-full justify-center">
                                                <span className="text-gray-500 font-medium text-[10px] flex justify-between w-full">Qty <span>{item.qty} Kg</span></span>
                                                <span className="text-gray-500 font-medium text-[10px] flex justify-between w-full">Harga <span className="text-gray-800 font-bold">{item.harga.toLocaleString('id-ID')}</span></span>
                                            </div>
                                            <div className="bg-green-50/50 p-2.5 rounded-lg border border-green-100 flex flex-col gap-1 h-full justify-center text-right">
                                                <span className="text-gray-500 font-semibold text-[10px]">Total</span>
                                                <span className="font-bold text-[#00642F] text-[14px]">Rp {item.total.toLocaleString('id-ID')}</span>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center mt-1 pt-3 border-t border-gray-100">
                                            <div className="text-[10px] text-gray-500">
                                                {item.tglTransaksi} / {item.oleh}
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="p-1.5 w-8 h-8 flex items-center justify-center bg-yellow-500 text-white rounded-lg shadow-sm hover:bg-yellow-600 transition-colors" title="Edit">
                                                    <i className="fas fa-edit text-[14px]"></i>
                                                </button>
                                                <button className="p-1.5 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-lg shadow-sm hover:bg-red-600 transition-colors" title="Hapus">
                                                    <i className="fas fa-trash text-[14px]"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {filteredData.length === 0 && (
                                    <div className="text-center py-8 text-gray-500 bg-white border border-gray-200 rounded-xl text-sm">
                                        Tidak ada data transaksi yang ditemukan
                                    </div>
                                )}
                            </div>

                            <div className="hidden md:block overflow-x-auto border rounded-md">
                                <table className="min-w-full divide-y divide-gray-200 text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-[50px]">No</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID / Tgl Transaksi / Oleh</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Santri & Kampus</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rincian & Total</th>
                                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Saldo Terbaru</th>
                                            <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-[120px]">Status</th>
                                            <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-[100px]">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {filteredData.map((item, index) => (
                                            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-3 py-3 text-center text-gray-600 font-medium">
                                                    {item.id}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="text-gray-700">
                                                        <div>ID Santri: <span className="text-red-500 font-medium">{item.idSantri}</span></div>
                                                        <div>ID Trans: <span className="text-red-500 font-medium">{item.idTransaksi}</span></div>
                                                        <div>Tgl: <span className="text-red-500 font-medium">{item.tglTransaksi}</span></div>
                                                        <div>Oleh: <span className="text-red-500 font-medium">{item.oleh}</span></div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="font-semibold text-gray-800">{item.santri}</div>
                                                    <div className="text-gray-500 text-xs mt-1">{item.kampus}</div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="text-gray-700">
                                                        <div className="flex justify-between items-center"><span className="text-gray-500">Qty:</span> <span className="font-medium">{item.qty} Kg</span></div>
                                                        <div className="flex justify-between items-center"><span className="text-gray-500">Harga:</span> <span>{item.harga.toLocaleString('id-ID')}</span></div>
                                                        <div className="flex justify-between items-center mt-1 pt-1 border-t border-gray-100"><span className="text-gray-700 font-semibold">Total:</span> <span className="text-[#00642F] font-bold">{item.total.toLocaleString('id-ID')}</span></div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-center">
                                                    <span className="inline-block bg-blue-50 text-blue-700 font-medium px-2 py-1 rounded border border-blue-200">
                                                        {item.saldoTerbaru.toFixed(2)} Kg
                                                    </span>
                                                </td>
                                                <td className="px-3 py-3 text-center">
                                                    <span className="text-xs bg-gray-100 text-gray-800 font-medium px-2 py-1 rounded">
                                                        {item.status}
                                                    </span>
                                                </td>
                                                <td className="px-3 py-3 text-center">
                                                    <div className="flex justify-center gap-2">
                                                        <button className="p-1.5 bg-yellow-500 text-white rounded shadow-sm hover:bg-yellow-600 transition-colors" title="Edit">
                                                            <i className="fas fa-edit text-sm"></i>
                                                        </button>
                                                        <button className="p-1.5 bg-red-500 text-white rounded shadow-sm hover:bg-red-600 transition-colors" title="Hapus">
                                                            <i className="fas fa-trash text-sm"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {filteredData.length === 0 && (
                                            <tr>
                                                <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                                                    Tidak ada data transaksi yang ditemukan
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                                <div>
                                    Showing {filteredData.length > 0 ? 1 : 0} to {Math.min(entriesPerPage, filteredData.length)} of {filteredData.length} entries
                                </div>
                                <div className="flex">
                                    <button className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                                        Previous
                                    </button>
                                    <button className="px-3 py-1 bg-[#00642F] text-white border border-[#00642F] font-medium">
                                        1
                                    </button>
                                    <button className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
