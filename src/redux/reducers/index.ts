import { combineReducers } from 'redux';

import userSlice from './reducerUser';
import reducerSnack from './reducerSnack';
import reducerBlockUI from './reducerBlockUI';
import reducerAlertDialog from './reducerAlertDialog';
import openLayautAppSlice from './reducerOpenLayautApp';

const rootReducer = combineReducers({
    user: userSlice,
    snack: reducerSnack,
    blockUI: reducerBlockUI,
    alertDialog: reducerAlertDialog,
    isOpenNabvarLeft: openLayautAppSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;