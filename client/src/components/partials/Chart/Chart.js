import React, { Component } from 'react';

import { Line } from 'react-chartjs-2';

const Chart = ({ productName, performanceData, averageData }) => {

    const data = {
        labels: [200, 250, 300, 350, 400],
        datasets: [
            {
                label: productName,
                fill: false,
                borderColor: 'rgb(252, 21, 118)',
                data: performanceData
            },
            {
                label: 'Average',
                fill: false,
                borderColor: 'rgb(255, 255, 255)',
                data: averageData
            }
        ]
    }

    const options = {
        yAxes : [
            {
                scaleLabel: {
                    fontSize: 16,
                    color: 'white'
                }
            }
        ]
    }

    return (
        <div className="mt-4">
            <Line data={data} options={options}/>
        </div>
    )
}

export default Chart;