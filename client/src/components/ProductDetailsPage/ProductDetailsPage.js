import React, { Component } from 'react';
import axios from 'axios';

// Reactstrap
import { Button, Col, Container, Row } from 'reactstrap';


// Custom Components
import ProductDescription from './sections/ProductDescription';
import ProductDetails from './sections/ProductDetails';
import ProductPerf from './sections/ProductPerf';
import ProductSpec from './sections/ProductSpec';
import SubHeading from '../partials/SubHeading/SubHeading';

export default class ProductDetailsPage extends Component {
    state = {
        hasLoaded: false,
        quantity: 1
    }

    componentDidMount() {
        axios.get('/api/lightbulb')
            .then(res => {
                console.log('Res data is', res.data[0]);
                this.setState({ product: res.data[0], hasLoaded: true })
            });
    }

    render() {
        const product = this.state.product;
        return(
            <section>
                {this.state.hasLoaded 
                    ?
                    
                    <Container>
                        <ProductDetails 
                            name={product.name}
                            img={product.img}
                            wattage={product.wattage}
                            quantity={product.quantity}
                            price={product.price}
                            selectedQuantity={this.state.quantity}
                        />

                        <ProductDescription description={product.description}/>

                        <ProductSpec 
                            labels={['Brand', 'Item weight', 'Dimensions', 'Item model number', 'Colour']}
                            fields={[product.brand, `${product.weight}g`, `${product.height}x${product.width}x${product.depth}x`, product.item_no, product.colour]}
                        />

                        <ProductPerf 
                            productName={product.name}
                            performanceData={[product.performance200, product.performance250, product.performance300, product.performance350, product.performance400]}
                            averageData={[product.average200, product.average250, product.average300, product.average350, product.average400]}
                        />
                    </Container>

                    :

                    <SubHeading text='Please Wait'/>
                }
            </section>
        )
    }
}