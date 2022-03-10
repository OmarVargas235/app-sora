import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { IColumn } from '../../main/users/utils';
import { IColumnRol } from '../../main/roles/utils';

interface IProps {
    columns: IColumn[]|IColumnRol[];
}

const TableHeadPage = ({ columns }:IProps):JSX.Element => (
    <TableHead>
        <TableRow>
            {columns.map(column => (
                <TableCell
                    key={column.id}
                    align="left"
                    style={{ minWidth: column.minWidth }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    </TableHead>
);

export default TableHeadPage;