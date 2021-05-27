export const getProducts = (products) => {
    return {
        type: 'GET_PRODUCT',
        payload: products
    }
}