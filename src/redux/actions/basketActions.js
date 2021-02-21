import * as types from './actionTypes'

export function addProductToBasket(product) {
    return {type: types.ADD_PRODUCT_TO_BASKET, product}
}