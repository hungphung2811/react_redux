import AuthApi from "api/authApi";
import { getFromLocalStorage } from "./localStorage";

const { user, token } = getFromLocalStorage('user');

export const checkAdminLocal = (userLocal = user, tokenLocal = token) => {
    let status = true;
    if (!userLocal || !tokenLocal || userLocal?.role === 0) {
        status = false;
    }

    return status;
}

export const checkUserLocal = (userLocal = user) => {
    if (!userLocal) {
        return false;
    }
    return true;
}