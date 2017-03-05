import axios from "axios"

export const addproduct = (product) => {
    return {
        type:'ADD_PRODUCT',
        key: product.key,
        name: product.name,
        price: product.price,
        deleted: product.deleted
    }
}