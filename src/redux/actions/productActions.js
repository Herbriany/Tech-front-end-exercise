import * as types from './actionTypes'
import pdpApi from '../../api/pdpApi'

export function loadProductsSuccess(products) {
    return { type: types.LOAD_PRODUCTS_SUCCESS, products}
}

export function loadProducts() {
    return function(dispatch) {
        return pdpApi.getProducts()
        .then(products => {
            dispatch(loadProductsSuccess(products))
        })
        .catch(error => {
            throw error
        })
    }
}