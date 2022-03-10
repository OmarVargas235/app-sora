import React from 'react';

import TableCell from '@mui/material/TableCell';
import { TypesProps } from '../interface';

const align = 'left';

interface IPropsRows {
    row:TypesProps;
}

const TableBodyPage = ({ row }:IPropsRows):JSX.Element => (
    <>
        <TableCell align={align}>
            rol
        </TableCell>
    </>
);

export default TableBodyPage;