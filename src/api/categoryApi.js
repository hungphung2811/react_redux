import axiosClient from './axiosClient';

const CategoryApi = {
    getAll() {
        const url = '/category';
        return axiosClient.get(url);
    },
    getOne(id){
        const url = `/category/${id}`
        return axiosClient.get(url)
    }
    , getItemsByOption(option) {
        const arrOption = [];
        if (!option) {
            return false;
        }
        for (const key in option) {
            arrOption.push(`${key}=${option[key]}&`);
        }
        const url = `/category?${arrOption.join('')}`;
        return axiosClient.get(url);
    }
}

export default CategoryApi;
