import React from 'react';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const align = 'left';

const TableBodyPage = ():JSX.Element => (
    <>
        <TableRow hover role="checkbox" tabIndex={-1}>
            <TableCell align={align}>
                hola
            </TableCell>
            <TableCell align={align}>
                hola
            </TableCell>
            <TableCell align={align}>
                hola
            </TableCell>
            <TableCell align={align}>
                hola
            </TableCell>
            <TableCell align={align}>
                hola
            </TableCell>
            <TableCell align={align}>
                hola
            </TableCell>
            <TableCell align={align}>
                hola
            </TableCell>
        </TableRow>
    </>
);

export default TableBodyPage;