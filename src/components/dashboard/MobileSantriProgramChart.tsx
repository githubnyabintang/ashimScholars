import { santriProgramData } from './chartData';

export default function MobileSantriProgramChart() {
    return (
        <div className="w-full mt-4">
            <h3 className="text-[13px] font-bold text-slate-800 mb-2 px-1">Proporsi Program Pend.</h3>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm w-full p-4">
                <div className="flex flex-col gap-3">
                    {santriProgramData.map((item, index) => {
                        const total = santriProgramData.reduce((acc, curr) => acc + curr.y, 0);
                        const percentage = ((item.y / total) * 100).toFixed(1);
                        const colors = ['bg-[#0ea5e9]', 'bg-[#6366f1]', 'bg-[#22c55e]', 'bg-[#f59e0b]', 'bg-[#ef4444]'];
                        const colorClass = colors[index % colors.length];

                        return (
                            <div key={index} className="flex flex-col gap-1.5">
                                <div className="flex justify-between items-center text-[12px]">
                                    <span className="font-semibold text-slate-700">{item.name}</span>
                                    <span className="font-bold text-slate-900">{item.y} <span className="text-slate-400 font-medium ml-0.5">({percentage}%)</span></span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div className={`${colorClass} h-2 rounded-full transition-all duration-1000`} style={{ width: `${percentage}%` }}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
