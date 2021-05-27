import axiosClient from './axiosClient';

const ProductApi = {
    getAll() {
        const url = '/products'
        return axiosClient.get(url)
    },
    getOne() {

    }
}

export default ProductApi;
