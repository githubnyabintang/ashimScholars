import sys

with open('d:/.IMAS/ashimScholars/src/app/dashboard/page.tsx', 'r') as f:
    lines = f.readlines()

new_content = """                    <main className="flex-1 overflow-y-auto w-full custom-scrollbar bg-[#F8FAFC]">
                        <div className="p-4 md:p-6 mb-4">
                            <h1 className="text-3xl font-bold text-primary mb-6">Dashboard</h1>
                            
                            <div className="glass-panel-dash rounded-xl p-4 mb-6 bg-white border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-sm shadow-sm gap-2">
                                <div className="font-medium text-slate-600">Bulan Aktif : <span className="text-red-500 font-bold ml-1">2 - 2026</span></div>
                                <div className="font-medium text-slate-600">Periode Berjalan : <span className="text-red-500 font-bold ml-1">02-2026</span></div> 
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="glass-panel-dash p-6 rounded-2xl flex items-center gap-5 group hover:shadow-lg transition-all bg-white border border-slate-100 shadow-sm relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 text-primary/5 group-hover:text-primary/10 transition-colors">
                                        <span className="material-symbols-outlined !text-[120px]">person</span>
                                    </div>
                                    <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-md z-10 hover:scale-105 transition-transform">
                                        <span className="material-symbols-outlined text-[32px]">person</span>
                                    </div>
                                    <div className="z-10">
                                        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Total Pegawai</p>
                                        <div className="flex items-baseline gap-2">
                                            <h3 className="text-3xl font-black text-card-text">145</h3>
                                            <span className="text-sm font-medium text-slate-500">Pegawai</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="glass-panel-dash p-6 rounded-2xl flex items-center gap-5 group hover:shadow-lg transition-all bg-white border border-slate-100 shadow-sm relative overflow-hidden">
                                     <div className="absolute -right-4 -top-4 text-green-500/5 group-hover:text-green-500/10 transition-colors">
                                        <span className="material-symbols-outlined !text-[120px]">person</span>
                                    </div>
                                    <div className="h-16 w-16 rounded-2xl bg-green-500 flex items-center justify-center text-white shadow-md z-10 hover:scale-105 transition-transform">
                                        <span className="material-symbols-outlined text-[32px]">person</span>
                                    </div>
                                    <div className="z-10">
                                        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Total Santri</p>
                                        <div className="flex items-baseline gap-2">
                                            <h3 className="text-3xl font-black text-card-text">532</h3>
                                            <span className="text-sm font-medium text-slate-500">Santri</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
"""

with open('d:/.IMAS/ashimScholars/src/app/dashboard/page.tsx', 'w') as f:
    f.writelines(lines[:422])
    f.write(new_content)
