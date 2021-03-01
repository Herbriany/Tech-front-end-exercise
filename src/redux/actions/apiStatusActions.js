import * as types from './actionTypes'

export function startApiCall() {
    return { type: types.API_CALL_IN_PROGRESS }
}

export function apiCallError() {
    return { type: types.API_CALL_ERROR }
}

export function apiCallSuccess() {
    return { type: types.API_CALL_SUCCESS }
}