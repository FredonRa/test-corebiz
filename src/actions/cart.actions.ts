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

export const setRemoveProduct = (product: Product) => {
    let products = JSON.parse(localStorage.getItem('products'));
    console.log(products)
    let lengthOfProducts = products.length;
    let cont = 0;
    const indexOfElement = products.filter((prod: Product) => {
        console.log("lengthOfProducts: ", lengthOfProducts)
        console.log("products.length: ", products.length)
        if (cont) return prod;
        if (prod.productId == product.productId) cont++;
        return prod.productId !== product.productId
    });
    console.log(indexOfElement)
    // if (indexOfElement > -1) products.splice(indexOfElement, 1);
    localStorage.setItem('products', JSON.stringify(indexOfElement));
    return {
        type: t.SET_REMOVE_PRODUCT,
        payload: indexOfElement
    }
}