import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import TableHeadPage from './TableHeadPage';
import TableBodyPage from './TableBodyPage';

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

function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

return (
  <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHeadPage />

        <TableBodyPage
          page={page}
          rowsPerPage={rowsPerPage}
        />
      </Table>
    </TableContainer>

    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
  );
}

export default StickyHeadTable;