import { getFromLocalStorage } from "./localStorage";

const user = getFromLocalStorage('user')?.user;
const token = getFromLocalStorage('user')?.token;

export const checkAdminLocal = (userLocal = user, tokenLocal = token) => {
    if (!userLocal || !tokenLocal || userLocal.role === 0) {
        return false;
    }

    return true;
}

export const checkUserLocal = (userLocal = user) => {
    if (!userLocal) {
        return false;
    }
    return true;
}