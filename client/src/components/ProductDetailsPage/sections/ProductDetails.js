import React from 'react';

import { Button, Col, Row } from 'reactstrap';

import Heading from '../../partials/Heading/Heading';
import ProductImg from '../../partials/ProductImg/ProductImg';
import SubHeading from '../../partials/SubHeading/SubHeading';

const ProductDetails = ({ name, img, wattage, quantity, price, selectedQuantity }) => {
    return (
        <section>
            <Row>
                <Col xs={12} md={8} className="p-0">
                    <ProductImg name={name} img={img} />
                </Col>

                <Col xs={12} md={4} >
                    <Heading name={name} wattage={wattage} quantity={quantity} />

                    <div>
                        <Row>
                            <Col xs={5}>
                                <SubHeading text={`£${price}`} />
                            </Col>
                            <Col className="text-center" xs={7}>
                                <p className="mb-1">QTY</p>
                                <p><Button>-</Button> {selectedQuantity} <Button>+</Button></p>
                            </Col>
                        </Row>
                    </div>

                    <div className="d-flex my-5">
                        <Button className="w-50 w-md-100 mx-auto border-0 py-4">Add to cart</Button>
                    </div>
                </Col>
                </Row>

                

                
        </section>
        
    )
}

export default ProductDetails;