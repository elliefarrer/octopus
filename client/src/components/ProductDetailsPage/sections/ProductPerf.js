import React from 'react';

import Chart from '../../partials/Chart/Chart';
import SubHeading from '../../partials/SubHeading/SubHeading';

const ProductPerf = ({ productName, performanceData, averageData }) => {
    return (
        <section>
            <SubHeading text='Performance' />
            <Chart
                productName={productName}
                performanceData={performanceData}
                averageData={averageData}
            />
        </section>
    )
}

export default ProductPerf;