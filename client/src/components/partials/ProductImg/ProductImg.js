import React from 'react';

const ProductImg = ({ name, img }) => {
    return (
        <div>
            <img src={img} alt={name} title={name} className="img-fluid w-100" />
        </div>
    )
}

export default ProductImg;