import React, { useRef, useEffect, useState, useCallback, useLayoutEffect } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Icon from '@mui/material/Icon';

import TableHeadPage from './TableHeadPage';
import { IColumn } from '../../main/users/utils';
import { TypesProps } from '../../main/users/interface';
import { gray } from '../../assets/css/colors';
import SkeletonLoading from '../SkeletonLoading';
import { useResize } from '../../customHooks/useResize';

interface IProps {
    columns:IColumn[];
    Rows:React.ComponentType<any>;
    data:TypesProps[];
    handleEdit:(data:object)=>void;
    handleDelete:(data:string)=>void;
    loadingDataTable:boolean;
    getUsers:(limit:number)=>void;
}

function StickyHeadTable({ columns, Rows, data, handleEdit, handleDelete, loadingDataTable, getUsers }:IProps):JSX.Element {

    const refPaper = useRef<HTMLDivElement>(null);
    const observer = useRef<any>(null);
    
    const [widthContainerTable, setWidthContainerTable] = useState<number|null>(null);
    const [limit, setLimit] = useState<number>(10);

    const [size] = useResize();

    useEffect(() => {

        if (!refPaper.current) return;

        const { clientWidth } = refPaper.current;

        typeof clientWidth === 'number' && setWidthContainerTable(clientWidth);

    }, [refPaper, size]);
    
    useLayoutEffect(() => getUsers(limit), [limit]);

    const lastDataTableElementRef = useCallback(node => {

        if (loadingDataTable) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {

            entries[0].isIntersecting && setLimit(prevLimit => prevLimit + 10);
        });

        node && observer.current.observe(node);

    }, [loadingDataTable]);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }} ref={refPaper || null}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHeadPage
                        columns={columns}
                    />

                    <TableBody className="relative" style={{height: '92px'}}>
                        {
                            loadingDataTable ? <tr className='fixed'>
                                <td><SkeletonLoading widthContainerTable={widthContainerTable} /></td>
                            </tr>
                            : data.map((row, index) => (<React.Fragment key={row._id}>{
                                data.length === index + 1
                                ? <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    ref={lastDataTableElementRef}
                                >
                                    <Rows row={row} />

                                    <TableCell align="left">
                                        <Icon
                                            className="cursor-pointer"
                                            style={{color: gray}}
                                            onClick={() => handleEdit(row)}
                                        >edit_icon</Icon>

                                        <Icon
                                            className="cursor-pointer ml-3"
                                            style={{color: gray}}
                                            onClick={() => handleDelete(row._id)}
                                        >delete_icon</Icon>
                                    </TableCell>
                                </TableRow>
                                : <TableRow hover role="checkbox" tabIndex={-1}>
                                    <Rows row={row} />

                                    <TableCell align="left">
                                        <Icon
                                            className="cursor-pointer"
                                            style={{color: gray}}
                                            onClick={() => handleEdit(row)}
                                        >edit_icon</Icon>

                                        <Icon
                                            className="cursor-pointer ml-3"
                                            style={{color: gray}}
                                            onClick={() => handleDelete(row._id)}
                                        >delete_icon</Icon>
                                    </TableCell>
                                </TableRow>
                            }</React.Fragment>))
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default StickyHeadTable;