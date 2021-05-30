import axios from 'axios';
import { URI } from 'constants/configConstant';

const axiosClient = axios.create({
    // baseURL: 'https://hungpvph12160-pake-user.herokuapp.com',
    baseURL: URI,
    header: {
        'content-type': 'application/json'
    }
})

// custom return data
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});

export default axiosClient;
