import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';

import { ScreenLoadingStyle } from './style';

function FacebookCircularProgress(props: CircularProgressProps) {
    return (
        <Box sx={{ position: 'relative' }} className="box">
            <CircularProgress
                variant="determinate"
                sx={{
                color: (theme) =>
                    "rgba(136, 192, 51, 0.7)",
                }}
                size={40}
                thickness={4}
                {...props}
                value={100}
            />

            <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                    color: (theme) => '#88C033',
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                size={40}
                thickness={4}
                {...props}
            />
        </Box>
    );
}

const ScreenLoading = ():JSX.Element => (
    <ScreenLoadingStyle className='flex items-center'>
        <Box sx={{ flexGrow: 1 }}>
            <FacebookCircularProgress />
        </Box>
    </ScreenLoadingStyle>
);

export default ScreenLoading;