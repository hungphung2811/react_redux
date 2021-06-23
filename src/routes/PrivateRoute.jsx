import React from 'react';
import { Redirect, Route } from 'react-router';
import { checkAdminLocal } from 'service/utilities/Auth';
import { getFromLocalStorage } from 'service/utilities/localStorage';

function PrivateRoute({ children }) {
    const user = getFromLocalStorage('user')?.user;
    const token = getFromLocalStorage('user')?.token;
    return (
        <Route render={() => {
            return !checkAdminLocal(user, token) ? <Redirect to='/auth/login' /> : children
        }} />
    )
}

export default PrivateRoute
