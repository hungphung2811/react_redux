import AuthApi from 'api/authApi';
import React, { useState } from 'react';
import { Redirect, Route } from 'react-router';
import { checkAdminLocal, checkUserLocal } from 'service/utilities/Auth';
import { getFromLocalStorage } from 'service/utilities/localStorage';

function PrivateRoute({ children }) {
    console.log(checkAdminLocal());
    const user = getFromLocalStorage('user')?.user;
    const token = getFromLocalStorage('user')?.token;

    const [state, setState] = useState(true);
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
    return (
        <Route render={() => {
            return (checkAdminLocal() && state) ? children : checkUserLocal() ? <Redirect to='/home' /> : <Redirect to='/auth/login' />
        }} />
    )
}

export default PrivateRoute
