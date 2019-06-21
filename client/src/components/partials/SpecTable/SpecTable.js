import React from 'react';

import { Table } from 'reactstrap';

// import SpecTableRow from './SpecTableRow';

const SpecTable = ({ labels, fields }) => {
    return(
        <Table className="mt-4">
            <tbody>
                <tr>
                    <td className="text-white">{labels[0]}</td>
                    <td className="text-white">{fields[0]}</td>
                </tr>
                <tr>
                    <td className="text-white">{labels[1]}</td>
                    <td className="text-white">{fields[1]}</td>
                </tr>
                <tr>
                    <td className="text-white">{labels[2]}</td>
                    <td className="text-white">{fields[2]}</td>
                </tr>
                <tr>
                    <td className="text-white">{labels[3]}</td>
                    <td className="text-white">{fields[3]}</td>
                </tr>
                <tr>
                    <td className="text-white">{labels[4]}</td>
                    <td className="text-white">{fields[4]}</td>
                </tr> 
            </tbody>
        </Table>
    )
}

export default SpecTable;