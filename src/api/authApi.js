const { default: axiosClient } = require("./axiosClient");

const AuthApi = {
    signUp(data) {
        const url = '/signup';
        return axiosClient.post(url, data);
    }
}

export default AuthApi;
