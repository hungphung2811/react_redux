import axiosClient from './axiosClient';

const CategoryApi = {
    getAll() {
        const url = '/category';
        return axiosClient.get(url);
    }
}

export default CategoryApi;
