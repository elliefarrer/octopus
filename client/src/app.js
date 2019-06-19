import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Styling
import 'bootstrap/dist/css/bootstrap.css';
import './scss/main.scss';

class App extends Component {
    render() {
        return (
            <div id="page">
                <h1>Hello</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'));