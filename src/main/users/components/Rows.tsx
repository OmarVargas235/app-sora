import React from 'react';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TypesProps } from '../interface';

const align = 'left';

interface IPropsRows {
    row:TypesProps;
}

const TableBodyPage = ({ row }:IPropsRows):JSX.Element => (
    <>
        <TableCell align={align}>
            {row.userName}
        </TableCell>

        <TableCell align={align}>
            {row.name}
        </TableCell>

        <TableCell align={align}>
            {row.email}
        </TableCell>

        <TableCell align={align}>
            {row.area?.name || ""}
        </TableCell>

        <TableCell align={align}>
            {row.rol}
        </TableCell>

        <TableCell align={align}>
            {row.active ? 'Activo' : 'Desactivado'}
        </TableCell>
    </>
);

export default TableBodyPage;