import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { useContext } from 'react';

import RouterPrivate from './RouterPrivate';
import RouterPublic from './RouterPublic';
import { AuthContext } from '../auth/AuthProvider';

import FormChangePassword from '../main/formChangePassword/';
import LayautApp from '../layaut/layautApp/LayautApp';

const RouterApp = ():JSX.Element => {

    const { isAuth }:any = useContext( AuthContext );

    return (
        <Router>
            <Switch>
                <Route path="/reset-password/:token">
                    <FormChangePassword />
                </Route>

                { isAuth ? <LayautApp> <RouterPrivate /> </LayautApp> : <RouterPublic /> }
            </Switch>
        </Router>
    );
}

export default RouterApp;