import React, { useRef, useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Icon from '@mui/material/Icon';

import TableHeadPage from './TableHeadPage';
import { IColumn } from '../../main/users/utils';
import { IColumnRol } from '../../main/roles/utils';
import { TypesProps } from '../../main/users/interface';
import { gray } from '../../assets/css/colors';
import SkeletonLoading from '../SkeletonLoading';
import { useResize } from '../../customHooks/useResize';
import AlertPage from '../AlertPage';
import { RootState } from '../../redux/reducers/';

interface IProps {
    columns:IColumn[]|IColumnRol[];
    Rows:React.ComponentType<any>;
    data:TypesProps[];
    handleEdit:(data:object)=>void;
    handleDelete:(data:string)=>void;
    loadingDataTable:boolean;
    getDataTable:(limit:number, textFilter:string)=>void;
    textFilter:string;
    align?:"left" | "center" | "right" | "justify" | "inherit" | undefined;
    updateDataTable:boolean;
}

function StickyHeadTable({ columns, Rows, data, handleEdit, handleDelete, loadingDataTable, getDataTable, textFilter, align="left", updateDataTable }:IProps):JSX.Element {

    const { isOpen } = useSelector((state:RootState) => state.isOpenNabvarLeft);

    const refPaper = useRef<HTMLDivElement|null>(null);
    const observer = useRef<any>(null);
    
    const [widthContainerTable, setWidthContainerTable] = useState<number|null>(null);
    const [limit, setLimit] = useState<number>(10);
    const [updateComponent, setUpdateComponent] = useState<boolean>(false);

    const [size] = useResize();

    useEffect(() => setLimit(10), [textFilter]);
    
    useEffect(() => {

        if (!refPaper.current) return;

        const { clientWidth, firstChild }:{ clientWidth:number; firstChild:any } = refPaper.current;

        firstChild.scrollLeft = 0;

        typeof clientWidth === 'number' && setWidthContainerTable(clientWidth);

        const timeout = window.setTimeout(() => setUpdateComponent(isOpen), 190);

        return () => window.clearTimeout(timeout);

    }, [refPaper, size, isOpen, updateComponent]);
    
    useLayoutEffect(() => getDataTable(limit, textFilter), [limit, textFilter, updateDataTable]);

    const lastDataTableElementRef = useCallback(node => {

        if (loadingDataTable) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            
            entries[0].isIntersecting && setLimit(prevLimit => prevLimit + 10);
        });

        node && observer.current.observe(node);

    }, [loadingDataTable]);

    return (
        <>
            {
                (!loadingDataTable && data.length === 0)
                ? <AlertPage
                    text="No hay data"
                    severity="info"
                />
                : <Paper sx={{ width: '100%', overflow: 'hidden' }} ref={refPaper || null}>
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

                                            <TableCell align={align}>
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

                                            <TableCell align={align}>
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
            }
        </>
    );
}

export default StickyHeadTable;