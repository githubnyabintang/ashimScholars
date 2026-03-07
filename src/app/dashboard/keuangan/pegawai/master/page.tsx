import React from "react";

export default function KeuanganPegawaiMasterPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Master Data Keuangan Pegawai</h1>
                    <p className="text-sm text-slate-500 mt-1">Kelola master data gaji, tunjangan, dan elemen keuangan pegawai</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="border-b border-slate-200 bg-slate-50 overflow-x-auto hide-scrollbar">
                    <div className="flex">
                        <button className="px-6 py-4 text-sm font-bold text-[#00642F] border-b-2 border-[#00642F] whitespace-nowrap uppercase">
                            Gaji Pokok
                        </button>
                        <button className="px-6 py-4 text-sm font-bold text-slate-500 hover:text-slate-700 whitespace-nowrap uppercase">
                            Penerimaan
                        </button>
                        <button className="px-6 py-4 text-sm font-bold text-slate-500 hover:text-slate-700 whitespace-nowrap uppercase">
                            Pengurangan
                        </button>
                        <button className="px-6 py-4 text-sm font-bold text-slate-500 hover:text-slate-700 whitespace-nowrap uppercase">
                            Master Tunjangan
                        </button>
                        <button className="px-6 py-4 text-sm font-bold text-slate-500 hover:text-slate-700 whitespace-nowrap uppercase">
                            Master Presentasi
                        </button>
                        <button className="px-6 py-4 text-sm font-bold text-slate-500 hover:text-slate-700 whitespace-nowrap uppercase">
                            Master Apresiasi
                        </button>
                    </div>
                </div>

                <div className="p-3 md:p-4 border-b border-slate-200 flex flex-wrap items-center gap-2 md:gap-3">
                    <button className="flex-1 bg-[#00642F] text-white hover:bg-[#005025] px-3 py-2 md:px-4 rounded-xl text-xs md:text-sm font-bold transition-colors shadow-sm flex items-center justify-center gap-1.5 md:gap-2 whitespace-nowrap">
                        <span className="material-symbols-outlined text-[16px] md:text-[18px]">add</span>
                        Tambah Data
                    </button>
                    <button className="flex-1 bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 px-3 py-2 md:px-4 rounded-xl text-xs md:text-sm font-bold transition-colors flex items-center justify-center gap-1.5 md:gap-2 whitespace-nowrap">
                        <span className="material-symbols-outlined text-[16px] md:text-[18px]">payments</span>
                        Set Penggajian
                    </button>
                </div>

                {/* Mobile List Cards Pegawai Master Keuangan */}
                <div className="md:hidden flex flex-col gap-3 p-3 bg-slate-50/50">
                    {[
                        {
                            id: 1,
                            golongan: "IV/E Pembina Utama",
                            pendidikan: "S1, S2, S3",
                            masaKerja: "180 Bulan",
                            gajiF: "800,000",
                            ket: "17 Tahun Kerja"
                        },
                        {
                            id: 2,
                            golongan: "IV/D Pembina Tk.I",
                            pendidikan: "S1, S2, S3",
                            masaKerja: "24 Bulan",
                            gajiF: "700,000",
                            ket: "15 Tahun Kerja"
                        },
                        {
                            id: 3,
                            golongan: "Badal Khusus 1",
                            pendidikan: "SMA, D, S1, S2",
                            masaKerja: "12 Bulan",
                            gajiF: "0",
                            ket: "1 Tahun Kerja"
                        }
                    ].map((item, i) => (
                        <div key={item.id} className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-sm flex flex-col gap-3">
                            <div className="flex justify-between items-start">
                                <div className="font-bold text-slate-800 text-[14px]">Gaji Pokok</div>
                                <span className="font-semibold text-slate-500 text-[10px]">No. {i + 1}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[11px]">
                                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 flex flex-col gap-1">
                                    <span className="text-slate-500 font-medium">Golongan</span>
                                    <span className="font-bold text-red-600 truncate">{item.golongan}</span>
                                </div>
                                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 flex flex-col gap-1">
                                    <span className="text-slate-500 font-medium">Pendidikan</span>
                                    <span className="font-bold text-red-600 truncate">{item.pendidikan}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[11px]">
                                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 flex flex-col gap-1">
                                    <span className="text-slate-500 font-medium">Gaji/Pokok</span>
                                    <span className="font-bold text-green-600">Rp {item.gajiF}</span>
                                </div>
                                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 flex flex-col gap-1">
                                    <span className="text-slate-500 font-medium">Masa Kerja</span>
                                    <span className="font-bold text-slate-700">{item.masaKerja}</span>
                                </div>
                            </div>
                            <div className="text-[11px] text-slate-600 mt-1">
                                <span className="font-semibold text-slate-800 block mb-0.5">Keterangan:</span>
                                {item.ket}
                            </div>
                            <div className="flex justify-between items-center mt-1 pt-3 border-t border-slate-100">
                                <button className="w-full flex-1 mr-1 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors tooltip" title="Tambah Penerimaan">
                                    <span className="material-symbols-outlined text-[16px]">check</span>
                                </button>
                                <button className="w-full flex-1 mx-1 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center hover:bg-amber-100 transition-colors tooltip" title="Edit">
                                    <span className="material-symbols-outlined text-[16px]">edit</span>
                                </button>
                                <button className="w-full flex-1 ml-1 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors tooltip" title="Hapus">
                                    <span className="material-symbols-outlined text-[16px]">delete</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:block p-0 overflow-x-auto">
                    <table className="w-full text-sm text-left whitespace-nowrap">
                        <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 text-center w-16 uppercase text-xs">No</th>
                                <th className="px-6 py-4 text-center uppercase text-xs">Nama Keuangan</th>
                                <th className="px-6 py-4 uppercase text-xs">Pangkat / Ijazah</th>
                                <th className="px-6 py-4 text-center uppercase text-xs">Masa Kerja</th>
                                <th className="px-6 py-4 uppercase text-xs">Gaji / Pokok</th>
                                <th className="px-6 py-4 uppercase text-xs">Ket.</th>
                                <th className="px-6 py-4 text-center w-40 uppercase text-xs">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {[
                                {
                                    id: 1,
                                    golongan: "IV/E Pembina Utama",
                                    pendidikan: "S1, S2, S3",
                                    masaKerja: "180 Bulan",
                                    gajiF: "800,000",
                                    ket: "17 Tahun Kerja"
                                },
                                {
                                    id: 2,
                                    golongan: "IV/D Pembina Tk.I",
                                    pendidikan: "S1, S2, S3",
                                    masaKerja: "24 Bulan",
                                    gajiF: "700,000",
                                    ket: "15 Tahun Kerja"
                                },
                                {
                                    id: 3,
                                    golongan: "Badal Khusus 1",
                                    pendidikan: "SMA, D, S1, S2",
                                    masaKerja: "12 Bulan",
                                    gajiF: "0",
                                    ket: "1 Tahun Kerja"
                                }
                            ].map((item, i) => (
                                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-center text-slate-500">{i + 1}</td>
                                    <td className="px-6 py-4 text-center font-bold text-slate-800">Gaji Pokok</td>
                                    <td className="px-6 py-4">
                                        <div className="text-slate-500 text-xs mb-1">Pangkat / Golongan:</div>
                                        <div className="font-semibold text-red-600 mb-2">{item.golongan}</div>
                                        <div className="text-slate-500 text-xs mb-1">Pendidikan:</div>
                                        <div className="font-semibold text-red-600">{item.pendidikan}</div>
                                    </td>
                                    <td className="px-6 py-4 text-center font-medium text-slate-700">
                                        {item.masaKerja}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-slate-500 text-xs mb-1">Gaji Dasar:</div>
                                        <div className="font-bold text-red-600">Rp {item.gajiF}</div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">{item.ket}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center gap-2">
                                            <button className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors tooltip" title="Tambah Penerimaan">
                                                <span className="material-symbols-outlined text-[18px]">check</span>
                                            </button>
                                            <button className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center hover:bg-amber-100 transition-colors tooltip" title="Edit">
                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                            </button>
                                            <button className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors tooltip" title="Hapus">
                                                <span className="material-symbols-outlined text-[18px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
                    <div className="text-sm text-slate-500">
                        Menampilkan 3 data master keuangan
                    </div>
                </div>
            </div>
        </div>
    );
}
