import AuthApi from 'api/authApi';
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { checkAdminLocal, checkUserLocal } from 'service/utilities/Auth';
import { getFromLocalStorage } from 'service/utilities/localStorage';

function PrivateRoute({ children }) {
    console.log(checkAdminLocal());
    const user = getFromLocalStorage('user')?.user;
    const token = getFromLocalStorage('user')?.token;

    const [state, setState] = useState(false);
    useEffect(() => {
        ; (async () => {
            try {
                const dataUser = await AuthApi.checkAdmin(user._id, token)
                if (dataUser) {
                    console.log({ dataUser });
                    setState(true)
                }
            } catch (error) {
                console.log(error);
                setState(false);
            }
        })();
    }, [token, user._id])
    return (
        <Route render={() => {
            return (state && user?.role === 1) ? children : checkUserLocal() ? <Redirect to='/home' /> : <Redirect to='/auth/login' />
        }} />
    )
}

export default PrivateRoute
