import * as types from './actionTypes'

export function addProductToBasket(product) {
    product = {...product, amount: 1}
    return {type: types.ADD_PRODUCT_TO_BASKET, product}
}

export function incrementBasketProduct(product) {
    product = {...product, amount: product.amount + 1}
    return {type: types.INCREMENT_BASKET_PRODUCT, product}
}