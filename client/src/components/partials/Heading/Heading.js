import React from 'react';

const Heading = ({ name, wattage, quantity }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h5>{wattage}W // Packet of {quantity}</h5>
        </div>
    )
}

export default Heading;