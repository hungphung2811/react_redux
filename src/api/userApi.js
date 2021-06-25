import axiosClient from "./axiosClient";

const UserApi = {
    getOne(id) {
        const url = `/users/getone/${id}`
        return axiosClient.get(url)
    }
}

export default UserApi;