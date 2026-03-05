"use client";

import React from "react";

// Dummy data based on Administrator_Kelembagaan_Galeri.html
const galeriData = [
    {
        id: "1",
        no: 1,
        nama: "Kunjungan Sosialisasi Dosen dan Mahasiswa UIN Alauddin Makassar kepada Madrasah Aliyah",
        kategori: "Umum",
        foto: "https://sim-pptq-imam-ashim.my.id/assets/upload/WhatsApp_Image_2025_11_22_at_20_10_59_a75ddfee_jpg.jpg",
        status: "Tampil"
    },
    {
        id: "2",
        no: 2,
        nama: "Bimbingan Ilmu Tajwid Oleh Dr. H. Hizbullah Huda",
        kategori: "Pembelajaran",
        foto: "https://sim-pptq-imam-ashim.my.id/assets/upload/WhatsApp_Image_2025_11_25_at_19_38_40_6558603a_jpg.jpg",
        status: "Tampil"
    },
    {
        id: "3",
        no: 3,
        nama: "Pengajian rutin malam kamis Oleh ustadz jamaluddin kulau lc.",
        kategori: "Umum",
        foto: "https://sim-pptq-imam-ashim.my.id/assets/upload/WhatsApp_Image_2025_11_26_at_19_05_06_10a72c09_jpg.jpg",
        status: "Tampil"
    },
    {
        id: "4",
        no: 4,
        nama: "Kultum Sebelum Buka Puasa di hari Kamis",
        kategori: "Umum",
        foto: "https://sim-pptq-imam-ashim.my.id/assets/upload/WhatsApp_Image_2025_11_27_at_18_25_03_a51af5bd_jpg.jpg",
        status: "Tampil"
    },
    {
        id: "5",
        no: 5,
        nama: "PELATIHAN MHQ Oleh Ust Alimuddin Syukur di Kantor Halal KAMPUS 2 Kamis, 27 November 2025",
        kategori: "Prestasi",
        foto: "https://sim-pptq-imam-ashim.my.id/assets/upload/WhatsApp_Image_2025_11_27_at_19_54_22_10d30bec_jpg.jpg",
        status: "Tampil"
    }
];

export default function GaleriLembagaPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Data Galeri</h1>
                    <p className="text-sm text-slate-500 mt-1">Manajemen galeri foto kegiatan lembaga</p>
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
                            placeholder="Cari galeri..."
                            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all"
                        />
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <select className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all text-slate-600 font-medium w-full sm:w-auto">
                            <option value="">Semua Kategori</option>
                            <option value="Prestasi">Prestasi</option>
                            <option value="Pembelajaran">Pembelajaran</option>
                            <option value="Umum">Umum</option>
                            <option value="Olahraga">Olahraga</option>
                            <option value="Wisuda">Wisuda</option>
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
                                <th className="p-4 font-semibold border-b border-slate-200">Nama Kegiatan</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center w-36">Kategori</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center w-36">Foto</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center w-28">Status</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center w-28">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                            {galeriData.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 text-center font-medium">{item.no}</td>
                                    <td className="p-4">
                                        <p className="font-bold text-slate-800 line-clamp-2">{item.nama}</p>
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
                                        <div className="w-24 h-16 rounded-lg border border-slate-200 overflow-hidden mx-auto bg-slate-100 flex items-center justify-center relative shadow-sm">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={item.foto}
                                                alt={item.nama}
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
                                        <span className="bg-[#E5F5E9] text-[#00642F] text-[10px] right-2 font-extrabold px-2 py-1 rounded border border-[#00642F]/20">
                                            {item.status.toUpperCase()}
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
                    <div>Menampilkan 1 hingga 5 dari 18 entri</div>
                    <div className="flex gap-1">
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 transition-colors" disabled>Sebelumnya</button>
                        <button className="px-3 py-1 rounded-lg bg-[#00642F] text-white font-medium shadow-sm">1</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">2</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">3</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">4</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">Selanjutnya</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
