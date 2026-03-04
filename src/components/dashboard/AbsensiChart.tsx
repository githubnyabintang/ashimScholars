"use client";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const data = [
    { kampus: "KAMPUS I PUTRA", total: 17, sudah: 16, belum: 1 },
    { kampus: "KAMPUS II PUTRA", total: 100, sudah: 87, belum: 13 },
    { kampus: "KAMPUS PUTRI", total: 15, sudah: 16, belum: -1 },
    { kampus: "HMQ TELKOM", total: 7, sudah: 0, belum: 7 }
];

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
        categories: data.map(d => d.kampus),
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
        data: data.map(d => d.total)
    }, {
        type: 'column',
        name: 'Sudah rekap',
        color: '#5b47c4', // purple blue
        data: data.map(d => d.sudah)
    }, {
        type: 'column',
        name: 'Belum Rekap',
        color: '#10d182', // bright green
        data: data.map(d => d.belum)
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
                        {data.map((item, index) => (
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
