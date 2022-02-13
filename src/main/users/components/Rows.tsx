import React from 'react';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const align = 'left';

const TableBodyPage = () => (
    <TableBody>
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
    </TableBody>
);

export default TableBodyPage;