import React, { Component } from 'react';
import axios from 'axios';

// Reactstrap
import { Button, Col, Container, Row, Table } from 'reactstrap';


// Custom Components
import Chart from '../Chart/Chart';

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
                        <Row>
                            <Col xs={12} md={8}>
                                <img src={product.img} alt={product.name} title={product.name} className="img-fluid w-100" />
                            </Col>

                            <Col xs={12} md={4} >
                                <div>
                                    <h1>{product.name}</h1>
                                    <h5>{product.wattage}W // Packet of {product.quantity}</h5>
                                </div>
                                
                                <div>
                                    <Row>
                                        <Col>
                                            <h3>{product.price}</h3>
                                        </Col>
                                        <Col>
                                            <p>QTY</p>
                                            <p><span>-</span> {this.state.quantity} <span>+</span></p>
                                        </Col>
                                    </Row>
                                </div>

                                <div>
                                    <Button className="w-75 mx-auto">Add to cart</Button>
                                </div>
                            </Col>
                        </Row>

                        <div>
                            <h3>Description</h3>
                            <p>{product.description}</p>
                            <span><u>Show more</u></span>
                        </div>

                        <div>
                            <h3>Specifications</h3>

                            <Table>
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td>{product.brand}</td>
                                    </tr>
                                    <tr>
                                        <td>Item weight</td>
                                        <td>{product.weight}g</td>
                                    </tr>
                                    <tr>
                                        <td>Dimensions</td>
                                        <td>{product.height}x{product.width}x{product.depth}cm</td>
                                    </tr>
                                    <tr>
                                        <td>Item model number</td>
                                        <td>{product.item_no}</td>
                                    </tr>
                                    <tr>
                                        <td>Colour</td>
                                        <td>{product.colour}</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <span><u>Show less</u></span>
                        </div>

                        <div>
                            <h3>Performance</h3>
                            <Chart />
                        </div>
                    </Container>

                    :

                    <h3>Please wait...</h3>
                }
            </section>
        )
    }
}