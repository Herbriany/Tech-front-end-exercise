import initialState from './initialState'
import * as types from '../actions/actionTypes'

export default function basketReducer(state = initialState.basket, action) {
    switch (action.type) {
        case types.ADD_PRODUCT_TO_BASKET:
            return [...state, {...action.product}]
        default:
            return state
    }
}