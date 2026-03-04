"use client";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const data = [
    { name: "MTs. Tahfizhul Qur'an Al-Imam Ashim Makassar", y: 165 },
    { name: "Madrasah Aliyah Tahfizhul Qur'an Al-Imam Ashim Makassar", y: 128 },
    { name: "Tahfizh Murni", y: 130 },
    { name: "MTs. Putri Al-Imam Ashim Gowa", y: 34 },
    { name: "Halaqah Mahir Bil-Qur'an Putri", y: 2 },
    { name: "Halaqah Mahir Bil-Qur'an Putra", y: 9 },
    { name: "I'dad MTs Putri", y: 16 },
    { name: "I'dad MTs Putra", y: 41 },
    { name: "Takhassus", y: 6 }
];

const options: Highcharts.Options = {
    chart: {
        type: 'column',
        height: 350
    },
    title: {
        text: 'Data Santri Per Program',
        style: { fontSize: '15px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }
    },
    xAxis: {
        type: 'category',
        labels: {
            autoRotation: [-45, -90],
            style: {
                fontSize: '10px',
                fontFamily: 'Inter, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Jumlah Santri'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: '<b>{point.y}</b> Santri'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        column: {
            borderRadius: 4
        }
    },
    series: [{
        type: 'column',
        name: 'Santri',
        colorByPoint: true,
        colors: [
            '#65E542', // green
            '#84b06b', // dark green
            '#2d6b5e', // darker green
            '#1c1a59', // navy
            '#3fa5a8', // light blue
            '#1dcfc2', // cyan
            '#989cd1', // purple/periwinkle
            '#25b8a5', // teal/aqua
            '#e8a838'  // gold/orange
        ],
        data: data.map(item => [item.name, item.y]),
        dataLabels: {
            enabled: true,
            rotation: 0,
            color: '#000',
            inside: false,
            verticalAlign: 'bottom',
            format: '{point.y:.0f}',
            y: -5,
            style: {
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif'
            }
        }
    }]
};

export default function SantriProgramChart() {
    return (
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm w-full">
            <HighchartsReact highcharts={Highcharts} options={options} />

            <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-600 border border-slate-100">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-100">
                        <tr>
                            <th scope="col" className="px-5 py-3 font-semibold text-center">Nama Program</th>
                            <th scope="col" className="px-5 py-3 font-semibold text-center w-32">Jumlah</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="bg-white border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                <td className="px-5 py-3 font-medium text-slate-800">{item.name}</td>
                                <td className="px-5 py-3 text-right">{item.y} Santri</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
