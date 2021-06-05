import { CHANGE_STATUS_LOGGED } from "service/constants/actionTypeAuthConstant"

export const changeStatusLogin = (isLoggedIn) => {
    return {
        type: CHANGE_STATUS_LOGGED,
        payload: isLoggedIn
    }
}