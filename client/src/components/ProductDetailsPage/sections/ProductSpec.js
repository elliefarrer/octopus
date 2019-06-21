import React from 'react';

import SubHeading from '../../partials/SubHeading/SubHeading';
import SpecTable from '../../partials/SpecTable/SpecTable';

const ProductSpec = ({ labels, fields }) => {
    return (
        <section className="mb-5">
            <SubHeading text='Specifications' />

            <SpecTable
                labels={labels}
                fields={fields}
            />

            <span className="text-primary cta"><u>Show less</u></span>
        </section>
    )
}

export default ProductSpec;