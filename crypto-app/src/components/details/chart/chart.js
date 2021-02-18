import React from 'react';

import { Line } from 'react-chartjs-2';

import './chart.scss';

const Chart = ({ data }) => {
    const generateDataPoints = () => {
        let datas = { key: [], value: [] };

        data.prices.map(d => {
            datas.key = [...datas.key, formatDate(new Date(d[0]))]
            datas.value = [...datas.value, d[1].toFixed(d[1] < 10000 ? 4 : 0)]
        })

        return datas;
    }

    const formatDate = date => {
        let hours = date.getHours();
        let minutes = date.getMinutes();

        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;

        return "" + hours + ":" + minutes;
    }

    const chartOptions = {
        legend: {
            display: false
        }
    }

    const chartData = {
        labels: generateDataPoints().key,
        datasets: [
            {
                borderColor: '#233DBD',
                pointBorderColor: '#F4768B',
                pointBackgroundColor: '#F4768B',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: generateDataPoints().value,
            }
        ]
    };

    return (
        <div className='cmp-details-chart'>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
}

export default Chart;