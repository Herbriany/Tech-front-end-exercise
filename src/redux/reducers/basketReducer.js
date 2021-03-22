import initialState from './initialState'
import * as types from '../actions/actionTypes'
// import { produce } from 'immer'

export default function basketReducer(state = initialState.basket, action) {
    switch (action.type) {
        case types.ADD_PRODUCT_TO_BASKET:
            return [...state, { ...action.product }]
        case types.INCREMENT_BASKET_PRODUCT:
            return state.map(product => product.productId === action.product.productId ? action.product : product)
        case types.DECREMENT_BASKET_PRODUCT:
            return state.map(product => product.productId === action.product.productId ? action.product : product)
        case types.EMPTY_BASKET:
            return action.products
        case types.REMOVE_PRODUCT:
            return state.filter(product => product.productId !== action.product.productId)
        default:
            return state
    }
}