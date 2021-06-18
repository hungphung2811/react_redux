import axios from 'axios';
import { URI } from 'service/constants/configConstant';

const axiosClient = axios.create({
    // baseURL: 'http://localhost:4000/api',
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
