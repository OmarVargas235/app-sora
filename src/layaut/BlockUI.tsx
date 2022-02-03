import React from 'react';

import Spinner from './Spinner';
import { StyleBlockUI } from './style';

const BlockUI = ():JSX.Element => {

    return (
        <StyleBlockUI className='flex items-center justify-center'>
            <Spinner />
        </StyleBlockUI>
    );
}

export default BlockUI;