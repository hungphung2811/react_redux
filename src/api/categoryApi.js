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
    }, delete(categoryId, userId, token) {
        const url = `/category/${categoryId}/${userId}`;
        return axiosClient.delete(url, { headers: { Authorization: `Bearer ${token}` } });
    },
    create(category, userId, token) {
        const url = `/category/${userId}`;
        return axiosClient.post(url, category, { headers: { Authorization: `Bearer ${token}` } });
    },
    updateProduct(id, category, userId, token) {
        const url = `/category/${id}/${userId}`;
        return axiosClient.put(url, category, { headers: { Authorization: `Bearer ${token}` } });
    }
}

export default CategoryApi;
