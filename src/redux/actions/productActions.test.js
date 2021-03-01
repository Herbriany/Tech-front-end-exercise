import * as actions from './productActions'
import * as types from './actionTypes'
import { products } from '../../../tools/mockData'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

// creating mockstore for aync action tests
const middleware = [thunk]
const mockStore = configureMockStore(middleware)

it("should create LOAD_PRODUCTS_SUCCESS action", () => {

    // arrange
    const products = {
        sku: 1,
        sku: 2
    }

    const expectedAction = {
        type: types.LOAD_PRODUCTS_SUCCESS, products
    }

    // action
    const action = actions.loadProductsSuccess(products)

    // assert
    expect(action).toEqual(expectedAction)
})

describe("Async actions", () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it("load products action dispatches 'LOAD_PRODUCTS_SUCCESS'", () => {
        // arrange 
        fetchMock.mock("*", {
            body: products, 
            headers: {"content-type": "application/json"}
        })
        const expectedAction = [
            { type: types.API_CALL_IN_PROGRESS},
            { type: types.LOAD_PRODUCTS_SUCCESS, products},
            { type: types.API_CALL_SUCCESS}
        ]

        // action 
        const store = mockStore({ products: [] })
        return store.dispatch(actions.loadProducts()).then(() => {
            // assert
            expect(store.getActions()).toEqual(expectedAction)
        })

    })
})