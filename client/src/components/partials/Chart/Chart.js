import React, { Component } from 'react';

import { Line } from 'react-chartjs-2';

const Chart = ({ productName, performanceData, averageData }) => {

    const data = {
        labels: [200, 250, 300, 350, 400],
        datasets: [
            {
                label: productName,
                fill: false,
                data: performanceData
            },
            {
                label: 'Average',
                fill: false,
                data: averageData
            }
        ]
    }

    return (
        <div>
            <Line data={data}/>
        </div>
    )
}

export default Chart;