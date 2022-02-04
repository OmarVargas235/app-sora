import React from 'react';
import { useSelector } from 'react-redux';

import Spinner from './Spinner';
import { StyleBlockUI } from './style';
import { RootState } from '../redux/reducers';

const BlockUI = ():JSX.Element => {

    const { blockUI } = useSelector((state:RootState) => state);
    const { isActive } = blockUI;

    return (
        <>
            {
                isActive ? <StyleBlockUI className='flex items-center justify-center'>
                    <Spinner />
                </StyleBlockUI> : null
            }
        </>
    );
}

export default BlockUI;