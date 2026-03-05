import React from "react";
import StatCard from "@/components/ui/StatCard";

// Dummy data based on Administrator_Pegawai_Data_absensi.html
const dataAbsensiList = [
    {
        id: "1",
        no: 1,
        nama: "Muhammad Adlin",
        idPegawai: "15664089177",
        absenMasuk: "Ya",
        absenPulang: "",
        tglAbsensi: "26-02-2026",
        jamAbsenMasuk: "10:35:19",
        jamAbsenPulang: "",
        tugasAbsen: "Pembina",
        absenTupok: "Hadir Absen Tupok",
        absenTupokStatus: "neutral",
        absenTutam: "",
        absenTutamStatus: "neutral"
    },
    {
        id: "2",
        no: 2,
        nama: "Fahmi SY., S.Pd.",
        idPegawai: "15664182372",
        absenMasuk: "Ya",
        absenPulang: "",
        tglAbsensi: "26-02-2026",
        jamAbsenMasuk: "09:45:36",
        jamAbsenPulang: "",
        tugasAbsen: "Pegawai",
        absenTupok: "Hadir Absen Tupok",
        absenTupokStatus: "success",
        absenTutam: "Hadir Absen Tutam",
        absenTutamStatus: "muted"
    },
    {
        id: "3",
        no: 3,
        nama: "Sulviana, S.Pd.",
        idPegawai: "15827409702",
        keterangan: "Mohon izin hari ini tdk masuk karena ada kegiatan di luar?",
        absenMasuk: "Izin",
        absenPulang: "",
        tglAbsensi: "26-02-2026",
        jamAbsenMasuk: "09:15:06",
        jamAbsenPulang: "",
        tugasAbsen: "Izin Masuk",
        absenTupok: "Izin Absen Tupok",
        absenTupokStatus: "success",
        absenTutam: "Izin Absen Tutam",
        absenTutamStatus: "muted"
    },
    {
        id: "4",
        no: 4,
        nama: "Ma'ruf Alhusari, S.Ag.",
        idPegawai: "15664168656",
        absenMasuk: "Ya",
        absenPulang: "Ya",
        tglAbsensi: "26-02-2026",
        jamAbsenMasuk: "09:03:52",
        jamAbsenPulang: "17:05:12",
        tugasAbsen: "Pegawai",
        absenTupok: "",
        absenTupokStatus: "neutral",
        absenTutam: "Hadir Absen Tutam",
        absenTutamStatus: "success"
    }
];

export default function DataAbsensiPegawaiPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Data Absensi Pegawai</h1>
                    <p className="text-sm text-slate-500 mt-1">Rekap dan riwayat absensi harian pegawai</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-slate-100 text-slate-700 hover:bg-slate-200 px-4 py-2 rounded-xl text-sm font-semibold transition-colors shadow-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                        Pilih Tanggal
                    </button>
                    <button className="bg-[#00642F] text-white hover:bg-[#005025] px-4 py-2 rounded-xl text-sm font-semibold transition-colors shadow-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        Export Data
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Absen Kampus 1"
                    value="0"
                    subtitle="Orang"
                    icon="domain"
                    trend="neutral"
                    trendValue="Hadir hari ini"
                    color="primary"
                />
                <StatCard
                    title="Absen Kampus 2"
                    value="32"
                    subtitle="Orang"
                    icon="domain"
                    trend="up"
                    trendValue="Hadir hari ini"
                    color="success"
                />
                <StatCard
                    title="Absen Kampus 3"
                    value="0"
                    subtitle="Orang"
                    icon="domain"
                    trend="neutral"
                    trendValue="Hadir hari ini"
                    color="info"
                />
                <StatCard
                    title="Absen Kampus 4"
                    value="0"
                    subtitle="Orang"
                    icon="domain"
                    trend="neutral"
                    trendValue="Hadir hari ini"
                    color="danger"
                />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <h2 className="font-bold text-slate-800 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#00642F]">list_alt</span>
                        Riwayat Absensi
                    </h2>
                    <div className="flex gap-2 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
                            <input
                                type="text"
                                placeholder="Cari nama pegawai..."
                                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] transition-all"
                            />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-wider">
                                <th className="p-3 font-semibold border-b border-slate-200 w-12 text-center">No</th>
                                <th className="p-3 font-semibold border-b border-slate-200">Nama</th>
                                <th className="p-3 font-semibold border-b border-slate-200 text-center">Absen Masuk</th>
                                <th className="p-3 font-semibold border-b border-slate-200 text-center">Absen Pulang</th>
                                <th className="p-3 font-semibold border-b border-slate-200 text-center">Tanggal</th>
                                <th className="p-3 font-semibold border-b border-slate-200 text-center">Jam Masuk</th>
                                <th className="p-3 font-semibold border-b border-slate-200 text-center">Jam Pulang</th>
                                <th className="p-3 font-semibold border-b border-slate-200 text-center">Tugas</th>
                                <th className="p-3 font-semibold border-b border-slate-200 text-center">Absen Tupok</th>
                                <th className="p-3 font-semibold border-b border-slate-200 text-center">Absen Tutam</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                            {dataAbsensiList.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="p-3 text-center">{item.no}</td>
                                    <td className="p-3">
                                        <p className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors cursor-pointer">
                                            {item.nama}
                                        </p>
                                        {item.keterangan && (
                                            <p className="text-xs text-amber-600 mt-1 italic border-l-2 border-amber-400 pl-2">
                                                {item.keterangan}
                                            </p>
                                        )}
                                    </td>
                                    <td className="p-3 text-center">
                                        {item.absenMasuk === "Ya" ? (
                                            <span className="text-emerald-500 font-bold"><span className="material-symbols-outlined text-[18px]">check_circle</span></span>
                                        ) : item.absenMasuk === "Izin" ? (
                                            <span className="text-amber-500 font-bold text-xs uppercase bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Izin</span>
                                        ) : (
                                            <span className="text-slate-300">-</span>
                                        )}
                                    </td>
                                    <td className="p-3 text-center">
                                        {item.absenPulang === "Ya" ? (
                                            <span className="text-teal-500 font-bold"><span className="material-symbols-outlined text-[18px]">check_circle</span></span>
                                        ) : (
                                            <span className="text-slate-300">-</span>
                                        )}
                                    </td>
                                    <td className="p-3 text-center font-medium text-slate-600 whitespace-nowrap">
                                        {item.tglAbsensi}
                                    </td>
                                    <td className="p-3 text-center">
                                        <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">
                                            {item.jamAbsenMasuk || "-"}
                                        </span>
                                    </td>
                                    <td className="p-3 text-center">
                                        {item.jamAbsenPulang ? (
                                            <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">
                                                {item.jamAbsenPulang}
                                            </span>
                                        ) : (
                                            <span className="text-slate-300">-</span>
                                        )}
                                    </td>
                                    <td className="p-3 text-center">
                                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 whitespace-nowrap">
                                            {item.tugasAbsen}
                                        </span>
                                    </td>
                                    <td className="p-3 text-center">
                                        {item.absenTupok ? (
                                            <div className={`text-xs ${item.absenTupokStatus === "success" ? "text-emerald-600 font-semibold" :
                                                    "text-slate-600"
                                                }`}>
                                                {item.absenTupok}
                                            </div>
                                        ) : null}
                                    </td>
                                    <td className="p-3 text-center">
                                        {item.absenTutam ? (
                                            <div className={`text-xs ${item.absenTutamStatus === "success" ? "text-emerald-600 font-semibold" :
                                                    item.absenTutamStatus === "muted" ? "text-slate-400 italic" :
                                                        "text-slate-600"
                                                }`}>
                                                {item.absenTutam}
                                            </div>
                                        ) : null}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-slate-200 bg-white flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-slate-500">
                    <div>Menampilkan 1 hingga 4 dari 32 entri (Kampus 2)</div>
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
