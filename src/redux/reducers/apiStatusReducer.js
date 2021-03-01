import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function apiCountReducer(state = initialState.apiStatus , action) {
    switch (action.type) {
        case types.API_CALL_IN_PROGRESS:
            return state + 1
        case types.API_CALL_ERROR || types.API_CALL_SUCCESS:
            return state - 1
        default:
            return state
    }
}