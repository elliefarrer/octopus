import React from 'react';

import { Table } from 'reactstrap';

// import SpecTableRow from './SpecTableRow';

const SpecTable = ({ labels, fields }) => {
    return(
        <Table>
            <tbody>
                <tr>
                    <td>{labels[0]}</td>
                    <td>{fields[0]}</td>
                </tr>
                <tr>
                    <td>{labels[1]}</td>
                    <td>{fields[1]}</td>
                </tr>
                <tr>
                    <td>{labels[2]}</td>
                    <td>{fields[2]}</td>
                </tr>
                <tr>
                    <td>{labels[3]}</td>
                    <td>{fields[3]}</td>
                </tr>
                <tr>
                    <td>{labels[4]}</td>
                    <td>{fields[4]}</td>
                </tr> 
            </tbody>
        </Table>
    )
}

export default SpecTable;