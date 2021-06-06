import axiosClient from './axiosClient';

const ProductApi = {
    getAll() {
        const url = '/products'
        return axiosClient.get(url)
    },
    getOne(id) {
        const url = `products/${id}`;
        return axiosClient.get(url);
    }, getByCategory(categoryId) {
        const url = `/products/?categoryId=${categoryId}`
        return axiosClient.get(url)
    }
    , deleteProduct(productId, userId, token) {
        const url = `/products/${productId}/${userId}`;
        return axiosClient.delete(url, { headers: { Authorization: `Bearer ${token}` } });
    },
    createProduct(product, userId, token) {
        const url = `/products/${userId}`;
        return axiosClient.post(url, product, { headers: { Authorization: `Bearer ${token}` } });
    },
    updateProduct(id, product, userId, token) {
        const url = `/products/${id}/${userId}`;
        return axiosClient.put(url, product, { headers: { Authorization: `Bearer ${token}` } });
    }, getItemsByOption(option) {
        const arrOption = [];
        if (option) {
            for (const key in option) {
                arrOption.push(`${key}=${option[key]}&`);
            }
        }
        const url = `/products?${arrOption.join('')}`;
        return axiosClient.get(url);
    }
}

export default ProductApi;
