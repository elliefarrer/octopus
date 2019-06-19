import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Styling
import 'bootstrap/dist/css/bootstrap.css';
import './scss/main.scss';

// Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

class App extends Component {
    render() {
        return (
            <div id="page">
                <Header />
                <h1>Hello</h1>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'));