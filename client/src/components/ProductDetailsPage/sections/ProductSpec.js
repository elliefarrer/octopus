import React from 'react';

import SubHeading from '../../partials/SubHeading/SubHeading';
import SpecTable from '../../partials/SpecTable/SpecTable';

const ProductSpec = ({ labels, fields }) => {
    return (
        <section>
            <SubHeading text='Specifications' />

            <SpecTable
                labels={labels}
                fields={fields}
            />

            <span><u>Show less</u></span>
        </section>
    )
}

export default ProductSpec;