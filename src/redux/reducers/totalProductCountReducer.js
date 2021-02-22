import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function totalProductCountReducer(state = initialState.totalProductCount, action) {
    switch (action.type) {
        case types.ADD_PRODUCT_TO_BASKET:
            return state + 1
        case types.INCREMENT_BASKET_PRODUCT:
            return state + 1
        case types.DECREMENT_BASKET_PRODUCT:
            return state - 1
        case types.EMPTY_BASKET:
            return 0
        case types.REMOVE_PRODUCT:
            return state - action.product.amount
        default:
            return state
    }
}