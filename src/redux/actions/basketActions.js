import * as types from './actionTypes'

export function addProductToBasket(product) {
    product = {...product, amount: 1}
    return {type: types.ADD_PRODUCT_TO_BASKET, product}
}

export function incrementBasketProduct(product) {
    product = {...product, amount: product.amount + 1}
    return {type: types.INCREMENT_BASKET_PRODUCT, product}
}

export function decrementBasketProduct(product) {
    product = {...product, amount: product.amount - 1}
    return {type: types.DECREMENT_BASKET_PRODUCT, product}
}

export function removeProduct(product) {
    return {type: types.REMOVE_PRODUCT, product}
}

export function emptyBasket() {
    const products = []
    return {type: types.EMPTY_BASKET, products}
}