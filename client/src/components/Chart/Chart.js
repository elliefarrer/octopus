import React, { Component } from 'react';

import { Line } from 'react-chartjs-2';

export default class Chart extends Component {
    state = {
        data: {
            labels: [0, 1, 2, 3, 4, 5],
            datasets: [{
                data: [1, 5, 3, 4, 5, 1]
            }]
        }
    }

    render() {
        return (
            <div>
                <Line data={this.state.data} />
            </div>
        )
    }
    
}