import { combineReducers } from 'redux';

import userSlice from './reducerUser';
import reducerSnack from './reducerSnack';

const rootReducer = combineReducers({
    user: userSlice,
    snack: reducerSnack,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;