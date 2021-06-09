import AuthApi from 'api/authApi';
import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router'
import { checkAdminLocal, checkUserLocal } from 'service/utilities/Auth'
import { getFromLocalStorage } from 'service/utilities/localStorage';

function PrivateRoute({ children }) {
    console.log(checkAdminLocal());
    const { user, token } = getFromLocalStorage('user');
    const [state, setState] = useState(false);
    useEffect(() => {
        ; (async () => {
            try {
                const dataUser = await AuthApi.checkAdmin(user._id, token)
                if (dataUser) {
                    console.log({dataUser});
                    setState(true)
                }
            } catch (error) {
                console.log(error);
                setState(false);
            }
        })();
    }, [])
    return (
        <Route render={() => {
            return (checkAdminLocal() && state) ? children : <Redirect to='/home' />
        }} />
    )
}

export default PrivateRoute
