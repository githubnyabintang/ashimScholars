"use client";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { pegawaiKampusData } from './chartData';

const options: Highcharts.Options = {
    chart: {
        type: 'pie',
        height: 320,
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Data Pegawai<br>Per Kampus',
        align: 'center',
        verticalAlign: 'middle',
        y: 0,
        style: { fontSize: '13px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }
    },
    tooltip: {
        pointFormat: '{point.name}: <b>{point.y} Pegawai</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            innerSize: '65%',
            borderRadius: 4,
            borderWidth: 2,
            borderColor: '#ffffff',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    legend: {
        enabled: true,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 'normal',
            color: '#64748b' // text-slate-500
        },
        itemMarginBottom: 5
    },
    credits: {
        enabled: false
    },
    series: [{
        type: 'pie',
        name: 'Pegawai',
        colors: ['#0ea5e9', '#6366f1', '#22c55e', '#f97316'],
        data: pegawaiKampusData
    }]
};

export default function MobilePegawaiKampusChart() {
    return (
        <div className="w-full">
            <h3 className="text-[13px] font-bold text-slate-800 mb-2 px-1">Sebaran Pegawai</h3>
            <div className="bg-white p-2 rounded-2xl border border-slate-100 shadow-sm w-full relative">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </div>
    );
}
