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
            {row.userName}
        </TableCell>

        <TableCell align={align}>
            {row.name}
        </TableCell>

        <TableCell align={align}>
            {row.email}
        </TableCell>

        <TableCell align={align}>
            {row.area?.description || ""}
        </TableCell>
    
        <TableCell align={align}>
            {
                row.rol
                ? row.rol.name
                : null
            }
        </TableCell>

        <TableCell align={align}>
            {row.active ? 'Activo' : 'Inactivo'}
        </TableCell>
    </>
);

export default TableBodyPage;