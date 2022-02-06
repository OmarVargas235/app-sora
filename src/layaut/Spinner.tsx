import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';

function FacebookCircularProgress(props: CircularProgressProps):JSX.Element {
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

const Spinner = ():JSX.Element => (
    <FacebookCircularProgress />
);

export default Spinner;