import React from 'react';

import SubHeading from '../../partials/SubHeading/SubHeading';

const ProductDescription = ({ description }) => {
    return (
        <section className="mb-5">
            <SubHeading text='Description' />
            <p className="mt-4">{description}</p>
            <span className="text-primary cta"><u>Show more</u></span>
        </section>
    )
}

export default ProductDescription;