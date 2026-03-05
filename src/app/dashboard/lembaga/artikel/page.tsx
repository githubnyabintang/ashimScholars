"use client";

import React from "react";
import Image from "next/image";

// Dummy data based on Administrator_Kelembagaan_Galeri_artikel.html
const artikelData = [
    {
        id: "2701765117221",
        no: 1,
        judul: "Pelatihan Konten Kreator",
        kategori: "Umum",
        foto: "https://sim-pptq-imam-ashim.my.id/assets/upload/IMG_20251207_WA0029_jpg.jpg",
        status: "PUBLISH"
    },
    {
        id: "7491765085878",
        no: 2,
        judul: "80 Hafizh Qu'ran Ponpes Al Imam Ashim Kumpul di Bantaeng...",
        kategori: "Umum",
        foto: "https://sim-pptq-imam-ashim.my.id/assets/upload/Screenshot_2025_12_07_135641_png_1765085971.png",
        status: "PUBLISH"
    },
    {
        id: "9231765085777",
        no: 3,
        judul: "Kepala Sekolah MTs INOVATIF Bidang Pengembangan Lembaga Pendidikan",
        kategori: "Prestasi",
        foto: "https://sim-pptq-imam-ashim.my.id/assets/upload/494926791_1342429464023657_4637489250669506477_n_jpg.jpg",
        status: "PUBLISH"
    },
    {
        id: "3031765085669",
        no: 4,
        judul: "Kini PPTQ Al Imam Ashim Punya Media Digital, KH Syam Amir Apresiasi MUI Sulsel",
        kategori: "Umum",
        foto: "https://sim-pptq-imam-ashim.my.id/assets/upload/IMG_20220604_WA0001_1_jpg.jpg",
        status: "PUBLISH"
    }
];

export default function ArtikelLembagaPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Data Artikel</h1>
                    <p className="text-sm text-slate-500 mt-1">Manajemen publikasi artikel dan berita lembaga</p>
                </div>
                <button className="bg-[#00642F] hover:bg-[#005025] text-white px-4 py-2 rounded-xl font-medium text-sm transition-colors flex items-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Tambah Data
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full sm:w-72">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                        <input
                            type="text"
                            placeholder="Cari artikel..."
                            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all"
                        />
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <select className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all text-slate-600 font-medium w-full sm:w-auto">
                            <option value="">Semua Kategori</option>
                            <option value="Prestasi">Prestasi</option>
                            <option value="Pembelajaran">Pembelajaran</option>
                            <option value="Umum">Umum</option>
                        </select>
                        <button className="h-9 w-9 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-colors shrink-0">
                            <span className="material-symbols-outlined text-[20px]">filter_list</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                                <th className="p-4 font-semibold border-b border-slate-200 w-16 text-center">No</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Judul Artikel</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center w-32">Kategori</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center w-32">Gambar</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center w-32">Status</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center w-28">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                            {artikelData.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 text-center font-medium">{item.no}</td>
                                    <td className="p-4">
                                        <p className="font-bold text-slate-800 line-clamp-2">{item.judul}</p>
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${item.kategori === 'Prestasi'
                                            ? 'bg-amber-100 text-amber-700'
                                            : item.kategori === 'Pembelajaran'
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'bg-emerald-100 text-emerald-700'
                                            }`}>
                                            {item.kategori}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="w-20 h-14 rounded-lg border border-slate-200 overflow-hidden mx-auto bg-slate-100 flex items-center justify-center relative shadow-sm">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={item.foto}
                                                alt={item.judul}
                                                className="object-cover w-full h-full"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                                                    if (e.currentTarget.parentElement) {
                                                        e.currentTarget.parentElement.innerHTML = '<span class="material-symbols-outlined text-slate-400">image</span>';
                                                    }
                                                }}
                                            />
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className="bg-[#E5F5E9] text-[#00642F] text-[10px] font-extrabold px-2 py-1 rounded border border-[#00642F]/20">
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

                <div className="p-4 border-t border-slate-200 bg-white flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-slate-500">
                    <div>Menampilkan 1 hingga 4 dari 8 entri</div>
                    <div className="flex gap-1">
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 transition-colors" disabled>Sebelumnya</button>
                        <button className="px-3 py-1 rounded-lg bg-[#00642F] text-white font-medium shadow-sm">1</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">2</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">Selanjutnya</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
