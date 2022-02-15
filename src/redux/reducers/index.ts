import { combineReducers } from 'redux';

import userSlice from './reducerUser';
import reducerSnack from './reducerSnack';
import reducerBlockUI from './reducerBlockUI';

const rootReducer = combineReducers({
    user: userSlice,
    snack: reducerSnack,
    blockUI: reducerBlockUI,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;