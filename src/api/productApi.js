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
    , deleteProduct(productId,userId,token) {
        const url = `/products/${productId}/${userId}`;
        return axiosClient.delete(url, { headers: { Authorization: `Bearer ${token}` } });
    }
}

export default ProductApi;
