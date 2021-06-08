const { default: axiosClient } = require("./axiosClient");

const AuthApi = {
    signUp(data) {
        const url = '/signup';
        return axiosClient.post(url, data);
    },
    signIn(data) {
        const url = '/signin';
        return axiosClient.post(url, data);
    },
    signOut() {
        const url = '/signout';
        return axiosClient.post(url)
    },
    checkAdmin(userId, token) {
        const url = `/checkAdmin/${userId}`;
        return axiosClient.get(url, { headers: { Authorization: `Bearer ${token}` } })
    }
}

export default AuthApi;
