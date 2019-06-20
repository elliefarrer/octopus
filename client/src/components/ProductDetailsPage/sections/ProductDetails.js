import React from 'react';

import { Button, Col, Row } from 'reactstrap';

import Heading from '../../partials/Heading/Heading';
import ProductImg from '../../partials/ProductImg/ProductImg';
import SubHeading from '../../partials/SubHeading/SubHeading';

const ProductDetails = ({ name, img, wattage, quantity, price, selectedQuantity }) => {
    return (
        <section>
            <Row>
                <Col xs={12} md={8}>
                    <ProductImg name={name} img={img} />
                </Col>

                <Col xs={12} md={4} >
                    <Heading name={name} wattage={wattage} quantity={quantity} />
                </Col>
                </Row>

                <div>
                    <Row>
                        <Col>
                            <SubHeading text={price} />
                        </Col>
                        <Col>
                            <p>QTY</p>
                            <p><Button>-</Button> {selectedQuantity} <Button>+</Button></p>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Button className="w-75 mx-auto">Add to cart</Button>
                </div>
        </section>
        
    )
}

export default ProductDetails;