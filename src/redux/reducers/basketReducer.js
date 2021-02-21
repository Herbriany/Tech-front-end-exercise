import initialState from './initialState'
import * as types from '../actions/actionTypes'
// import { produce } from 'immer'

export default function basketReducer(state = initialState.basket, action) {
    switch (action.type) {
        case types.ADD_PRODUCT_TO_BASKET:
            return [...state, {...action.product}]
        case types.INCREMENT_BASKET_PRODUCT:
            return state.map(product => product.productId === action.product.productId ? action.product : product)
        default:
            return state
    }
}