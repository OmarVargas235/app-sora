import React, { MutableRefObject } from 'react';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

interface IProps {
    widthContainerTable:number|null;
}

function SkeletonLoading({ widthContainerTable }:IProps):JSX.Element {
    
    return (
        <Box sx={{ width: (widthContainerTable ? (widthContainerTable - 23) : widthContainerTable), margin: 1 }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
        </Box>
    )
}

export default SkeletonLoading;