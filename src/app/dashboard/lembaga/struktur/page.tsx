"use client";

import React from "react";
import Image from "next/image";

// Dummy data based on Administrator_Kelembagaan_Galeri_struktur.html
const strukturData = [
    {
        id: "15885014643",
        no: 1,
        nama: "Al Hafizh KH. Syam Amir Yunus",
        kategori: "Yayasan",
        jabatan: "Pimpinan Pengasuh",
        foto: "https://sim-pptq-imam-ashim.my.id/assets/upload/IMG_20240318_WA0037_jpg.jpg",
        status: "Tampil"
    },
    {
        id: "15885014445",
        no: 2,
        nama: "Jamalullaili, S.Pd.I",
        kategori: "Pegawai",
        jabatan: "Kepala Bidang Taklim dan Pembinaan",
        foto: "https://sim-pptq-imam-ashim.my.id/assets/upload/JAMALULLAILI_png.png",
        status: "Tampil"
    }
];

export default function StrukturLembagaPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Data Struktur</h1>
                    <p className="text-sm text-slate-500 mt-1">Kelola data struktur organisasi lembaga</p>
                </div>
                <button className="bg-[#00642F] hover:bg-[#005025] text-white px-4 py-2 rounded-xl font-medium text-sm transition-colors flex items-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Tambah Data
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
                    <div className="relative w-64">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                        <input
                            type="text"
                            placeholder="Cari struktur..."
                            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="h-9 w-9 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-colors">
                            <span className="material-symbols-outlined text-[20px]">filter_list</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                                <th className="p-4 font-semibold border-b border-slate-200 w-16 text-center">No</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Nama</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Kategori</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Jabatan</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Foto</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Status</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center w-28">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                            {strukturData.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 text-center font-medium">{item.no}</td>
                                    <td className="p-4 font-bold text-slate-800">{item.nama}</td>
                                    <td className="p-4 text-center">
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${item.kategori === 'Yayasan'
                                            ? 'bg-purple-100 text-purple-700'
                                            : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            {item.kategori}
                                        </span>
                                    </td>
                                    <td className="p-4 text-slate-600">{item.jabatan}</td>
                                    <td className="p-4 text-center">
                                        <div className="w-16 h-16 rounded-lg border border-slate-200 overflow-hidden mx-auto bg-slate-100 flex items-center justify-center relative">
                                            {/* Using standard img for external url to avoid next/image domain config issues for now */}
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={item.foto}
                                                alt={item.nama}
                                                className="object-cover w-full h-full"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                                                    if (e.currentTarget.parentElement) {
                                                        e.currentTarget.parentElement.innerHTML = '<span class="material-symbols-outlined text-slate-400">person</span>';
                                                    }
                                                }}
                                            />
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className="bg-[#E5F5E9] text-[#00642F] text-xs font-bold px-3 py-1 rounded-full border border-[#00642F]/20">
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="h-8 w-8 rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-500 hover:text-white flex items-center justify-center transition-colors tooltip" data-tip="Edit">
                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                            </button>
                                            <button className="h-8 w-8 rounded-lg bg-red-50 text-red-600 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors tooltip" data-tip="Hapus">
                                                <span className="material-symbols-outlined text-[18px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between text-sm text-slate-500">
                    <div>Menampilkan 1 hingga 2 dari 2 entri</div>
                    <div className="flex gap-1">
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50" disabled>Sebelumnya</button>
                        <button className="px-3 py-1 rounded-lg bg-[#00642F] text-white font-medium">1</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50" disabled>Selanjutnya</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
