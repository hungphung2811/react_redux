import { getFromLocalStorage } from "./localStorage";

const user = getFromLocalStorage('user')?.user;
const token = getFromLocalStorage('user')?.token;

export const checkAdminLocal = (userLocal = user, tokenLocal = token) => {
    if (userLocal && tokenLocal) {
        if (userLocal.role === 1) {
            return true;
        }
    }
    return false;
}

export const checkUserLocal = (userLocal = user) => {
    if (!userLocal) {
        return false;
    }
    return true;
}