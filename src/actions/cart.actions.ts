import * as t from '../reducers/types';
import { Product } from '../types/product';

// Get all products from local storage
export const setStorageProducts = () => {
    let products = JSON.parse(localStorage.getItem('products') || '{}');
    return {
        type: t.SET_ALL_PRODUCT,
        payload: products??=[],
    };
}

// Receive product for add in the cart
export const setAddProduct = (product: Product) => {
    let products = JSON.parse(localStorage.getItem('products') || '{}');
    if (!products || products == null || product == undefined) products = [];
    let newProducts = [...products, product];
    localStorage.setItem('products', JSON.stringify(newProducts));
    return {
        type: t.SET_ADD_PRODUCT,
        payload: newProducts,
    };
};

// Receive product for remove him in the cart
export const setRemoveProduct = (product: Product) => {
    let products = JSON.parse(localStorage.getItem('products') || '{}');
    let cont = 0;
    const indexOfElement = products.filter((prod: Product) => {
        if (cont) return prod;
        if (prod.productId == product.productId) cont++;
        return prod.productId !== product.productId
    });
    localStorage.setItem('products', JSON.stringify(indexOfElement));
    return {
        type: t.SET_REMOVE_PRODUCT,
        payload: indexOfElement
    }
}