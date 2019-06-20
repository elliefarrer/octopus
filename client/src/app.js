import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Styling
import 'bootstrap/dist/css/bootstrap.css';
import './scss/main.scss';

// Components
import Header from './components/Layout/Header';
import ProductDetailsPage from './components/ProductDetailsPage/ProductDetailsPage';
import Footer from './components/Layout/Footer';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div id="page">
                    <Header />
                    <ProductDetailsPage />
                    <Footer />
                </div>
            </Provider>
            
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root'));

