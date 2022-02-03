import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { RootState } from '../redux/reducers/';
import RouterPrivate from './RouterPrivate';
import RouterPublic from './RouterPublic';

import FormChangePassword from '../main/formChangePassword/';

const RouterApp = ():JSX.Element => {

    const { user } = useSelector((state:RootState) => state);

    const [isAuth, setIsAuth] = useState(false);
    
    useEffect(() => setIsAuth( user.name?.length > 0 ), [user]);

    return (
        <Router>
            <Switch>
                <Route path="/reset-password/:token">
                    <FormChangePassword />
                </Route>

                { isAuth ? <RouterPrivate /> : <RouterPublic /> }
            </Switch>
        </Router>
    );
}

export default RouterApp;