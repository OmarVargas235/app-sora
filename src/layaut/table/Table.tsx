import React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Icon from '@mui/material/Icon';
// import TablePagination from '@mui/material/TablePagination';

import TableHeadPage from './TableHeadPage';
import { IColumn } from '../../main/users/utils';
import { TypesProps } from '../../main/users/interface';
import { gray } from '../../assets/css/colors';

interface IProps {
  columns:IColumn[];
  Rows:React.ComponentType<any>;
  data:TypesProps[];
}

function StickyHeadTable({ columns, Rows, data }:IProps):JSX.Element {
  
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeadPage
            columns={columns}
          />

          <TableBody>
            {
              data.map(row => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>

                  <Rows
                    row={row}
                  />

                  <TableCell align="left">
                    <Icon className="cursor-pointer" style={{color: gray}}>edit_icon</Icon>
                    <Icon className="cursor-pointer ml-3" style={{color: gray}}>delete_icon</Icon>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>

      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}

export default StickyHeadTable;