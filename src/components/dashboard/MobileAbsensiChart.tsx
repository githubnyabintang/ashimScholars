"use client";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { absensiData } from './chartData';

const options: Highcharts.Options = {
    chart: {
        type: 'column',
        height: 280,
        backgroundColor: 'transparent',
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: absensiData.map(d => d.kampus.substring(0, 10) + '...'), // Shorten labels
        crosshair: true,
        labels: {
            style: {
                fontSize: '9px',
                fontFamily: 'Inter, sans-serif'
            },
            autoRotation: [-45]
        }
    },
    yAxis: {
        min: -20,
        title: {
            text: 'Pegawai',
            style: { fontSize: '9px' }
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
            pointPadding: 0.1,
            borderWidth: 0,
            borderRadius: 2
        }
    },
    legend: {
        itemStyle: { fontSize: '10px', color: '#64748b' },
        margin: 5
    },
    credits: {
        enabled: false
    },
    series: [{
        type: 'column',
        name: 'Total',
        color: '#2ebcff',
        data: absensiData.map(d => d.total)
    }, {
        type: 'column',
        name: 'Sudah',
        color: '#5b47c4',
        data: absensiData.map(d => d.sudah)
    }, {
        type: 'column',
        name: 'Belum',
        color: '#10d182',
        data: absensiData.map(d => d.belum)
    }]
};

export default function MobileAbsensiChart() {
    return (
        <div className="w-full mt-4">
            <h3 className="text-[13px] font-bold text-slate-800 mb-2 px-1">Rekap Absensi (02-2026)</h3>
            <div className="bg-white p-2 rounded-2xl border border-slate-100 shadow-sm w-full">
                <div className="-mx-2">
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
            </div>
        </div>
    );
}
