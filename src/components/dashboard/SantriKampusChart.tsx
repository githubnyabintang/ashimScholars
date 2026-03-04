"use client";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options: Highcharts.Options = {
    chart: {
        type: 'pie',
        height: 350
    },
    title: {
        text: 'Data Santri Per Kampus',
        style: { fontSize: '15px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }
    },
    tooltip: {
        pointFormat: '{point.name}: <b>{point.y} Santri</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            innerSize: '40%',
            borderRadius: 8,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.y} Santri',
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
        name: 'Santri',
        colors: ['#22c55e', '#0ea5e9', '#6366f1', '#f97316'],
        data: [{
            name: 'Kampus Telkom',
            y: 9
        }, {
            name: 'Kampus IV Mawang',
            y: 52
        }, {
            name: 'Kampus II Antang',
            y: 341
        }, {
            name: 'Kampus I Tidung',
            y: 130
        }]
    }]
};

export default function SantriKampusChart() {
    return (
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm w-full h-full">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}
