import React from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
    }

const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
    },
    {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
    },
    {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
    },
  ];

  interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
    }
    
    function createData(
    name: string,
    code: string,
    population: number,
    size: number,
    ): Data {
    const density = population / size;
    return { name, code, population, size, density };
    }
    
    const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    ];

interface IProps {
    page:any;
    rowsPerPage:any;
}

const TableBodyPage = ({ page, rowsPerPage }:IProps) => (
    <TableBody>
        {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
        return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
        {columns.map((column) => {
        const value = row[column.id];
        return (
        <TableCell key={column.id} align={column.align}>
        {column.format && typeof value === 'number'
        ? column.format(value)
        : value}
        </TableCell>
        );
        })}
        </TableRow>
        );
        })}
    </TableBody>
);

export default TableBodyPage;