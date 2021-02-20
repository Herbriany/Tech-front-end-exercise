import * as actions from '../actions/productActions'
import productReducer from './productReducer'
import { products } from  '../../../tools/mockData'
import initialState from './initialState'

it("LOAD_PRODUCTS_SUCCESS returns products", () => {
    // arrange
    const action = actions.loadProductsSuccess(products)

    // action
    const newState = productReducer(initialState, action)

    // assert
    expect(newState).toEqual(products)
})