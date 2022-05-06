import * as t from '../reducers/types';
import { Product } from '../types/product';

export const setStorageProducts = () => {
    let products = JSON.parse(localStorage.getItem('products'));
    console.log(products)
    return {
        type: t.SET_ALL_PRODUCT,
        payload: products??=[],
    };
}

export const setAddProduct = (product: Product) => {
    let products = JSON.parse(localStorage.getItem('products'));
    if (!products || products == null || product == undefined) products = [];
    let newProducts = [...products, product];
    localStorage.setItem('products', JSON.stringify(newProducts));
    return {
        type: t.SET_ADD_PRODUCT,
        payload: newProducts,
    };
};

export const setRemoveProduct = (products: Product[]) => {
    localStorage.setItem('products', JSON.stringify(products));
    return {
        type: t.SET_REMOVE_PRODUCT,
        payload: products
    }
}