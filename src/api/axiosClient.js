import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://hungpvph12160-pake-user.herokuapp.com',
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
