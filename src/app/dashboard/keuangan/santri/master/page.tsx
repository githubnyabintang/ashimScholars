import React from "react";

export default function KeuanganSantriMasterPage() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Master Keuangan Santri</h1>
                    <p className="text-sm text-slate-500 mt-1">Kelola saldo santri, biaya laundry, dan tabungan tabassam</p>
                </div>
                <button className="bg-[#00642F] text-white hover:bg-[#005025] px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                    Master Keuangan
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3">
                            <h2 className="text-lg font-bold text-red-600">Saldo Santri</h2>
                            <button className="bg-amber-50 text-amber-600 hover:bg-amber-100 px-4 py-2 rounded-xl text-sm font-bold transition-colors flex items-center gap-2 border border-amber-200">
                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                Biaya Laundry
                            </button>
                        </div>

                        <div className="w-full md:w-64">
                            <select className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00642F]/20 focus:border-[#00642F] cursor-pointer appearance-none bg-slate-50">
                                <option value="">--- Pilih Kampus ---</option>
                                <option value="4567879879">HMQ TELKOM</option>
                                <option value="5555578768">KAMPUS I PUTRA</option>
                                <option value="3564566">KAMPUS PUTRI</option>
                                <option value="32453534">KAMPUS II PUTRA</option>
                            </select>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 text-slate-600 font-semibold border-y border-slate-200 uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-4 text-center w-16">No</th>
                                    <th className="px-6 py-4 text-center">Kampus</th>
                                    <th className="px-6 py-4 text-center">Program</th>
                                    <th className="px-6 py-4">Nama / NIS</th>
                                    <th className="px-6 py-4 text-center">Laundry</th>
                                    <th className="px-6 py-4 text-right">Tabassam</th>
                                    <th className="px-6 py-4 text-center w-40">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 whitespace-nowrap">
                                {[
                                    {
                                        id: 1,
                                        kampus: "KAMPUS PUTRI",
                                        program: "Fatimah",
                                        nis: "15653355273",
                                        nama: "Eliana Nurpitasari",
                                        laundry: "324.90 Kg",
                                        tabassam: "658,000"
                                    },
                                    {
                                        id: 2,
                                        kampus: "KAMPUS I PUTRA",
                                        program: "Tahfiizh Murni",
                                        nis: "15672967074",
                                        nama: "Abdullah Azzam",
                                        laundry: "219.49 Kg",
                                        tabassam: "0"
                                    },
                                    {
                                        id: 3,
                                        kampus: "KAMPUS II PUTRA",
                                        program: "XI.A",
                                        nis: "15708524661",
                                        nama: "Aiman Taufiqurrahman",
                                        laundry: "212.80 Kg",
                                        tabassam: "0"
                                    }
                                ].map((item, i) => (
                                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 text-center text-slate-500">{i + 1}</td>
                                        <td className="px-6 py-4 text-center font-medium text-slate-700">{item.kampus}</td>
                                        <td className="px-6 py-4 text-center font-medium text-slate-700">{item.program}</td>
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-slate-800">{item.nama}</div>
                                            <div className="text-xs text-slate-500 mt-1">{item.nis}</div>
                                        </td>
                                        <td className="px-6 py-4 text-center font-bold text-slate-700 bg-slate-50/50">
                                            {item.laundry}
                                        </td>
                                        <td className="px-6 py-4 text-right font-bold text-green-600">
                                            {item.tabassam === "0" ? "0" : `Rp ${item.tabassam}`}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-center gap-2">
                                                <button className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition-colors tooltip" title="Riwayat Keuangan">
                                                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                </button>
                                                <button className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center hover:bg-amber-100 transition-colors tooltip" title="Update Saldo">
                                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                                <button className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors tooltip" title="Tarik Tunai">
                                                    <span className="material-symbols-outlined text-[18px]">money</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-4 border-t border-slate-200 mt-4 flex items-center justify-between text-sm text-slate-500">
                        Menampilkan 3 data saldo santri
                    </div>
                </div>
            </div>
        </div>
    );
}
