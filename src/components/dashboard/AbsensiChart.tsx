"use client";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { absensiData } from './chartData';

const options: Highcharts.Options = {
    chart: {
        type: 'column',
        height: 350
    },
    title: {
        text: 'Rekap Absensi Periode Bulan 2 - 2026',
        style: { fontSize: '15px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }
    },
    xAxis: {
        categories: absensiData.map(d => d.kampus),
        crosshair: true,
        labels: {
            style: {
                fontSize: '10px',
                fontFamily: 'Inter, sans-serif'
            }
        }
    },
    yAxis: {
        min: -25,
        title: {
            text: 'Jum. Pegawai',
            style: { fontSize: '11px' }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            borderRadius: 2
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        type: 'column',
        name: 'Total Pegawai',
        color: '#2ebcff', // cyan blue
        data: absensiData.map(d => d.total)
    }, {
        type: 'column',
        name: 'Sudah rekap',
        color: '#5b47c4', // purple blue
        data: absensiData.map(d => d.sudah)
    }, {
        type: 'column',
        name: 'Belum Rekap',
        color: '#10d182', // bright green
        data: absensiData.map(d => d.belum)
    }]
};

export default function AbsensiChart() {
    return (
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm w-full">
            <HighchartsReact highcharts={Highcharts} options={options} />

            <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm text-center text-slate-600 border border-slate-100">
                    <thead className="text-xs text-slate-700 font-semibold bg-slate-50 border-b border-slate-100">
                        <tr>
                            <th scope="col" className="px-4 py-3 text-left">Nama Kampus</th>
                            <th scope="col" className="px-4 py-3">Total Pegawai</th>
                            <th scope="col" className="px-4 py-3">Sudah rekap</th>
                            <th scope="col" className="px-4 py-3">Belum Rekap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {absensiData.map((item, index) => (
                            <tr key={index} className="bg-white border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                <td className="px-4 py-3 font-medium text-slate-800 text-left">{item.kampus}</td>
                                <td className="px-4 py-3">{item.total}</td>
                                <td className="px-4 py-3">{item.sudah}</td>
                                <td className="px-4 py-3">{item.belum}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
