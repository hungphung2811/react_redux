const { CHANGE_STATUS_LOGGED } = require("service/constants/actionTypeAuthConstant");

const initialState = {
    isLogged: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS_LOGGED:
            return {
                ...state,
                isLogged: action.payload
            }

        default:
            return state;
    }
}

export default authReducer
