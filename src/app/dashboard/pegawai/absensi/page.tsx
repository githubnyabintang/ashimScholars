import React from "react";

// Dummy data based on Administrator_Pegawai_Absensi_pegawai.html
const absensiPegawaiData = [
    {
        no: 1,
        idPegawai: "15773920173",
        nama: "A.Nurafifah Muhja",
        tugasUtama: "Badal",
        tugas2: "",
        tugas3: ""
    },
    {
        no: 2,
        idPegawai: "15664103694",
        nama: "Abd Rahman Aras",
        tugasUtama: "Pembina",
        tugas2: "",
        tugas3: ""
    },
    {
        no: 3,
        idPegawai: "15830459154",
        nama: "Achmad Syafril Syafei",
        tugasUtama: "Pembina",
        tugas2: "",
        tugas3: ""
    },
    {
        no: 4,
        idPegawai: "15664093137",
        nama: "Achmad Yasin Attauhid",
        tugasUtama: "Pembina",
        tugas2: "",
        tugas3: ""
    },
    {
        no: 5,
        idPegawai: "15664802409",
        nama: "AGUNG",
        tugasUtama: "Badal",
        tugas2: "",
        tugas3: ""
    },
    {
        no: 6,
        idPegawai: "15664164768",
        nama: "Ahmad Afandi, S.Pd.I",
        tugasUtama: "Guru",
        tugas2: "",
        tugas3: ""
    },
    {
        no: 7,
        idPegawai: "15821927721",
        nama: "Ahmad Muttaqin",
        tugasUtama: "Badal",
        tugas2: "",
        tugas3: ""
    },
    {
        no: 8,
        idPegawai: "15811143849",
        nama: "Ahmad Naufal",
        tugasUtama: "Badal",
        tugas2: "",
        tugas3: ""
    },
    {
        no: 9,
        idPegawai: "15664209165",
        nama: "AHMAD NURDZAHABY DAHLAN",
        tugasUtama: "Badal",
        tugas2: "",
        tugas3: ""
    },
    {
        no: 10,
        idPegawai: "15660956880",
        nama: "Ahmad Ridha Hafid",
        tugasUtama: "Pembina",
        tugas2: "Badal",
        tugas3: ""
    }
];

export default function AbsensiPegawaiPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Data Absensi Pegawai</h1>
                    <p className="text-sm text-slate-500 mt-1">Kelola dan input presensi kehadiran pegawai</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <h2 className="font-bold text-slate-800 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#00642F]">format_list_bulleted</span>
                        Daftar Pegawai
                    </h2>
                    <div className="flex gap-2 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
                            <input
                                type="text"
                                placeholder="Cari ID atau Nama..."
                                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all"
                            />
                        </div>
                        <button className="bg-white border border-slate-200 text-slate-600 px-3 py-2 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">filter_list</span>
                            Filter
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                                <th className="p-4 font-semibold border-b border-slate-200 w-12 text-center">No</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center w-32">ID Pegawai</th>
                                <th className="p-4 font-semibold border-b border-slate-200">Nama</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Tugas Utama</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Tugas 2</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center">Tugas 3</th>
                                <th className="p-4 font-semibold border-b border-slate-200 text-center w-24">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                            {absensiPegawaiData.map((item) => (
                                <tr key={item.idPegawai} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="p-4 text-center font-medium">{item.no}</td>
                                    <td className="p-4 text-center">
                                        <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                                            {item.idPegawai}
                                        </span>
                                    </td>
                                    <td className="p-4 font-bold text-slate-800">{item.nama}</td>
                                    <td className="p-4 text-center">
                                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${item.tugasUtama === "Guru" ? "bg-blue-100 text-blue-700 border border-blue-200" :
                                                item.tugasUtama === "Pembina" ? "bg-emerald-100 text-emerald-700 border border-emerald-200" :
                                                    "bg-amber-100 text-amber-700 border border-amber-200"
                                            }`}>
                                            {item.tugasUtama}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        {item.tugas2 ? (
                                            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                                                {item.tugas2}
                                            </span>
                                        ) : (
                                            <span className="text-slate-300">-</span>
                                        )}
                                    </td>
                                    <td className="p-4 text-center">
                                        {item.tugas3 ? (
                                            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                                                {item.tugas3}
                                            </span>
                                        ) : (
                                            <span className="text-slate-300">-</span>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-center">
                                            <button className="h-8 w-8 rounded-lg bg-[#FFD500]/20 text-amber-700 hover:bg-[#FFD500] hover:text-slate-800 flex items-center justify-center transition-colors tooltip" data-tip="Input Absensi">
                                                <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-slate-200 bg-white flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-slate-500">
                    <div>Menampilkan 1 hingga 10 dari 170 entri</div>
                    <div className="flex gap-1">
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 transition-colors" disabled>Sebelumnya</button>
                        <button className="px-3 py-1 rounded-lg bg-[#00642F] text-white font-medium shadow-sm">1</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">2</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">3</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors pointer-events-none">...</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">17</button>
                        <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">Selanjutnya</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
