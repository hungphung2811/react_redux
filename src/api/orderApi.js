import axiosClient from './axiosClient'

const OrderApi = {
    addOrder(order, userId, token) {
        const url = `/order/${userId}`;
        return axiosClient.post(url, order, { headers: { Authorization: `Bearer ${token}` } })
    },
    get() {
        const url = '/order'
        return axiosClient.get(url)
    }
}

export default OrderApi;
