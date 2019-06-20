import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { getProduct } from '../../redux/actions/productAction';

// Reactstrap
import { Button, Col, Container, Row } from 'reactstrap';


// Custom Components
import ProductDescription from './sections/ProductDescription';
import ProductDetails from './sections/ProductDetails';
import ProductPerf from './sections/ProductPerf';
import ProductSpec from './sections/ProductSpec';
import SubHeading from '../partials/SubHeading/SubHeading';

class ProductDetailsPage extends Component {

    componentWillMount() {
        console.log('Triggered');
        
        this.props.getProduct();
    }

    render() {
        const product = this.props.product.product;
        console.log('Anything?', product);
        return(
            <section>
                {this.props.product.hasLoaded 
                    ?
                    
                    <Container>
                        <ProductDetails 
                            name={product[0].name}
                            img={product[0].img}
                            wattage={product[0].wattage}
                            quantity={product[0].quantity}
                            price={product[0].price}
                            selectedQuantity={this.props.product.quantity}
                        />

                        <ProductDescription description={product[0].description}/>

                        <ProductSpec 
                            labels={['Brand', 'Item weight', 'Dimensions', 'Item model number', 'Colour']}
                            fields={[product[0].brand, `${product[0].weight}g`, `${product[0].height}x${product[0].width}x${product[0].depth}x`, product[0].item_no, product[0].colour]}
                        />

                        <ProductPerf 
                            productName={product[0].name}
                            performanceData={[product[0].performance200, product[0].performance250, product[0].performance300, product[0].performance350, product[0].performance400]}
                            averageData={[product[0].average200, product[0].average250, product[0].average300, product[0].average350, product[0].average400]}
                        />
                    </Container>

                    :

                    <SubHeading text='Please Wait'/>
                }
            </section>
        )
    }
}

ProductDetailsPage.PropTypes = {
    fetchProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps, { getProduct })(ProductDetailsPage);