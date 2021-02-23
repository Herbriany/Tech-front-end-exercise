import React from 'react'
import { mount } from 'enzyme'
import { ManageBasketPage } from './ManageBasketPage'
import { products } from '../../../tools/mockData'

function render(args) {
    const defaultProps = {
        basketProducts: products, 
        decrementBasketProduct:jest.fn(), 
        incrementBasketProduct:jest.fn(), 
        emptyBasket:jest.fn(), 
        removeProduct:jest.fn(), 
        totalProductCount: 8
    }
    const props = { ...defaultProps, ...args }

    return mount(<ManageBasketPage {...props} />)
}

it("sets error when attempting to save an empty title field", () => {
    const wrapper = render();
    const error = wrapper.find("button").first();
    expect(error.text()).toBe("-")
})