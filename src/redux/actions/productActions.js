import * as types from './actionTypes'
import * as pdpApi from '../../api/pdpApi'
import * as apiActions from './apiStatusActions'

export function loadProductsSuccess(products) {
    return { type: types.LOAD_PRODUCTS_SUCCESS, products}
}

export function loadProducts() {
    return function(dispatch) {
        dispatch(apiActions.startApiCall())
        return pdpApi.getProducts()
        .then(products => {
            dispatch(loadProductsSuccess(products))
            dispatch(apiActions.apiCallSuccess())
        })
        .catch(error => {
            dispatch(apiActions.apiCallError())
            throw error
        })
    }
}