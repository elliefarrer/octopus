import React from 'react';

import SubHeading from '../../partials/SubHeading/SubHeading';

const ProductDescription = ({ description }) => {
    return (
        <div>
            <SubHeading text='Description' />
            <p>{description}</p>
            <span><u>Show more</u></span>
        </div>
    )
}

export default ProductDescription;