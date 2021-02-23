import React from 'react';

import { Line } from 'react-chartjs-2';

import './chart.scss';

const Chart = ({ data, time }) => {
    const generateDataPoints = () => {
        let datas = { key: [], value: [] };

        data && data.prices.map(d => {
            datas.key = [...datas.key, formatDate(new Date(d[0]))]
            datas.value = [...datas.value, d[1].toFixed(d[1] < 10000 ? 4 : 0)]
        })

        return datas;
    }

    const formatDate = date => {
        let hours = undefined;
        let minutes = undefined;
        let res = ''

        switch (time) {
            case '1':
                hours = date.getHours();
                minutes = date.getMinutes();

                if (hours < 10) hours = "0" + hours;
                if (minutes < 10) minutes = "0" + minutes;

                res = "" + hours + ":" + minutes;
                break;

            case '7':
            case '30':
                const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

                res = `${date.getDate()}. ${days[date.getDay()]}`;
                break;

            case '365':
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                res = months[date.getMonth()];
                break;

            case 'max':
                res = date.getFullYear()
                break;

            default:
                break;
        }

        return res;
    }

    const chartOptions = {
        legend: {
            display: false
        },

        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: "white",
                        fontStyle: "bold"
                    }
                }
            ],
            xAxes: [
                {
                    ticks: {
                        maxTicksLimit: (() => {
                            if (time === '1' || time === '7' || '365') return 7;
                            else if (time === '30') return 16
                        })(),
                        fontColor: "white",
                        fontStyle: "bold",
                        maxRotation: 0,
                        minRotation: 0
                    }
                }
            ]
        },
    }

    const chartData = {
        labels: generateDataPoints().key,
        datasets: [
            {
                borderColor: '#8dc647',
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