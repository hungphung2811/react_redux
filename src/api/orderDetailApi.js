import axiosClient from './axiosClient'
const OrderDetailApi = {
    add(order, userId, token) {
        const url = `/order-detail/${userId}`;
        return axiosClient.post(url, order, { headers: { Authorization: `Bearer ${token}` } })
    },
}

export default OrderDetailApi
