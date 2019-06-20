import React from 'react';

const SpecTableRow = ({ label, field }) => {
    return (
        <tr>
            <td>{label}</td>
            <td>{field}</td>
        </tr>
    )
}

export default SpecTableRow;