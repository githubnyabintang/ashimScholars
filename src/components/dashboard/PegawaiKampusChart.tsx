"use client";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { pegawaiKampusData } from './chartData';

const options: Highcharts.Options = {
    chart: {
        type: 'pie',
        height: 350
    },
    title: {
        text: 'Data Pegawai Per Kampus',
        style: { fontSize: '15px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }
    },
    tooltip: {
        pointFormat: '{point.name}: <b>{point.y} Pegawai</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            innerSize: '40%',
            borderRadius: 8,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.y} Pegawai',
                distance: 20,
                style: {
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'normal',
                    fontSize: '11px'
                }
            }
        }
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

export default function PegawaiKampusChart() {
    return (
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm w-full h-full">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}
