import React from 'react';

interface StatCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: string;
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: string;
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
}

export default function StatCard({
    title,
    value,
    subtitle,
    icon,
    trend,
    trendValue,
    color = 'primary',
}: StatCardProps) {
    const colorStyles = {
        primary: 'bg-blue-50 text-blue-600',
        success: 'bg-emerald-50 text-emerald-600',
        warning: 'bg-amber-50 text-amber-600',
        danger: 'bg-red-50 text-red-600',
        info: 'bg-cyan-50 text-cyan-600',
    };

    const trendIcons = {
        up: 'trending_up',
        down: 'trending_down',
        neutral: 'remove',
    };

    const trendColors = {
        up: 'text-emerald-500',
        down: 'text-red-500',
        neutral: 'text-slate-400',
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-md">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-sm font-semibold text-slate-500 mb-1">{title}</p>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-3xl font-extrabold text-slate-800">{value}</h3>
                        {subtitle && <span className="text-sm font-medium text-slate-500">{subtitle}</span>}
                    </div>
                </div>
                <div className={`p-3 rounded-xl flex items-center justify-center ${colorStyles[color]}`}>
                    <span className="material-symbols-outlined text-[24px]">{icon}</span>
                </div>
            </div>
            {(trend || trendValue) && (
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-2">
                    {trend && (
                        <div className={`flex items-center justify-center ${trendColors[trend]}`}>
                            <span className="material-symbols-outlined text-[16px]">{trendIcons[trend]}</span>
                        </div>
                    )}
                    {trendValue && <span className="text-xs font-medium text-slate-500">{trendValue}</span>}
                </div>
            )}
        </div>
    );
}
