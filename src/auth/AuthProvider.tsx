import React, { createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import history from 'history/browser';

import { auth } from '../services/auth';
import { IProps, ISubmitLogin } from './interfaces';
import { showMessage } from '../redux/reducers/reducerSnack';
import { setDataUser } from '../redux/reducers/reducerUser';

interface AuthContextInterface {
    submitLogin: ({email, password}:ISubmitLogin)=> ()=> void;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

const paths:string[] = ['/login', '/resetpassword'];

function AuthProvider({ children }:IProps):JSX.Element {

    const dispatch = useDispatch();

    useEffect(():void => {

        const { pathname } = history.location;

        !paths.includes( pathname ) && jwtCheck();

    }, []);

    const jwtCheck = ():void => {

        auth
            .signInWithToken()
                .then(dataUser =>  dispatch( setDataUser(dataUser) ))
                .catch(err => {

                    dispatch( showMessage({
                        time: 3000,
                        message: Array.isArray(err) ? err : [err],
                        severity: "error",
                    }) );
                });
    }

    const submitLogin = ({email, password}:ISubmitLogin) => async () => {
        
        return auth
            .signIn(email, password)
            .then(data => jwtCheck())
            .catch(err => {

                const isArray = Array.isArray(err);
                
                dispatch( showMessage({
                    time: 3000,
                    message: isArray ? err : [err],
                    severity: "error",
                }) );
            });
    }
    
    return (
        <AuthContext.Provider value={{
            submitLogin,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
