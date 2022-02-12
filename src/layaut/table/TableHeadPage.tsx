import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
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

const TableHeadPage = () => (
    <TableHead>
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    </TableHead>
);

export default TableHeadPage;