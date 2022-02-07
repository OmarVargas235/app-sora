import { ScreenLoadingStyle } from './style';
import Spinner from './Spinner';

const ScreenLoading = ():JSX.Element => (
    <ScreenLoadingStyle className='flex items-center'>
        <Spinner />
    </ScreenLoadingStyle>
);

export default ScreenLoading;