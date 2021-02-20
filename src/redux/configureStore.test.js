import { createStore } from 'redux'
import rootReducer from './reducers'
import initialState from './reducers/initialState'
import * as actions from './actions/productActions'

it("Should load product to store", () => {

    // arrange
    const store = createStore(rootReducer, initialState)
    const products = {
        sku: 5493179
    }

    // action
    const action = actions.loadProductsSuccess(products)
    store.dispatch(action)

    // assert
    const state = store.getState()
    expect(state.products.sku).toEqual(5493179)
})
