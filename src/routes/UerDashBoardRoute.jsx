import AuthApi from 'api/authApi';
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { checkUserLocal } from 'service/utilities/Auth';
import { getFromLocalStorage } from 'service/utilities/localStorage';

function PrivateRoute({ children }) {
    const tokenLocal = getFromLocalStorage('user')?.token;
    const [state, setState] = useState(false);
    useEffect(() => {
        ; (async () => {
            try {
                const dataUser = await AuthApi.checkLogin(tokenLocal)
                if (dataUser) {
                    console.log({ dataUser });
                    setState(true)
                }
            } catch (error) {
                console.log(error);
                setState(false);
            }
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Route render={() => {
            return (checkUserLocal() && state) ? children : <Redirect to='/auth/login' />
        }} />
    )
}

export default PrivateRoute
