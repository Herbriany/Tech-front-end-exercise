import React from 'react'
import { mount } from 'enzyme'
import { ManageBasketPage } from './ManageBasketPage'
import { products } from '../../../tools/mockData'

function render(args) {
    const defaultProps = {
        basketProducts: products,
        decrementBasketProduct: jest.fn(),
        incrementBasketProduct: jest.fn(),
        emptyBasket: jest.fn(),
        removeProduct: jest.fn(),
        totalProductCount: 8
    }
    const props = { ...defaultProps, ...args }

    return mount(<ManageBasketPage {...props} />)
}

describe("Mount tests", () => {
    it("8 listed items in total", () => {
        const wrapper = render();
        expect(wrapper.find("li").length).toEqual(8)
    })

    it("sets error when attempting to save an empty title field", () => {
        const wrapper = render();
        const total = wrapper.find(".basket-summary").find("p").last()
        expect(total.text()).toEqual("Total: £1254.94")
    })
})
